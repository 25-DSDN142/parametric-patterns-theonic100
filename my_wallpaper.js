//your parameter variables go here!

var hx = 80;
var hy = 80;
 var vx = 90;
 var vy = 65;
 var sw = 1;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
 // pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
 background(34, 12, 237, 50); //light orange background
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
       stroke(237, 12, 94);//pink
strokeWeight(sw);
 line(hx-40,hy-40,hx-10,hy-50)//horizontal
 line(vx-50,vy-50,vx-50,vy-10)//vert   
  
  stroke(237, 12, 94);//pink
strokeWeight(sw);
 line(hx-40,hy-40,hx-20,hy-40)//horizontal
 line(vx-40,vy-40,vx-40,vy+5)//vert

      stroke(237, 12, 94);//pink
strokeWeight(sw);
 line(hx-30,hy-30,hx-10,hy-30)//horizontal
 line(vx-30,vy-30,vx-30,vy+15)//vert

    stroke(237, 12, 94);//pink
strokeWeight(sw);
 line(hx-20,hy-20,hx,hy-20)//horizontal
 line(vx-20,vy-20,vx-20,vy+25)//vert

  stroke(237, 12, 94);//pink
strokeWeight(sw);
 line(hx-10,hy-10,hx+10,hy-10)//horizontal
 line(vx-10,vy-10,vx-10,vy+35)//vert

 stroke(237, 12, 94);
 strokeWeight(sw);
 line(hx,hy,hx+20,hy)//horizontal
 line(vx,vy,vx,vy+45)//vert


stroke(237, 12, 94);
 strokeWeight(sw);
 line(hx+10, hy+10,hx+30, hy+10)//horizontal
 line(vx+10,vy+10,vx+10,vy+55)//vert

stroke(237, 12, 94);
 strokeWeight(sw);
 line(hx+20,hy+20,hx+40,hy+20)//horizontal
 line(vx+20,vy+20,vx+20,vy+65)//vert
 
 stroke(237, 12, 94);
 strokeWeight(sw);
 line(hx+30,hy+30,hx+50,hy+30)//horizontal
 line(vx+30,vy+30,vx+30,vy+75)//vert
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
