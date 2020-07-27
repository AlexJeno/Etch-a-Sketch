var body = document.getElementById("main");
var container = document.createElement("div");
var divs = [];
let size = 16;
container.style.width = '512px';
container.style.height = '512px';
container.style.border = '2px solid black';
container.style.display = 'grid';
container.style.display = 'grid';

var ResizeButton = document.createElement('button');
ResizeButton.setAttribute('id', 'ResizeButton');
ResizeButton.setAttribute('onclick', 'resize()');
ResizeButton.textContent = "New Grid Size";

var HoverButton = document.createElement('button');
HoverButton.setAttribute('id', 'HoverButton');
HoverButton.setAttribute('onclick', 'HoverEffect()');
HoverButton.textContent = "Hover black-white";

var HoverButtonRGB = document.createElement('button');
HoverButtonRGB.setAttribute('id', 'HoverButtonRGB');
HoverButtonRGB.setAttribute('onclick', 'HoverEffectRGB()');
HoverButtonRGB.textContent = "Hover RGB";

var ResetButton = document.createElement('button');
ResetButton.setAttribute('id', 'ResetButton');
ResetButton.setAttribute('onclick', 'reset()');
ResetButton.textContent = "Reset";

body.appendChild(ResizeButton);
body.appendChild(HoverButton);
body.appendChild(HoverButtonRGB);
body.appendChild(ResetButton);
body.appendChild(container);


function resize() {
    size = prompt("Enter new grid size (SxS)(max:64): ");
    if (size > 64) {
        resize();
    }
    clearGrid();
    InitGrid(size);
}

function reset() {
    clearGrid();
    InitGrid();
}

function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var joker = Math.floor(Math.random() * 100);
    if (joker <= 10) {
        var color = "rgb(0,0,0)";
    } else {
        var color = "rgb(" + x + "," + y + "," + z + ")";
    }
    return color;
}

function clearGrid() {
    container.innerHTML = "";
}

function HoverEffect() {
    clearGrid();
    InitGrid();
    for (var i = 0; i < size * size; i++) {
        const square = document.getElementById(i);
        square.addEventListener("mouseover",
            function asd() {
                square.style.backgroundColor = 'black';
            }
        );
    }
}

function HoverEffectRGB() {
    clearGrid();
    InitGrid();
    for (var i = 0; i < size * size; i++) {
        const square = document.getElementById(i);
        square.addEventListener("mouseover",
            function asd() {
                square.style.backgroundColor = randomColor()
            }
        );
    }
}

function InitGrid() {
    container.style.gridTemplateRows = `repeat(${size}, auto)`;
    container.style.gridTemplateColumns = `repeat(${size}, auto)`;
    for (var i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.style.width = 512 / size - 2 + 'px';
        square.style.height = 512 / size - 2 + 'px';
        square.style.border = '1px solid black';
        square.id = '' + i;
        container.appendChild(square);
    }
}