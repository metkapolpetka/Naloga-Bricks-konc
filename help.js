function drawIt(){
		var x = 150;
		var	y = 150;
		var dx = 2;
		var	dy = 4;
		var WIDTH;
		var	HEIGHT;
		var r=5;
		var ctx,canvas;

  
  
    var paddlex, paddleh, paddlew;
    var rightDown = false, leftDown = false;
  
    var bricks;
		var NROWS, NCOLS;
		var BRICKWIDTH,BRICKHEIGHT;
    var PADDING;
  
    var canvasMinX;
    var canvasMaxX;
  
    var f=1;		
    var tocke = 0;
  
    var start=true;

    
    function onKeyDown(evt){
			if (evt.keyCode == 39){
				rightDown = true;
			}
			else if (evt.keyCode == 37){
				leftDown = true;
			}
		}

		function onKeyUp(evt){
			if (evt.keyCode == 39){
				rightDown = false;
			}
			else if (evt.keyCode == 37){
				leftDown = false;
			}
    }

    function init_mouse() {
      canvasMinX = $("canvas").offset().left;
      canvasMaxX = canvasMinX + WIDTH;
  }
    
  function onMouseMove(evt) {
      if (evt.pageX > canvasMinX && evt.pageX < canvasMaxX) {
        paddlex = evt.pageX - canvasMinX;
      }
  }
  $(document).keydown(onKeyDown);
  $(document).keyup(onKeyUp); 
  $(document).mousemove(onMouseMove);



    function initbricks() { 
 
			NROWS = 6,NCOLS = 5;
			BRICKWIDTH = (WIDTH/NCOLS) - 1;
			BRICKHEIGHT = 15;
			PADDING = 1;
      bricks = new Array(NROWS);
    
			for (i=0; i < NROWS; i++) {
				bricks[i] = new Array(NCOLS);
				for (j=0; j < NCOLS; j++) {
					bricks[i][j]=1;
				}				
			}
    }	


    function init() {
			canvas=document.getElementById('canvas');
			ctx = $('#canvas')[0].getContext("2d");
			WIDTH = $("#canvas").width();
      HEIGHT = $("#canvas").height();

      
      sekunde = 0;
      izpisTimer = "00:00";
      intTimer = setInterval(timer, 1000);
      
      
			return setInterval(draw, 10);
    }

    function timer(){
      if(start==true){
        sekunde++;
        
        sekundeI = ((sekundeI = (sekunde % 60)) > 9) ? sekundeI : "0"+sekundeI;
        minuteI = ((minuteI = Math.floor(sekunde / 60)) > 9) ? minuteI : "0"+minuteI;
        izpisTimer = minuteI + ":" + sekundeI;
        
        $("#cas").html(izpisTimer);
      }
      else{
        sekunde=0;
        $("#cas").html(izpisTimer);
      }
    }

    
    function draw() {
      
			ctx.clearRect(0,0,500,500);
			ctx.beginPath();
			ctx.arc(x, y, 10, 0, Math.PI*2, true);
			ctx.closePath();
			ctx.fill();
      ctx.fillStyle="#0000cc";
			rect(paddlex, 500-paddleh, paddlew, paddleh);
			
      for (i=0; i < NROWS; i++){
				for (j=0; j < NCOLS; j++){
					if (bricks[i][j] == 1) {
						ctx.fillStyle="#00cc00";
						rect((j * (BRICKWIDTH + PADDING)) + PADDING,
						(i * (BRICKHEIGHT + PADDING)) + PADDING,
						BRICKWIDTH, BRICKHEIGHT);
					}
				}
			}

      if(rightDown){
				if((paddlex+paddlew) < WIDTH){
				  paddlex += 5;
				}
				else{
				  paddlex = WIDTH-paddlew;
				}
			}
			else if(leftDown){
				if(paddlex>0){
				  paddlex -=5;
        }
				else {
				}
			}
			

if(document.getElementById("demo").innerHTML=="Zacetek")
    if (x + dx > 500-r || x + dx < 0+r)
      dx = -dx;
    if (y + dy < 0+r)
      dy = -dy;
    else if (y + dy > HEIGHT -(r+f)) { 
        if (x > paddlex && x < paddlex + paddlew) {
          dx = 8 * ((x-(paddlex+paddlew/2))/paddlew);
          dy = -dy;
          start = true; 
        }
    else if (x > paddlex && x < paddlex + paddlew)
      dy = -dy;
    else{
      
        clearInterval(IntervalID);
      }
}

      if (x + dx > 500 -r|| x + dx < 0 +r){
        dx = -dx;
      }
      if (y + dy > 500 -r|| y + dy < 0 +r){
      dy = -dy;
      }

     
    rowheight = BRICKHEIGHT + PADDING + f/2;
		colwidth = BRICKWIDTH + PADDING + f/2;
		row = Math.floor(y/rowheight);
    col = Math.floor(x/colwidth);
    
    if (y < NROWS * rowheight && row >= 0 && col >= 0 && bricks[row][col] > 0)  {
      dy = -dy; bricks[row][col] = bricks[row][col]-1;
      
      if(bricks[row][col]==0){
        tocke += 1;
        $("#tocke").html(tocke);
      }
    }
      

		if(tocke==30){
      
      start = false;
      
      swal({title: "Cestitke!", text: "Zmagal si", type: 
      "Zmaga"}).then(function(){
        location.reload();
      });
        clearInterval(draw);
        tocke = 0;
			}
      x += dx;
      y += dy;
      
  }
  function init_paddle(){
      paddlex = 500 / 2;
      paddleh = 10;
      paddlew = 100;
  }
    

  function rect(x,y,w,h){
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();
  }
    init();
    timer();
    init_paddle();
    init_mouse();
		initbricks();
}