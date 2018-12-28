



$( function() {


    // let num = 00;



    function test (num) {
        $('#test').removeClass().addClass('bg-Scene_1_000' + num + '_min');
        console.log(num);
    }


    // $('#test').on('click', function () {
    //     setInterval(function () {
    //         $('#test').removeClass().addClass('bg-Scene_1_000' + num + '_min');
    //         console.log(num);
    //         num++
    //     },40)
    // });







    var handle = $( "#custom-handle" );
    $( "#slider" ).slider({
        create: function() {
            handle.text( $( this ).slider( "value" ) );
        },
        slide: function( event, ui ) {
            handle.text( ui.value );
            test(ui.value);
        }
    });
} );