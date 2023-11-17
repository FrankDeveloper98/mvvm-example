import { productModel } from "./model";
//Se crea el modelo de vista
export class productListViewModel {
    //Lista del modelo
    model: productModel[] = [];

    constructor() {
        //Por defecto se agregan 3 productos a la lista
        this.model = [
            new productModel(1, 'Laptop', 1200, 'High-performance laptop for everyday use'),
            new productModel(2, 'Smartphone', 700, 'Latest smartphone with advanced features'),
            new productModel(3, 'Headphones', 100, 'Wireless headphones with exceptional sound quality'),
        ];
    }

    //Metodo que añade un producto a la lista
    addProduct(product: productModel): void {
        const newProduct = product;
        this.model.push(newProduct);
    }

    //Metodo que elimina un producto de la lista
    deleteProduct(product: productModel): void {
        const index = this.model.indexOf(product);
        this.model.splice(index, 1)
    }
}