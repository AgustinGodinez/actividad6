// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "@/database/models";
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
            where: {
                email: req.body.email 
            }
        });
        
        if (user  === null)  {
            res.status(404).json({authenticated: false, message:"credenciales incorrectas, validar usuario y/o password"});
        }else{
            console.log("Autenticando");
            if ( bcrypt.compareSync(req.body.password,user.password)) {
                console.log(`user: ${user.email} - acceso: ${Date.now()}`);
                res.status(200).json({authenticated: true, user});
            } else {
                console.log(`user: ${user.email} - acceso denegado`);
                res.status(404).json({authenticated: false, message:"credenciales incorrectas, validar usuario y/o password"});
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
            let us  = await db.User.update({...req.body},
                { fields: ['nombre','apellido_paterno','apellido_materno',
                'curp', 'fecha_nacimiento', 'email', 'password', 'calle', 'num_ext', 'num_int', 'codigo_postal', 
                'celular', 'estado', 'ciudad'],
                where: {
                    id: user.id
                }});

                // enviamos la respuesta
                res.status(200).json({
                    update: true,
                    us,
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
            message: `Ocurrio un error al procesar su solicitud ${error.message}}`
        })
    }
}


