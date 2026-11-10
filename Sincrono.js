function consultarPublicaciones(callback) {
    fetch('https://jsonplaceholder.typicode.com/posts').then((r)=>{
        console.log("Termine de obtener las publicaciones")
        callback(r)
    })
}

function terminarPrograma(pubs) {
    console.log(pubs);
    console.log("finaliza la ejecucion")
}

console.log("inicio de la ejecucion")
consultarPublicaciones((pubs) => {console.log(pubs)})

