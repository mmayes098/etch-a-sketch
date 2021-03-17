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

//set up a hover effect so the grid divs change color when your mouse passes over them
    //set up event listeners for when mouse enters a div and when mouse leaves a div
    //ways to change color of divs: add new class to div, change div's background color using JS (most likely)

//add a button to the top of the screen which will clear current grid and send user a popup asking for how many squares per side to make a new grid (no more than 100 (or 64))
//new grid gets generated in the same total space as the old grid
    //Hints from Odin:
        //research button tags in HTML and how you can make a JS function run when one is clicked
            //write JS function to change grid size
        //Also check out prompt (JS)
        //Should be able to type 64 into the prompt and it will create a brand new 64x64 grid without changing the total amount of pixels used

//Optional (but I want to do it): Instead of just changing the color from white to black, have each pass through with the mouse change to a completely random RGB value. Or have it add 10% of black on each pass.

//Push to GitHub!

var cell = document.querySelector("div.cell");

cell.addEventListener("mouseover", function() {
    cell.style.backgroundColor = randomHsl();
});

// cell.addEventListener("mouseout", function() {
//     cell.style.backgroundColor = "white";
// });

function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}