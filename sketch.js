// div class container is the outside of the grid, establishes the black border background
// div class grid establishes the grid using grid-template-columns and grid-template-rows and shows borders with grid-gap
// div class cell is each individual cell, numbered (for now) with text in the middle of each cell

//default upon opening is to create a grid with a 16x16 grid of square divs
    //need to establish outer grid size and make cells fit inside that
    //individual rows instead of whole grid?
    //Hints from Odin:
        //use JS to create grid
        //ways to make divs appear as grid: float/clear, inline-block, flexbox, CSS Grid
        //be careful with borders/margins, can adjust size of squares unintentionally

function grid(num) {
    var container = document.createElement("div");
    container.id = "main";
    container.className = "container";
    document.body.appendChild(container);
    for (var i=1; i<=num; i++) {
        var row = document.createElement('div');
        row.className = "row";
        row.id = "row" + i;
        container.appendChild(row);
        var currentRow = document.getElementById('row' + i);
        for (var r=1; r<=num; r++) {
            var box = document.createElement('div');
            box.className = 'box';
            box.style.height = ((800-(num*2))/num) + 'px';
            box.style.width = ((800-(num*2))/num) + 'px';
            currentRow.appendChild(box);
        }
    }
}

window.onload = grid(16);

//set up a hover effect so the grid divs change color when your mouse passes over them
    //set up event listeners for when mouse enters a div and when mouse leaves a div
    //ways to change color of divs: add new class to div, change div's background color using JS (most likely)

// var box = document.getElementsByClassName('box');
// for (var i = 0, len = box.length; i < len; i++) {
//     // box[i].addEventListener("mouseover", changeBackground(box[i]));
// };

// console.log(box);

// box.addEventListener("mouseover", function() {
//     box.style.backgroundColor = randomHsl();
// });

const $boxes = document.querySelectorAll('.box');
$boxes.forEach($box => $box.onmouseover = changeBackground($box));

//add a button to the top of the screen which will clear current grid and send user a popup asking for how many squares per side to make a new grid (no more than 100 (or 64))
//new grid gets generated in the same total space as the old grid
    //Hints from Odin:
        //research button tags in HTML and how you can make a JS function run when one is clicked
            //write JS function to change grid size
        //Also check out prompt (JS)
        //Should be able to type 64 into the prompt and it will create a brand new 64x64 grid without changing the total amount of pixels used

//Optional (but I want to do it): Instead of just changing the color from white to black, have each pass through with the mouse change to a completely random RGB value. Or have it add 10% of black on each pass.

//Push to GitHub!



// cell.addEventListener("mouseout", function() {
//     cell.style.backgroundColor = "white";
// });

function changeBackground(box) {
    box.style.backgroundColor = randomHsl();
};

function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
};