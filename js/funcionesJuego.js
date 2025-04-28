// Generar un número aleatorio para la posición del tesoro
let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

  // Calcular la distancia entre el tesoro y el punto clickado (pitágoras)
let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

  // Te dice cómo de cerca o lejos estás del tesoro
let getDistanceText = distance => {
    if (distance < 30) {
        return "¡Tevas a Quemar!";
    } else if (distance < 40) {
        return "Muy Caliente";
    } else if (distance < 60) {
        return "Caliente";
    } else if (distance < 100) {
        return "Templado";
    } else if (distance < 180) {
        return "Frío";
    } else if (distance < 360) {
        return "Muy Frío";
    } else {
        return "¡Helado!";
    }
}