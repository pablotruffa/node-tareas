const argv = require('yargs')
    .command('crear', 'Crea una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea a realizar.',
        }
    })
    .command('listar', 'Muestra todas las tareas', {
        lista: {
            alias: 'd',
        }
    })
    .command('borrar', 'Eliminar una tarea sin importar el estado.', {
        descripcion: {
            alias: 'd',
            demand: true
        }
    })
    .command('actualizar', 'Actualiza el estado de una tarea.', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Actualiza una tarea en proceso.',
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca la tarea como completada o pendiente.',
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}