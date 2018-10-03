const colors = require(`colors`)
const argv = require(`./config/yargs`).argv
const porHacer = require(`./por-hacer/por-hacer`)


let comando = argv._[0]

switch (comando) {
    case `listar`:
        let lista = porHacer.getListado()

        for (let tarea of lista) {
            console.log(`===== - Por Hacer - =====`.green)
            console.log(tarea.descripcion)
            console.log(`Estado: `, tarea.completado)
            console.log(`=========================`.green)
        }
        break;
    case `crear`:
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea)
        break;
    case `actualizar`:
        console.log(porHacer.actualizar(argv.descripcion, argv.completado))
        break;
    case `borrar`:
        console.log(porHacer.borrar(argv.descripcion))
        break;

    default:
        console.log('comando no reconocido')
        break;
}