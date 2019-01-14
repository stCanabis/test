



var canvas = new fabric.Canvas('sheet');
canvas.isDrawingMode = true;


canvas.freeDrawingBrush = new fabric['SprayBrush'](canvas);

canvas.freeDrawingBrush.color = '#4a1b14';
canvas.freeDrawingBrush.width = 45;
canvas.freeDrawingBrush.shadow = new fabric.Shadow({
    blur: parseInt(drawingShadowWidth.value, 10) || 0,
    offsetX: 0,
    offsetY: 0,
    affectStroke: true,
    color: drawingShadowColorEl.value,
});





canvas.freeDrawingBrush.width = 10;

console.log(canvas);







