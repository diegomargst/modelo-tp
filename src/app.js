const express = require('express')
const app = express()
const products = require('./routes/products')

/*Configuraciones*/ //es para convertir de json y ver la informacion, es como json.parse => son middlewares
//se usa siempre app.use y se usa express
app.use(express.urlencoded({extended: false}));
app.use(express.json());
/*Rutas*/
app.use('./products', products);
console.log(products)

app.listen(3000, () => console.log('Server corriendo en puerto 3000'));