
let num = 64;

$('#test').on('click', function () {
    setInterval(function () {
        $('#test').removeClass().addClass('bg-Scene_1_000' + num + '_min');
        console.log(num);
        num++
    },3000)
});