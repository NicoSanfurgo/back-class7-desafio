
const express = require("express");
const path = require("path")

const app = express();

app.listen(3000, ()=>{
    console.log("Servidor levantado", 3000);
});


app.get("/", (req, res)=>{
    res.send("Desafio clase 7")
});

app.get("/products", (req, res) => {
    res.sendFile(path.join(__dirname + "/products.json"))
})

app.get('/products/:id', (req, res) => {
    const {id} = res.params
    const product = product.find(item => item.id === id)
    res.send({product: product.title})
    if (!product) res.send({ error: "User not found" })
    else res.send({ product: product.title })
})

