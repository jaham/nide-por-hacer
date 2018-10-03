const fs = require(`fs`)

let listadoPorHacer = []


const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile(`./db/data.json`, data, (err) => {
        if (err) throw new Error(`no se pudo guardar `)
        console.log(`se guardo ${data}`)
    })
}


const cargarDB = () => {
    try {
        listadoPorHacer = require(`../db/data.json`)
    } catch (error) {
        listadoPorHacer = []
    }

}


const crear = (descripcion) => {

    cargarDB()

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer)
    guardarDB()
    return porHacer
}


const getListado = () => {
    cargarDB()
    return listadoPorHacer
}

const actualizar = (descripcion, estado = true) => {
    cargarDB()

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index <= 0) {
        listadoPorHacer[index].completado = estado
        guardarDB()
        return true

    } else return false
}


const borrar = descripcion => {
    cargarDB()

    let nuevaLista = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)

    if (listadoPorHacer.length > nuevaLista.length) {
        listadoPorHacer = nuevaLista
        guardarDB()
        console.log(listadoPorHacer)
        return `Borrado`
    } else return `Np se reconose inguna tarea con esta descripcion (${ descripcion })`
}



module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}