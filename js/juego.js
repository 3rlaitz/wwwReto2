const WIDTH = 400;
const HEIGH = 400;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
};

// click handler
let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
let intentos = 0;

$map.addEventListener('click', function (e) {
    console.log('click');
    intentos++;
    let distance = getDistance(e, target);
    let distanceText = getDistanceText(distance);
    $distance.innerHTML = `<h1>${distanceText}</h1>`;

    if (distance < 20 ) {
        alert(`¡Has encontrado el tesoto en  ${intentos} intentos!`);
        location.reload();
    }
});