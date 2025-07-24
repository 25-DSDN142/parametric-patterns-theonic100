//your parameter variables go here!
var hx1 = 0
var hy1 = 10
var hx2 = 20
var hy2 = 10
var vx1 = 10
var vy1 = 0
var vx2 = 10 
var vy2 = 40
var sw = 1 



// var hx = 80;
// var hy = 80;
//  var vx = 90;
//  var vy = 65;
//  var sw = 1;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
 // pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
 background(34, 12, 237, 50); //light orange background
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//centre lines
fill(247, 107, 7,55)
strokeWeight(0)
triangle(100,100,50,0,75,0)

fill(247,107,7)
strokeWeight(0)
triangle(100,100,25,0,50,0)

fill(247,107,7,55)
strokeWeight(0)
triangle(100,100,0,0,25,0)

fill(247,107,7)
strokeWeight(0)
triangle(100,100,0,25,0,0)

fill(247,107,7,55)
strokeWeight(0)
triangle(100,100,0,75,0,25)

fill(247,107,7)
strokeWeight(0)
triangle(100,100,0,100,0,75)
  //L-R Cross
stroke(11, 247, 7)
strokeWeight(sw)
line(hx1,hy1,hx2,hy2)//horz
line(vx1,vy1,vx2,vy2)//vert

strokeWeight(sw)
line(hx1+10,hy1+10,hx2+10,hy2+10)//horz
line(vx1+10,vy1+10,vx2+10,vy2+10)//vert

strokeWeight(sw)
line(hx1+20,hy1+20,hx2+20,hy2+20)//horz
line(vx1+20,vy1+20,vx2+20,vy2+20)//vert

strokeWeight(sw)
line(hx1+30,hy1+30,hx2+30,hy2+30)//horz
line(vx1+30,vy1+30,vx2+30,vy2+30)//vert

strokeWeight(sw)
line(hx1+40,hy1+40,hx2+40,hy2+40)//horz
line(vx1+40,vy1+40,vx2+40,vy2+40)//vert

strokeWeight(sw)
line(hx1+50,hy1+50,hx2+50,hy2+50)//horz
line(vx1+50,vy1+50,vx2+50,vy2+50)//vert
  
strokeWeight(sw)
line(hx1+60,hy1+60,hx2+60,hy2+60)//horz
line(vx1+60,vy1+60,vx2+60,vy2+60)//vert 

strokeWeight(sw)
line(hx1+70,hy1+70,hx2+70,hy2+70)//horz
line(vx1+70,vy1+70,vx2+70,vy2+70)//vert

strokeWeight(sw)
line(hx1+80,hy1+80,hx2+80,hy2+80)//horz
line(vx1+80,vy1+80,vx2+80,vy2+80)//vert

strokeWeight(sw)
line(hx1+90,hy1+90,hx2+90,hy2+90)//horz
line(vx1+90,vy1+90,vx2+90,vy2+90)//vert

strokeWeight(sw)
line(hx1+100,hy1+100,hx2+100,hy2+100)//horz
line(vx1+100,vy1+100,vx2+100,vy2+100)//vert

strokeWeight(sw)
line(hx1+110,hy1+110,hx2+110,hy2+110)//horz
line(vx1+110,vy1+110,vx2+110,vy2+110)//vert

strokeWeight(sw)
line(hx1+120,hy1+120,hx2+120,hy2+120)//horz
line(vx1+120,vy1+120,vx2+120,vy2+120)//vert

strokeWeight(sw)
line(hx1+130,hy1+130,hx2+130,hy2+130)//horz
line(vx1+130,vy1+130,vx2+130,vy2+130)//vert

strokeWeight(sw)
line(hx1+140,hy1+140,hx2+140,hy2+140)//horz
line(vx1+140,vy1+140,vx2+140,vy2+140)//vert

strokeWeight(sw)
line(hx1+150,hy1+150,hx2+150,hy2+150)//horz
line(vx1+150,vy1+150,vx2+150,vy2+150)//vert

