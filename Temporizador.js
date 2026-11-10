function temporizador(callback) {
    console.log("Iniciando temporizador de 3 segundos");
    
    setTimeout(() => {
        callback();
    }, 3000);
}

temporizador(() => {
    console.log("¡Muy bien! Han pasado los 3 segundos.");
});