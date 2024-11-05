const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const button = document.getElementById("button")

onload = init(ctx);

function init(ctx) {
    var onclick = clickUpdates(ctx);
    var btn = document.getElementById("button");
    btn.addEventListener("click", onclick, false);
}


function clickUpdates(ctx) {
    var count = 0;
    var next = function() {
        switch(count) {
            case 0:
                drawHouse(ctx)
                break;
            case 1:
            // function click 2 here
                addDetails(ctx)
                break;
            case 2:
            // function click 3 here
                wipe(ctx)
                count = -1
                break;
        }
        count = count<3?count+1:0;
    }
    
    return next;
}

async function drawHouse(ctx){
    ctx.fillStyle = "red";
    ctx.fillRect(150,350,200,150)
    ctx.fillStyle = "orange"
    var path = new Path2D();
    path.moveTo(150, 350);
    path.lineTo(250, 350);
    path.lineTo(250, 275);
    path.lineTo(150, 350);
    ctx.fill(path)
    path.moveTo(350, 350);
    path.lineTo(250, 350);
    path.lineTo(250, 275);
    path.lineTo(350, 350);
    ctx.fill(path)
}

async function addDetails(ctx){
    ctx.fillStyle = "black";
    ctx.fillRect(237,450,30,50)
    ctx.fillStyle = "blue"
    ctx.fillRect(175,425,25,25)
    ctx.fillRect(300,425,25,25)
}

async function wipe(ctx){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,500,500)
}