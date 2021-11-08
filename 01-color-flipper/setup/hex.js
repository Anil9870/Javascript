const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.getElementById('color');
const btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
    var colorCode = '#';
    for (let i = 0; i < 6; i++) {
        colorCode += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = colorCode;
    color.textContent = colorCode;
});

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}
