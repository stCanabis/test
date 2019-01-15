



var canvas = new fabric.Canvas('sheet');
canvas.isDrawingMode = true;
canvas.freeDrawingBrush = new fabric['SprayBrush'](canvas);
canvas.freeDrawingBrush.density = 30;
canvas.freeDrawingBrush.color = '#401a13';
canvas.freeDrawingBrush.width = 30;
canvas.freeDrawingBrush.shadow = new fabric.Shadow({
    blur: 15,
    offsetX: 0,
    offsetY: 0,
    affectStroke: true,
    color: '#401a13',
});








