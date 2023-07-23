const path = require('path');
const fs = require('fs');

const ruta = path.resolve(__dirname, '../data/products.json');
const jsonProducts = fs.readFileSync(ruta, {encoding: 'utf-8'});
let products = JSON.parse(jsonProducts);



const controller = {
    crear: (req, res) => {
        let product = {}
        if (req.body.name == undefined){
            return res.json({mgs: 'El campo name es requerido'});
        }
        product.name = req.body.name;
        product.price = req.body.price;
        product.discount = req.body.discount;
        product.category = req.body.category;
        product.description = req.body.description;
        product.image = req.body.image;

        console.log(product);
        res.json('Crear un producto')
    },
    listar: (req, res) => {
        res.json('Listado de productos')
    },
    detalle: (req, res) => {
        res.json('Detalle del producto')
    },
};

module.exports = controller;