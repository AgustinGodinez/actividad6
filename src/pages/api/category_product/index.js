// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "@/database/models"
import { where, Op } from "sequelize"



export default function handler(req, res) {
    
    switch (req.method) {
        case 'GET':
            const query = req.query
            const { filtro } = query
            if(filtro === undefined || filtro.length === 0){
                // console.log('Tdos')
                return categoryFetch(req, res)
            }else{
                // console.log('buscando con filtro')
                return findCategory(req, res)
            }
        case 'POST':
            return addCategory(req, res)
        case 'PUT':
            const param = req.query
            const { id } = param
            if (id) {
                return updateEstatus(req, res, id)
            }else{
                return updateCategory(req, res)
            }
        case 'DELETE':
            return deleteCategory(req, res)
        default:
            return res.status(404).json({error:true,message: 'Opcion invalida'})
    }
}

const categoryFetch = async(req, res) =>{
    try {
        //Retornamos todos  los Categoryos
        const categorias = await db.Category_Product.findAll(
            {attributes: ['nombre', 'id', 'url_image', 'active'],
            // where: { active: 1} 
        })
        res.status(200).json(categorias)
    } catch (error) {
        return res.status(500).send({ error: true, message: `Error al procesar solicitud: ${error.message}` })
    }
}

const findCategory = async(req, res) =>{
    try {
        
        //Retornamos todos  los Categoryos
        const query = req.query
        const { filtro } = query
        console.log(filtro)

        const Categorys = await db.Category_Product.findAll({
            where: {
                nombre: { 
                    [Op.like]: '%'+filtro+'%'
                }
            }
        })
        res.status(200).json(Categorys)
    } catch (error) {
        return res.status(500).send({ error: true, message: `Error al procesar solicitud: ${error.message}` })
    }
}

const addCategory = async(req, res ) =>{
    try {
        console.log("Agregando categoria")
        console.log(req.body)
        const Categorys = await db.Category_Product.create({...req.body})
        res.status(200).json({Categorys, message: "Categoria registrada correctamente"})
    } catch (error) {
        console.log(error)
        let errors = []
        if (error.errors) {
            errors = error.errors.map( (item) => ({
                field: item.path,
                error: item.message
            }))
        }
         
        res.status(400).json({
            error: true,
            message: `Ocurrio un error al procesar su solicitud ${error.message}`,
            errors
        })
    }
    
}

const updateCategory = async(req, res) =>{
    try {
        // pasamos los datos al modelo para crear el registro
        const Category = await db.Category_Product.update({...req.body},
            { fields: ['nombre','url_image'],
            where: {
                id: req.body.id
            }
        })
        // enviamos la respuesta
        res.status(200).json({
            Category,
            message: "Categoria actualizada correctamente."
        })
    } catch (error) {
        let errors = []
        if (error.errors) {
            errors = error.errors.map( (item) => ({
                field: item.path,
                error: item.message
            }))
        }
        res.status(400).json({
            error: true,
            message: `Ocurrio un error al procesar su solicitud ${error.message}}`,
            errors
        })
    }
}

const updateEstatus = async(req, res, id) =>{
    try {
        console.log("actualizando estatus, categoria: "+id)
        console.log(req.body)
        // pasamos los datos al modelo para crear el registro
        const Category = await db.Category_Product.update({...req.body},
            { fields: ['active'],
            where: {
                id: id
            }
        })
        console.log(Category)
        // enviamos la respuesta
        res.status(200).json({
            Category,
            message: "Cambio de estatus correcto"
        })
    } catch (error) {
        let errors = []
        if (error.errors) {
            errors = error.errors.map( (item) => ({
                field: item.path,
                error: item.message
            }))
        }
        res.status(400).json({
            error: true,
            message: `Ocurrio un error al procesar su solicitud ${error.message}}`,
            errors
        })
    }
}

const deleteCategory = async(req, res) =>{
    try {
        // pasamos el ID al modelo para elimnar el registro
        const query = req.query
        const { id } = query

        const user = await db.Category_Product.destroy({
            where: {
                id: id
            }
        })
        // enviamos la respuesta
        res.status(200).json({
            user,
            message: "Categoria eliminada correctamente"
        })
    } catch (error) {
        let errors = []
        if (error.errors) {
            errors = error.errors.map( (item) => ({
                field: item.path,
                error: item.message
            }))
            console.log(errors)
        }
        res.status(400).json({
            error: true,
            message: `Ocurrio un error al procesar su solicitud ${error.message}}`,
            errors
        })
    }
}
