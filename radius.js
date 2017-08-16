var setRadius  = function(newRadius){
    if(newRadius < minrad){
        newRadius = minrad;
    }
    else if(newRadius > maxrad){
        newRadius = maxrad;
    }
    radius = newRadius;
    canvasContext.lineWidth = radius * 2;
    radSpan.innerHTML = radius;
}


var minrad = 0.5,
    maxrad = 100,
    defaultrad = 20,
    radSpan = document.getElementById('radval'),
    decRad = document.getElementById('decrad'),
    incRad = document.getElementById('incrad');

decRad.addEventListener('click', function(){
    setRadius(radius - 5);
});

incRad.addEventListener('click', function(){
    setRadius(radius + 5);
});

setRadius(defaultrad);