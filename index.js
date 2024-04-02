class ProductManager {
    constructor() {
        this.productsArray = [];
        this.id = 0;
    }
    addProduct(title, description, price, thumbnail, code, stock) {

        let newProduct = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        }

       let codeExists = this.productsArray.some((product) => product.code == newProduct.code);
       
       if (codeExists == false && !Object.keys(newProduct).includes(undefined)) { // Validamos que no se repita el code y que los campos sean obligatorios.
        this.id = this.id++;
        newProduct = {...newProduct, id: this.id};
        this.productsArray.push(newProduct);
       }
    }
    getProducts () {
        if (this.productsArray.length != 0) {
            return this.productsArray;
        } else {
            return "Su array está vacío."
        }
    }
    getProductById(id) {
       let gottenProduct = this.productsArray.find(product => product.id = id);
       if (gottenProduct) {
        return gottenProduct;
       } else {
        return `No se encontró el producto que coincida con la id "${id}".`
       }
    }
}