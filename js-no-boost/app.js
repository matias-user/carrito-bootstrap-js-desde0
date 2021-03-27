import {  botones, btnCarrito, tabla, cerrar } from './selectores.js';
import {  capturarDatos, recorrerArray, limpiarTabla } from './funciones.js';

let objetoListo = {};   
export let array = [];
let botonCerrar = '';

document.addEventListener('DOMContentLoaded', () => {

    botones.forEach( btn => {
        btn.addEventListener('click', event => {

            //Capturar la informacion del body que se hiso click.
            // console.log(e.target.type ) //Con este puedo traer el type en este cason button.
            objetoListo = capturarDatos( event ) ;
            array.push( objetoListo)

            limpiarTabla(); 

            recorrerArray(array); //Desde aca se inyectan los objetos al html.
            btnCarrito.click();//Forzar hacer click en carrito para que existan los query con clase .btnCerrar.

        });
});
    btnCarrito.addEventListener('click', e => {

        tabla.classList.remove('d-none');//Para mostrar la table de index con class d-none.
        botonCerrar = document.querySelectorAll('.btnCerrar');

            Array.from(botonCerrar).forEach( el => {
                el.addEventListener('click', el => {
                    capturarId(el.target.id)
                    btnCarrito.click();//Tuve que forzar a hacer click ya q necesito apretar en agregar al carrito.
                                        //para que me permita primero tomar los selectores btnCerrar.
                                        //y luego poder hacer dentro de ese click otro click a los elementos.
                });
            });
    });

    cerrar.addEventListener('click', e => { //Apretar  y se cierra el carrito.
        tabla.classList.add('d-none'); //No mostrar la tabla.
    });

});

//Funcion que capturara el id de los objetos y reasignara el array principal.
export function capturarId( idObj ){
    let resultado = array.filter( obj => obj.id !=  idObj ); //obj.ide y idObjeto uno es string y el otro int x eso el comparador no estricto
    array = resultado;
    limpiarTabla();
    recorrerArray(array);
  };