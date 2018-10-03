const descripcion = {
    alias: `d`,
    demand: true,
    desc: `Descripcion de la tarea por hacer`
}

const completado = {
    alias: 'c',
    default: true,
    desc: `marca como completada la tarea`
}


const argv = require(`yargs`)
    .command(`crear`, `crea una nueva tarea por hacer`, { descripcion })
    .command(`actualizar`, `actualiza el estado completo de una tarea`, { descripcion, completado })
    .command(`borrar`, `Borra una tarea`, { descripcion })
    .help()
    .argv


module.exports = {
    argv
}