

$( function() {
    var imgNumber = 10;
    var lastImgNumber = 79;
    var canvas = document.getElementById('test');

    var ctx = canvas.getContext('2d');
    var img = new Image;
    var imgArr = [];
    var testArr = [];




    //
    // jQuery.preloadImages = function()
    // {
    //     for(var i = 0; i < arguments.length; i++)
    //     {
    //         jQuery("<img>").attr("src", arguments[ i ]);
    //     }
    // };
    //
    //
    // $.preloadImages('img/Scene_1_00010-min.png', 'img/Scene_1_00011-min.png',
    //     'img/Scene_1_00012-min.png', 'img/Scene_1_00013-min.png', 'img/Scene_1_00014-min.png',
    //     'img/Scene_1_00015-min.png', 'img/Scene_1_00016-min.png', 'img/Scene_1_00017-min.png',
    //     'img/Scene_1_00018-min.png', 'img/Scene_1_00019-min.png', 'img/Scene_1_00020-min.png',
    //     'img/Scene_1_00021-min.png', 'img/Scene_1_00022-min.png', 'img/Scene_1_00023-min.png',
    //     'img/Scene_1_00024-min.png', 'img/Scene_1_00025-min.png', 'img/Scene_1_00026-min.png',
    //     'img/Scene_1_00027-min.png', 'img/Scene_1_00028-min.png', 'img/Scene_1_00029-min.png');




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

            jQuery(new Image()).attr('src', images[i]).load(function() {
                console.log('this - ' + this.src);
                testArr.push(this);


                if (--not_loaded < 1 && typeof callback == 'function') {
                    callback();
                }
            });
        }
    };

    for (i=imgNumber; i<lastImgNumber; i++){
        imgArr.push('img/Scene_1_000' + i + '-min.png')
    }

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



        function test(imgNumber) {
            console.log(testArr[imgNumber]);
            img = testArr[imgNumber];
            ctx.canvas.width = 1600;
            ctx.canvas.height = 900;
            ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height );
            ctx.drawImage( img, 0, 0, ctx.canvas.width, ctx.canvas.height );
        }


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








