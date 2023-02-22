// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "@/database/models";
import { where, Op } from "sequelize";



export default function handler(req, res) {
    
    switch (req.method) {
        case 'GET':
            const query = req.query;
            const { filtro } = query;
            if(filtro === undefined || filtro.length === 0){
                // console.log('Tdos');
                return productList(req, res);
            }else{
                // console.log('buscando con filtro');
                return findProduct(req, res);
            }
        case 'POST':
            return addProduct(req, res);
        case 'PUT':
            return updateProduct(req, res);
        case 'DELETE':
            return deleteProduct(req, res);
        default:
            return res.status(404).json({error:true,message: 'Opcion invalida'});
    }
}

const productList = async(req, res) =>{
    try {
        //Retornamos todos  los Productos
        const products = await db.Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        return res.status(500).send({ error: true, message: `Error al procesar solicitud: ${error.message}` })
    }
}

const findProduct = async(req, res) =>{
    try {
        
        //Retornamos todos  los Productos
        const query = req.query;
        const { filtro } = query;
        console.log(filtro);

        const products = await db.Product.findAll({
            where: {
                title: { 
                    [Op.like]: '%'+filtro+'%'
                }
            }
        });
        res.status(200).json(products);
    } catch (error) {
        return res.status(500).send({ error: true, message: `Error al procesar solicitud: ${error.message}` })
    }
}

const addProduct = async(req, res ) =>{
    try {
        const products = await db.Product.create({...req.body});
        res.status(200).json({products, message: "Producto registrado correctamente"});
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

const updateProduct = async(req, res) =>{
    try {
        // pasamos los datos al modelo para crear el registro
        const product = await db.Product.update({...req.body},
            { fields: ['image','title','price','start', 'ranking', 'descripcion'],
            where: {
                id: req.body.id
            }
        });
        // enviamos la respuesta
        res.status(200).json({
            product,
            message: "Producto actualizado correctamente."
        })
    } catch (error) {
        let errors = [];
        if (error.errors) {
            errors = error.errors.map( (item) => ({
                field: item.path,
                error: item.message
            }));
        }
        res.status(400).json({
            error: true,
            message: `Ocurrio un error al procesar su solicitud ${error.message}}`,
            errors
        })
    }
}

const deleteProduct = async() =>{

}
