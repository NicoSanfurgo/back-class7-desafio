const ProductManager = require("./ProductManager");

const express = require("express");
const path = require("path")

const app = express();


app.listen(8080, ()=>{
    console.log("Servidor levantado", 8080);
});

app.get("/", (req, res)=>{
    res.send("Desafio clase 7")
});


const manager = new ProductManager("products.json");

app.get("/products", async (req, res) => {
    let products = await manager.getProducts();
    const limit = req.query.limit;
    let result = products

    if (limit) {
        result = products.slice(0, limit);
    }

    res.send(result);
})

app.get('/products/:id', async (req, res) => {
    let productId = req.params.id;
    let product = await manager.getProductById(parseInt(productId));

    if (!product) {
        return res.send({ error: "Producto invalido o no encontrado"});
    } else {
        res.send({product});
    }
})

