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
            box.id = "box" + i + '-' + r;
            box.style.height = ((800-(num*2))/num) + 'px';
            box.style.width = ((800-(num*2))/num) + 'px';
            currentRow.appendChild(box);
        }
    }

    container.addEventListener('mouseover', function(e) {
        let element = document.elementFromPoint(e.clientX, e.clientY)
        element.style.backgroundColor = randomHsl();
    });
}

window.onload = grid(16);

function resetGrid() {
    var container = document.getElementById('main')
    container.remove();
    grid(16);
}

function newGrid() {
    var container = document.getElementById('main');
    var num = prompt("Please enter a number between 1 and 40 for the length of the grid:", "16");
    if (num != null) {
        container.remove();
        grid(num);
    };
}

function changeBackground(box) {
    box.style.backgroundColor = randomHsl();
    console.log('background changed');
};

function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
};