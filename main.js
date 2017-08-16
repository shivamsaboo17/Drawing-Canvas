var canvas = document.getElementById('drawingCanvas');
var canvasContext = canvas.getContext('2d');
var clear = document.getElementById('clear');
var colorbrush;
var defaultcolor = 'black';
colorbrush = defaultcolor;
var dragging = false;
canvas.width = 1000;
canvas.height = 600;
var radius = 10;
canvasContext.lineWidth = radius * 2;
var putPoint = function (e) {
    if(dragging == true){
    canvasContext.lineTo(e.offsetX, e.offsetY);
    canvasContext.stroke();
    canvasContext.beginPath();
    canvasContext.fillStyle = colorbrush;
    canvasContext.arc(e.offsetX, e.offsetY, radius, 0, 2*Math.PI);
    canvasContext.fill();
    canvasContext.beginPath();
    canvasContext.moveTo(e.offsetX, e.offsetY);
    }
}
var engage = function(e) {
    dragging = true;
    putPoint(e);
}
var disengage = function(){
    dragging = false;
    canvasContext.beginPath();
}

function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
    print_voucher();
}

clear.addEventListener('click',function(){
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.beginPath();
});

function print_voucher(){
    var win=window.open();
    win.document.write("<br><img src='"+canvas.toDataURL()+"'/>");
    win.print();
    win.location.reload();
}

function squareup(){
    document.getElementById('red1').style.borderRadius = "10px";
    document.getElementById('green1').style.borderRadius = "10px";
    document.getElementById('orange1').style.borderRadius = "10px";
    document.getElementById('blue1').style.borderRadius = "10px";
    document.getElementById('black1').style.borderRadius = "10px";
    document.getElementById('yellow1').style.borderRadius = "10px";
}
/** 
 * The event handler for the link's onclick event. We give THIS as a
 * parameter (=the link element), ID of the canvas and a filename.
*/
document.getElementById('download').addEventListener('click', function() {
    downloadCanvas(this, 'drawingCanvas', 'My_Drawing.png');
}, false);

document.getElementById('blue1').addEventListener('click', function(){
   colorbrush = 'dodgerblue';
    canvasContext.strokeStyle = 'dodgerblue';
    squareup();
    document.getElementById('blue1').style.borderRadius = "20px";

});

document.getElementById('red1').addEventListener('click', function(){
   colorbrush = 'red';
    canvasContext.strokeStyle = 'red';
    squareup();
    document.getElementById('red1').style.borderRadius = "20px";

});

document.getElementById('orange1').addEventListener('click', function(){
   colorbrush = 'orange';
    canvasContext.strokeStyle = 'orange';
    squareup();
    document.getElementById('orange1').style.borderRadius = "20px";

});

document.getElementById('black1').addEventListener('click', function(){
   colorbrush = 'black';
    canvasContext.strokeStyle = 'black';
    squareup();
    document.getElementById('black1').style.borderRadius = "20px";

});

document.getElementById('yellow1').addEventListener('click', function(){
   colorbrush = 'yellow';
    canvasContext.strokeStyle = 'yellow';
    squareup();
    document.getElementById('yellow1').style.borderRadius = "20px";

});

document.getElementById('green1').addEventListener('click', function(){
   colorbrush = 'green';
    canvasContext.strokeStyle = 'green';
    squareup();
    document.getElementById('green1').style.borderRadius = "20px";

});
canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mouseup', disengage);
canvas.addEventListener('mousemove', putPoint);