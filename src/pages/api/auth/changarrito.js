// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "@/database/models";
const Sequelize = require('sequelize');
const { fn, col } = db.User.sequelize;
import bcrypt from 'bcrypt';

export default function handler(req, res) {
    
    switch (req.method) {
        case 'GET':
            break;
        case 'POST':
           return login(req, res);
        case 'PUT':
            return updatePassword(req, res);
        default:
            return res.status(404).json({error:true,message: 'Opcion invalida'});
    }
}

const login = async(req, res) => {
    try {
        const user = await db.User.findOne({
            attributes: [
               'id', ['nombre', 'name'], 'email', 'celular', ['rol_id','rol'],['imagen_url', 'image'], 'fecha_nacimiento', 'password'],
            where: {
                email: req.body.email 
            }
        },{ raw: true });
        if (user  === null)  {
            res.status(401).end();
            return
            // json({authenticated: false, message:"credenciales incorrectas, validar usuario y/o password"});
        }else{
            if ( bcrypt.compareSync(req.body.password,user.password)) {
                console.log(`user: ${user.email} - acceso: ${Date.now()}`);
                user.password = "";
                return res.status(200).json(user);
            } else {
                console.log(`user: ${user.email} - acceso denegado`);
                res.status(401).end();
                return
                //.json({authenticated: false, message:"credenciales incorrectas, validar usuario y/o password"});
            }
        }

        
    } catch (error) {
        return res.status(500).send({ error: true, message: `Error al procesar solicitud: ${error.message}` })
    }
}

const updatePassword = async(req, res) => {
    try {
        const user = await db.User.findOne({
            where: {
                email: req.body.email 
            }
        });

        if (user != null) {
            let us  = await db.User.update({password: req.body.password, updated_by: req.body.id},
                { fields: ['password', 'updated_by'],
                where: {
                    id: user.id
                },
                individualHooks: true,
            });

                // enviamos la respuesta
                res.status(200).json({
                    update: true,
                    message: "Password actualizado correctamente."
                });
        } else {
            res.status(400).json({
                error: true,
                message: 'Usuario no registrado, favor de verificar'
            });
        }
    } catch (error) {
        res.status(400).json({
            error: true,
            message: `Ocurrio un error al procesar su solicitud ${error.message}`
        })
    }
}


