var draggedElement,
   // onDrag,
    onDragEnd;
var grabPointX,
    grabPointY;




function onDragStart(event) {
    if (event.target.classList.contains('bar') === false) return;
   
    
    var bounding = document.querySelector('.sticker').getBoundingClientRect();

    
    grabPointX = bounding.left - event.clientX;
    grabPointY = bounding.top - event.clientY;
    
    
    
//    alert(grabPointX + " " + grabPointY + " " + bounding.left);
    
    
    
 //   alert(posX + " " + posY);
}

function onDrag() {
    if (grabPointX === null && grabPointY === null) return;
    //napisać if, że jak nie ma okienka to return

    var posX = event.clientX + grabPointX - 5,
        posY = event.clientY + grabPointY - 20;

    if (posX < 0) posX = 0;
    if (posY < 0) posY = 0;

    document.querySelector('.coords').innerHTML = `${posX}  ${posY} ${event.clientX}`;
    document.querySelector('.sticker').style.transform = `translateX(${posX}px) translateY(${posY}px)`;
}





function onDragEnd() {
    grabPointX = null;
    grabPointY = null;
}

function createNote() {
    var stickerElement = document.createElement('div'),
        barElement = document.createElement('div'),
        textareaElement = document.createElement('textarea');
    
    stickerElement.classList.add('sticker');
    barElement.classList.add('bar');
//    
    stickerElement.appendChild(barElement);
    stickerElement.appendChild(textareaElement);
//    
    document.body.appendChild(stickerElement);
    
    alert(this);
}

setTimeout(createNote, 1000);





document.querySelector('.sticker').addEventListener('mousedown', function() {
    onDragStart(event);
});

document.addEventListener('mousemove', onDrag)

document.addEventListener('mouseup', function() {
    onDragEnd();
});