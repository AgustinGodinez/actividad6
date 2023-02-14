// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "@/database/models";
import { Op } from "sequelize";



export default function handler(req, res) {
    
    switch (req.method) {
        case 'GET':
            const query = req.query;
            const { filtro } = query;
            if(filtro === undefined || filtro.length === 0){
                // console.log('Tdos');
                return userList(req, res);
            }else{
                // console.log('buscando con filtro');
                return findUser(req, res);
            }
        case 'POST':
            return addUser(req, res);
        case 'PUT':
            return updateUser(req, res);
        case 'DELETE':
            return deleteUser(req, res);
        default:
            return res.status(404).json({error:true,message: 'Opcion invalida'});
    }
}

const userList = async(req, res) => {
    try {
        //Retornamos todos  los useros
        
        const users = await db.User.findAll();
        res.status(200).json(users);
    } catch (error) {
        return res.status(500).send({ error: true, message: `Error al procesar solicitud: ${error.message}` })
    }
}

const findUser = async(req, res) => {
    try {
        
        //Retornamos todos  los useros
        const query = req.query;
        const { filtro } = query;
        console.log(filtro);

        const users = await db.user.findAll({
            where: {
                [Op.or]: {
                    nombre: { 
                        [Op.like]: '%'+filtro+'%'
                    },
                    apellido_paterno: { 
                        [Op.like]: '%'+filtro+'%'
                    },
                    apellido_materno: { 
                        [Op.like]: '%'+filtro+'%'
                    }
                }
            }
        });
        res.status(200).json(users);
    } catch (error) {
        return res.status(500).send({ error: true, message: `Error al procesar solicitud: ${error.message}` })
    }
}

const addUser = async(req, res) => {
    try {
        // pasamos los datos al modelo para crear el registro
        console.log('Data: ');
        console.log(req.body.values);
        const user = await db.User.create({ ...req.body.values });
        // enviamos la respuesta
        res.status(201).json({
            user,
            message: "Usuario registrado correctamente."
        })
    } catch (error) {
        console.log(error);
        let errors = [];
        if (error.errors) {
            errors = error.errors.map( (item) => ({
                field: item.path,
                error: item.message
            }));
        }
         

        res.status(400).json({
            error: true,
            message: `Ocurrio un error al procesar su solicitud ${error.message}`,
            errors
        });
    }
}

const updateUser = async(req, res) => {
    try {
        // pasamos los datos al modelo para crear el registro
        const user = await db.User.Update({...req.body},
            { fields: ['nombre','apellido_paterno','apellido_materno',
            'curp', 'fecha_nacimiento', 'email', 'password', 'calle', 'num_ext', 'num_int', 'codigo_postal', 
            'celular', 'estado', 'ciudad'],
            where: {
                id: usuario.id
            }
        });
        // enviamos la respuesta
        res.status(200).json({
            user,
            message: "Usuario registrado correctamente."
        })
    } catch (error) {
        let errores = error.errors.map( (item) => ({
            field: item.path,
            error: item.message
        }));
        res.status(400).json({
            error: true,
            message: `Ocurrio un error al procesar su solicitud ${error.message}}`,
            errores
        })
    }
}

const deleteUser = async(req, res) =>  {
    try {
        // pasamos el ID al modelo para elimnar el registro
        const user = await db.User.destroy({
            where: {
                id: req.body.id
            }
        });
        // enviamos la respuesta
        res.status(200).json({
            user,
            message: "Usuario eliminado correctamente."
        })
    } catch (error) {
        let errores = error.errors.map( (item) => ({
            field: item.path,
            error: item.message
        }));
        res.status(400).json({
            error: true,
            message: `Ocurrio un error al procesar su solicitud ${error.message}}`,
            errores
        })
    }
}
