

$( function() {
    // минимальный номер рисунка
    var imgNumber = 100;
    // максимальный номер рисунка
    var lastImgNumber = 129;
    // элемент canvas
    var canvas = document.getElementById('test');
    //
    var ctx = canvas.getContext('2d');
    // объект в канвасе
    var img = new Image;
    // массив с путями к файлам
    var imgArr = [];
    // массив с предзагруженными объектами
    var testArr = [];

    /**
     * предзагрузка изображений
     */
    $.preloadImages = function () {
        if (typeof arguments[arguments.length - 1] == 'function') {
            var callback = arguments[arguments.length - 1];
        } else {
            var callback = false;
        }
        if (typeof arguments[0] == 'object') {
            var images = arguments[0];
            var n = images.length;
        } else {
            var images = arguments;
            var n = images.length - 1;
        }
        var not_loaded = n;
        for (var i = 0; i < n; i++) {

            /**
             * после загрузки каждого изображения пушим в массив
             */
            jQuery(new Image()).attr('src', images[i]).load(function() {
                testArr.push(this);
                if (--not_loaded < 1 && typeof callback == 'function') {
                    callback();
                }
            });
        }
    };

    // создаем массив с путями к файлам
    for (i=imgNumber; i<lastImgNumber; i++){
        // imgArr.push('img/tinified/Clip4_with_Alpha_' + i + '.png')
        imgArr.push('img/1366/Clip4_with_Alpha_' + i + '.png')
    }

    /**
     * вызываем функцию предзагрузки, после загрузки сортируем массмв
     */
    $.preloadImages(imgArr, function () {
        console.log('!!! all img load!!!');

        testArr.sort(function (a, b) {
            if (a.src > b.src) {
                return 1;
            }
            if (a.src < b.src) {
                return -1;
            }
            return 0;
        });

        for (j=0;j<3;j++){
            for (i=0; i<lastImgNumber - imgNumber; i++){
                testArr.push(testArr[i]);
            }
        }

        console.log(testArr);


        /**
         * рисуем на канвасе
         * @param imgNumber
         */
        function test(imgNumber) {

            img = testArr[imgNumber];
            // ctx.canvas.width = $(window).width()-50;
            // ctx.canvas.height = ($(window).width()-50)/16*9;
            ctx.canvas.width = ($(window).height()-100)/9*16;
            ctx.canvas.height = $(window).height()-100;
            ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height );
            ctx.drawImage( img, 0, 0, ctx.canvas.width, ctx.canvas.height );

            $('canvas#test').css('position','absolute').css('left',-(ctx.canvas.width - $(window).width())/2 );
            // if ($(window).width() < ctx.canvas.width ) {
            //     $('canvas#test').css('position','absolute').css('left',-(ctx.canvas.width - $(window).width())/2 );
            // } else if ($(window).width() > ctx.canvas.width ) {
            //     $('canvas#test').css('position','absolute').css('left',-(ctx.canvas.width - $(window).width())/2 );
            // }



        }

        // инициализация ползунка jqueryUI
        var handle = $( "#custom-handle" );
        $( "#slider" ).slider({
            max:testArr.length - 1,
            create: function() {
                handle.text( $( this ).slider( "value" ) );
            },
            slide: function( event, ui ) {
                handle.text( ui.value );
                // по сдвигу вызываем рисование
                test(ui.value);
            }
        });



    });











} );




// var timer = setInterval( function(){
//     if (imgNumber>lastImgNumber){
//         clearInterval( timer );
//     }else{
//         img.src = "img/Scene_1_000"+( imgNumber++ )+"-min.png";
//     }
// }, 45000/15 ); //Draw at 15 frames per second
//
//








