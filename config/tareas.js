const fs = require('fs');
const colors = require('colors');

const cargarListado = () => {
    let listado;
    try {
        listado = require('../lista-tareas/lista.json');

    } catch (error) {
        listado = [];
    }

    return listado;

}

const crear = (descripcion) => {

    let tareas = cargarListado();

    let porHacer = {
        descripcion,
        completado: false,
        registro: new Date(),
    }

    tareas.push(porHacer);
    guardar(tareas)
        .then(mensage => console.log(mensage))
        .catch(err => console.log(err));

    return tareas;
}

const guardar = (porHacer) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./lista-tareas/lista.json', JSON.stringify(porHacer), (err) => {
            if (err) reject(err)
            else resolve('tarea-grabada'.green)
        })
    });
}

const listar = () => {
    return cargarListado();
}

const actualizar = (descripcion, completado) => {
    let tareas = cargarListado();
    let index = tareas.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        tareas[index].completado = completado;
        guardar(tareas);
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    let tareas = cargarListado();
    let nuevoListado = tareas.filter(tarea => tarea.descripcion !== descripcion);
    if (nuevoListado.lenght !== tareas.length) {
        guardar(nuevoListado);
        return true;
    }

    return false;

    /* let index = tareas.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        tareas.splice(index, 1);
        guardar(tareas);
        return true;
    } else {
        return false;
    } */
}




module.exports = {
    crear,
    listar,
    actualizar,
    borrar,
}