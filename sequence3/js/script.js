        var vid = document.getElementById("backvideo");    
        var i=0;
        var j=0;
        var play=document.getElementById("play");
        var mute=document.getElementById("mute");
        var imgs=new Array('img/pause.png','img/play.png');
        var imgs1=new Array('img/mute.svg','img/unmute.svg');
        function imgsrc() {
          i++;i%=imgs.length;
            play.src = imgs[i];
           
        }

        function pausevid(){
           if(vid.paused){
           vid.play();
           }else{
            vid.pause();   
           }
        }
        
          function imgsrc1() {
            j++;j%=imgs.length;
            mute.src = imgs1[j];
        
        }

        function mutevid(){
            if(vid.muted){
                vid.muted=false;
            }else{
                vid.muted=true;
            }
        }

  

