import { productListViewModel } from "./ViewModel";

//Se crea la clase Vista que se encarga de mostrar la lista
export class productView {
    //Se establece una propiedad que tiene relación con el modelo de vista 
    //para obtener sus datos que tiene almacenados en la lista
    viewModel: productListViewModel;
    constructor(viewModel: productListViewModel) {
        this.viewModel = viewModel;
    }
    //Metodo que muestra la lista de productos
    render(): void {
        console.log("Lista de productos:")
        this.viewModel.model.forEach(element => {
            console.log(`${element.id}  ${element.name}  ${element.price}  ${element.description}`)
        });
    }
}