// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "@/database/models";
const Sequelize = require('sequelize');
const { fn, col } = db.User.sequelize;
import bcrypt from 'bcrypt';

export default function handler(req, res) {
    
    switch (req.method) {
        case 'POST':
           return login(req, res);
        case 'PUT':
            const query = req.query;
            const { filtro } = query;
            if(filtro === undefined || filtro.length === 0){
                // Reset Password
                return resetPassword(req, res);
            }else{
                // update Password
                return updatePassword(req, res);
            }
        default:
            return res.status(404).json({error:true,message: 'Opcion invalida'});
    }
}

const login = async(req, res) => {
    try {
        const user = await db.User.findOne({
            attributes: [
               'id', 
               ['nombre', 'name'], 
               ['apellido_paterno', 'apellido'],
               'email', 
               ['imagen_url', 'image'],
               'password'
            ],
            where: {
                email: req.body.email 
            },
            include: [
                {
                model: db.Roles,
                as: 'Rol',
                attributes: ['nombre']
                }
            ]
        });

        if (user  === null)  {
            res.status(404).end()
            return
            // json({authenticated: false, message:"credenciales incorrectas, validar usuario y/o password"});
        }else{
            if ( bcrypt.compareSync(req.body.password,user.password)) {
                console.log('Coinciden credenciales')
                console.log(`Login user: ${user.email} - acceso: ${Date.now()}`);
                user.password = ''
                return res.status(200).json(user);
            } else {
                console.log(`user: ${user.email} - acceso denegado`);
                res.status(401).end()
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

const resetPassword = async(req, res) => {
    try {
        const user = await db.User.findOne({
            where: {
                email: req.body.email 
            }
        });

        if (user != null) {
            let us  = await db.User.update({password: req.body.password},
                { fields: ['password'],
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

