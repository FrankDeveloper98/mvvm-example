import { productListViewModel } from "./ViewModel";
import { productModel } from "./model";
import { productView } from "./view";

//Instacia del Modelo
const product4 = new productModel(4, "Video Console", 500, "PS5")
//Instancia del modelo de vista
const viewModelController = new productListViewModel()
//Se añade un producto a la lista mediante el controlador
viewModelController.addProduct(product4)
const view = new productView(viewModelController)
//Se carga la lista de producto para ser mostrada
view.render()
//Se elimina un producot de la lista mediante el controlador
viewModelController.deleteProduct(product4)
console.log("\n")
//Se actualiza la lista nuevamente para que los cambios se reflejen
view.render()