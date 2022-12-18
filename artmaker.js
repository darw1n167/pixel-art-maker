



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

























//GARRETS SHORT EXAMPLE
// const body = document.querySelector('body')
// createSquare();
// const colors = []
// // flexbox and grid research
// function createColor () {
//     const colorPal = document.createElement('div')
//     body.appendChild(colorPal)
//     for (let i =0 ; i < colors.length; i++) {
//         let current = colors[i];
//         const div = document.createElement('div');
//         div.style.height 
//         div.style.width
//         div.style.background = current
//         colorPal.appendChild(div)
//     }
// }
// function createSquare()  {
//     const div = document.createElement('div');
//     div.style.height = "50px";
//     div.style.width = "50px";
//     div.style.border = "1px solid black"
//     const body = document.querySelector('body')
//     body.appendChild(div);
// }







// // function createHTML (obj) {
// //     let createDiv = document.createElement('div');
// //     createDiv.className = 'campus-lead';
// //     let h1 = document.createElement('h1');
// //     h1.textContent = obj.name;
// //     createDiv.appendChild(h1);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
// //     let ul = document.createElement('ul');
// //     let h3 = document.createElement('h3');
// //     let newh3 = document.createElement('h3');
// //     createDiv.className = 'campus-lead';
// //     document.body.appendChild(createDiv);
// //     h1.textContent = obj.name;
// //     h3.textContent = `Total students are: ${obj.instructors[0].students + obj.instructors[1].students}`;
// //     document.body.createDiv.appendChild(h3);
// //     newh3.textContent = `${obj.campus.location} Campus`;
// //     document.body.createDiv.appendChild(newh3);
// //     document.body.appendChild(ul);
// //     for (let i = 0; i <= 1; i++) {
// //         let li = document.createElement('li');
// //         li.className = 'instructor';
// //         li.textContent = `${obj.instructors[i].name} `;
// //         document.body.append(li)
// //     }
// // }



// /* <div class='campus-lead'>
//         <h1>Garrett Ross</h1>
//         <h3>Total students are: 45</h3>
//         <h3>Austin Campus</h3>
//         <ul>
//             <li class="instructor">Danny Andrews</li>
//             <li class="instructor">David Hooper</li>
//         </ul>
//    </div> */


// // function createHTMl (obj)  {
    
// //     var div = document.createElement('div');
// //     var h1 = document.createElement('h1');
// //     h1.className = obj.name;
// //     div.appendChild(h1);
    
// //     var h3students = document.createElement('h3');
// //     h3students.textContent = `Total students are: ${obj.instructors[0].students + obj.instructors[1].students}`;
// //     div.appendChild(h3students);

    
// //     var h3Campus = document.createElement('h3');
// //     h3Campus.textContent = `${obj.campus.location} Campus`;
// //     div.appendChild(h3Campus);
    
    
// //     var ul = document.createElement('ul');
// //     div.appendChild(ul);
    
// //      for(let i = 0; i < obj.instructors.length; i++)  {
// //         var li = document.createElement('li');
// //          li.className = 'instructor';
// //          li.textContent = obj.instructors[i].name;
// //          ul.appendChild(li);
// //      }
// //      document.body.appendChild(div)
// // }


// // const data = {
// //     name: 'Garrett Ross',
// //     instructors: [
// //         {name: "Danny Andrews", students: 20},
// //         {name: "David Hooper", students: 25},
// //     ],
// //     campus: {
// //         location: "Austin",
// //         offices: "2nd district",
// //         remote: true
// //     }
// //   }

// //   var catsList = document.getElementById('cats-list');

//   console.log(catsList);
function htmlFromManager(obj) {
    var div = document.createElement('div');
    div.className ='district-sales';

    var h1 = document.createElement('h1');
    h1.textContent = obj.name;
    div.appendChild(h1);

    var h3quota = document.createElement('h3');
    var total = Number(obj.salesTeam[0].quota) + Number(obj.salesTeam[1].quota) + Number(obj.salesTeam[2].quota);
    h3quota.textContent = "Total quota is: " + total
    div.appendChild(h3quota);

    var h3sales = document.createElement('h3');
    h3sales.textContent = `${obj.district.name} Sales Team`;
    div.appendChild(h3sales);

    var ul = document.createElement('ul');
    div.appendChild(ul);

    for (let i = 0; i < obj.salesTeam.length; i++)  {
        var li = document.createElement('li');
        li.textContent = obj.salesTeam[i].name;
        ul.appendChild(li);
    }
}


// // let lol = {
// //     name: 'Darcy',
// //     salesTeam: [
// //         { name: 'Alice', quota: '500'},
// //         { name: 'Bob', quota: '240'},
// //         { name: 'Charlie', quota: '10'},
// //     ],
// //     district: {
// //         name: 'ATX',
// //         offices: 10,
// //         remote: true
// //     }
// // }

// htmlFromManager(lol)

// // var catsList = document.getElementById('cats-list');

// // for(var i = 0; i < catsList.children.length; i++) {
// //     var cat = catsList.children[i]
// //     if(cat.textContent === "Fifi"){
// //         catsList.removeChild(cat)
// //     }
// //     console.log(catsList.children);
// // }