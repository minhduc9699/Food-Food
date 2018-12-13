var mouseOver_outs = document.getElementsByClassName("mouseOver_out");
var mouseOver_outIndex
function mouseOver_out(){
    var mouseOver_out = mouseOver_outs[mouseOver_outIndex];
    mouseOver_out.addEventListener('mouseover', function(e){
        mouseOver_out.style.fontSize = '23px';
    });
    mouseOver_out.addEventListener('mouseout', function(e){
        mouseOver_out.style.fontSize = '20px';
    });
}
for(j = 0; j < mouseOver_outs.length; j++){
    mouseOver_out(mouseOver_outIndex = j);
}