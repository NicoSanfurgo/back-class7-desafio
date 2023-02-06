const fs = require('fs')

let product = []

class ProductsManager {
    constructor(filename) {
        this.filename = filename
    }

    createProduct = async(title, description, price, thumbnail, code, stock) => {
        let id
        if (product.length === 0) id = 1
        else id = product[product.length-1].id + 1 
        product.push({
            id, 
            title,
            description,
            price,
            thumbnail,
            code,
            stock})
        fs.writeFileSync(this.filename, JSON.stringify(product, null, 2))
    }
}

async function products() {
    const manager = new ProductsManager('products.json')

    await manager.createProduct('Gorra', 'Buena calidad', 400 , 'https://i0.wp.com/miscellaneousbycaff.com.ar/wp-content/uploads/2021/05/gorra-negra-NY.jpg?fit=901%2C768&ssl=1' ,4001, 230)
    await manager.createProduct('Remera', 'Demasiada calidad', 350 , 'https://http2.mlstatic.com/D_NQ_NP_837591-MLA50891162952_072022-O.webp' ,4002, 220)
    await manager.createProduct('Camisa', 'Excelente calidad', 550 , 'https://http2.mlstatic.com/D_NQ_NP_954901-MLA51079815066_082022-O.jpg' ,4003, 250)
    await manager.createProduct('Jeans', 'Comodos', 450 , 'https://static.dafiti.com.ar/p/byh-jeans-0507-8911221-1-catalog-new.jpg' ,4004, 210),
    await manager.createProduct('Chomba', 'Agradable al uso', 520 , 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/h/chomba-kappa-ezio-negra-39502351683wa03-1.jpg' ,4005, 100),
    await manager.createProduct('Anteojos', 'Ideal para el sol', 620 , 'https://d3ugyf2ht6aenh.cloudfront.net/stores/113/564/products/2-2-noah-black-mate1-2d51915ecff272958e16276832782347-1024-1024.jpg' ,4006, 20),
    await manager.createProduct('Cadenita', 'Urbano y elegante', 150 , 'https://http2.mlstatic.com/D_NQ_NP_629851-MLA47668466776_092021-W.jpg' ,4007, 30),
    await manager.createProduct('Ojotas', 'Ideales para la playa', 250 , 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/o/j/ojotas-adidas-adilette-shower-azul-43334528-100010gz5920001-1.jpg' ,4008, 100),
    await manager.createProduct('Pollera', 'Ideal para el verano y primavera', 374 , 'https://http2.mlstatic.com/D_NQ_NP_695462-MLA45884760134_052021-W.jpg' ,4009, 312),
    await manager.createProduct('Bermuda', 'Frescos y elegantes', 340 , 'https://http2.mlstatic.com/D_NQ_NP_938079-MLA51497406701_092022-O.webp' ,4010, 110)
}

products()