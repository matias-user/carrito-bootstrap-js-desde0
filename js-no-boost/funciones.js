import { tabla } from "./selectores.js";
import { array, capturarId } from './app.js';

export let botonesCerrar;
let id = '';

export function recorrerArray(arrays) {
  arrays.forEach((objeto) => {
    const { imagen, precio, titulo, id } = objeto;

    const tbody = document.createElement("tbody");
    tbody.innerHTML += `
      <tr  >
        <td><img src="${imagen}" class="img-fluid" style="width: 40px "></td>
        <td>${titulo}</td>
        <td >${precio}</td>
        <td ><button type="button" class="btn btn-success btnCerrar ${id}" id="${id}">X </button></td>
      </tr>`;
    tabla.appendChild(tbody);
    
  });
};



export function eliminarObj(){
  let botonis = document.querySelectorAll('.btnCerrar');

  botonis.forEach( element => {
    element.addEventListener('click', e => {
      capturarId(e.target.id)});
    });
};

export function limpiarTabla() {
  //Limpiar HTML
  while (tabla.firstChild) {
    tabla.removeChild(tabla.firstChild);
  }
}

export function capturarDatos(event) {
  const cardBody = event.target.parentElement;

  const precio =
    cardBody.firstChild.nextSibling.nextSibling.nextSibling.childNodes[1].firstChild.textContent;

  const titulo = cardBody.firstChild.nextSibling.textContent; //elemento h5 el titulo.
  const imagen = cardBody.parentElement.firstChild.nextSibling.src;
  id = Date.now();

  return {
    precio,
    titulo,
    imagen,
    id
  };
};
  

   

