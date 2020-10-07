const { argv } = require('./config/yargs');
const tareas = require('./config/tareas');
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = tareas.crear(argv.descripcion);
        break;
    case 'listar':
        //console.log(tareas.listar());
        console.log('========= TAREAS ========= '.green);
        tareas.listar().forEach(tarea => {
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado + '\n');
        });
        console.log('================== '.green);
        break;
    case 'actualizar':
        tareas.actualizar(argv.descripcion, argv.completado);
        break;
    case 'borrar':
        tareas.borrar(argv.descripcion);
        break;
    default:
        console.log('Comando no reconocido');
}