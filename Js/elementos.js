import { getElementos, postElementos, deleteElemetos } from "../Services/elemento-service.js";

document.addEventListener("DOMContentLoaded", () => {
    llenarLista();
    enviarElemento();
});

const llenarLista = () => {
    getElementos()
        .then((data) => {
            mostarLista(data);
            console.log(data);
        });

};

const mostarLista = (elementos) => {
    const lista = document.querySelector("#lista");
    const mensaje = document.querySelector("#mensaje");
    lista.removeChild(mensaje);
    elementos.forEach(elementLista => {
        let crearItem = "";
        crearItem = /* html */ `
            <li>${elementLista.item} <button class="eliminar" id="${elementLista.id}">Eliminar</button></li>
        `;
        lista.innerHTML += crearItem;
    });
    elimnarElemento();
}

const enviarElemento = () => {
    const enviar = document.querySelector("#enviar");
    const dataElemento = document.querySelector("#dataElemento");
    enviar.addEventListener('click', (e) => {
        const datos = Object.fromEntries(new FormData(dataElemento).entries());
        console.log(datos);
        postElementos(datos);

        e.preventDefault();
        e.stopImmediatePropagation();
    })
}

const elimnarElemento = () => {
    document.querySelectorAll(".eliminar").forEach(botonEliminar => {
        botonEliminar.addEventListener('click', (e) => {
            let id = e.target.id;
            deleteElemetos(id);

            e.preventDefault();
            e.stopImmediatePropagation();
        });
        
    });
}