strokeWeight(sw)
line(hx1+160,hy1+160,hx2+160,hy2+160)//horz
line(vx1+160,vy1+160,vx2+160,vy2+160)//vert

strokeWeight(sw)
line(hx1+170,hy1+170,hx2+170,hy2+170)//horz
line(vx1+170,vy1+170,vx2+170,vy2+170)//vert

strokeWeight(sw)
line(hx1+180,hy1+180,hx2+180,hy2+180)//horz
line(vx1+180,vy1+180,vx2+180,vy2+180)//vert

//centre cross
  fill(237, 12, 94)
strokeWeight(0)
  rect(85,25,30,150)
  rect(55,45,90,30)

  // bleft lines
  stroke(43, 7, 247)
  strokeWeight(sw+1)
  line(0,180,80,180)//horz
  line(20,130,20,200)//vert

  // tright lines
  stroke(43, 7, 247)
  strokeWeight(sw+1)
 line(120,20,200,20)//horz
line(180,0,180,80)


}




//  function fourCross (){

//  stroke(237, 12, 94);pink
//  strokeWeight(sw-1);
//  line(hx-10,hy-10,hx+10,hy-10)//horizontal
//  line(vx-10,vy-10,vx-10,vy+35)//vert

//     //stroke(237, 12, 94);
//  strokeWeight(sw);
//  line(hx,hy,hx+20,hy)//horizontal
//  line(vx,vy,vx,vy+45)//vert


// //stroke(237, 12, 94);
//  strokeWeight(sw+1);
//  line(hx+10, hy+10,hx+30, hy+10)//horizontal
//  line(vx+10,vy+10,vx+10,vy+55)//vert

// //stroke(237, 12, 94);
//  strokeWeight(sw+2);
//  line(hx+20,hy+20,hx+40,hy+20)//horizontal
//  line(vx+20,vy+20,vx+20,vy+65)//vert
 
//  //stroke(237, 12, 94);
//  strokeWeight(sw+3);
//  line(hx+30,hy+30,hx+50,hy+30)//horizontal
//  line(vx+30,vy+30,vx+30,vy+75)//vert
//  }

// crosses 
// stroke(237, 12, 94);//pink
// strokeWeight(sw);
//  line(hx-40,hy-40,hx-20,hy-40)//horizontal
//  line(vx-40,vy-40,vx-40,vy+5)//vert

//       stroke(237, 12, 94);//pink
// strokeWeight(sw);
//  line(hx-30,hy-30,hx-10,hy-30)//horizontal
//  line(vx-30,vy-30,vx-30,vy+15)//vert

//     stroke(237, 12, 94);//pink
// strokeWeight(sw);
//  line(hx-20,hy-20,hx,hy-20)//horizontal
//  line(vx-20,vy-20,vx-20,vy+25)//vert

//   stroke(237, 12, 94);//pink
// strokeWeight(sw);
//  line(hx-10,hy-10,hx+10,hy-10)//horizontal
//  line(vx-10,vy-10,vx-10,vy+35)//vert

//  stroke(237, 12, 94);
//  strokeWeight(sw);
//  line(hx,hy,hx+20,hy)//horizontal
//  line(vx,vy,vx,vy+45)//vert


// stroke(237, 12, 94);
//  strokeWeight(sw);
//  line(hx+10, hy+10,hx+30, hy+10)//horizontal
//  line(vx+10,vy+10,vx+10,vy+55)//vert

// stroke(237, 12, 94);
//  strokeWeight(sw);
//  line(hx+20,hy+20,hx+40,hy+20)//horizontal
//  line(vx+20,vy+20,vx+20,vy+65)//vert
 
//  stroke(237, 12, 94);
//  strokeWeight(sw);
//  line(hx+30,hy+30,hx+50,hy+30)//horizontal
//  line(vx+30,vy+30,vx+30,vy+75)//vert