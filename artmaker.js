
let colors = {
    colors: ['red', 'blue', 'green', 'pink', 'purple', '#FFF8DC', '#696969', '#ffff00', '#8b4513', '#00FFFF',
'orange', 'black', 'hotpink', 'lightgreen'],
    currentColor: '',
    draw: false
}
const canvasBody = document.getElementById('canvas');
const colorPallet = document.createElement('div');
document.body.style.display ='flex';
document.body.style.justifyContent = 'center'
canvasBody.style.display = 'flex';
canvasBody.style.justifyContent = 'center';
canvasBody.id = 'canvas';
colorPallet.style.display = 'flex';
colorPallet.style.flexWrap = 'wrap';
colorPallet.style.width = '1000px';
colorPallet.style.border = '1px solid black';
colorPallet.style.height = '100px'
colorPallet.style.backgroundColor = 'lightgrey'
colorPallet.style.alignItems = 'center';
colorPallet.style.justifyContent = 'space-evenly';
createSquares(2551);
canvasBody.appendChild(colorPallet);
createColors(colors);
createButton();


function createSquares(num) {
    for (let i = 0; i <= num; i++) {
        const div = document.createElement('div');
        div.style.flex = '1 1 15px'
        div.style.border = '1px solid black';
        div.style.height = '17px';
        div.style.width = '17px';
        div.style.backgroundColor = '';
        canvasBody.appendChild(div);
        div.addEventListener('mousedown', function () {
            colors.draw = true;
        });
        div.addEventListener('mouseup', function () {
            colors.draw = false;
        })
        div.addEventListener('mouseover', function(e){
            if (!colors.draw) return
            this.style.backgroundColor = colors.currentColor
        })
    }
}

function createColors(obj) {
    for (let i = 0; i < obj.colors.length; i++) {
        let colorDiv = document.createElement('div');
        colorDiv.style.cursor ='pointer';
        colorDiv.style.display = 'flex-wrap()';
        colorDiv.style.border = '1px solid black';
        colorDiv.style.width = '60px';
        colorDiv.style.height = '60px';
        colorDiv.style.borderRadius = '50%'
        colorDiv.style.backgroundColor = obj.colors[i];
        colorDiv.className = obj.colors[i]
        colorPallet.appendChild(colorDiv);
        colorDiv.addEventListener('click', function (e) {
            obj.currentColor = colorDiv.className;
            console.log(obj.currentColor)
        });
    }
}

function createButton (div) {
    const button = document.createElement('button');
    const canvas = document.getElementById('canvas')
    button.textContent = 'Clear';
    button.addEventListener('click', function() {
        for (let i = 0; i <= 2551; i++) {
            canvas.children[i].style.backgroundColor = ''
        }
    })
    colorPallet.appendChild(button);
}
