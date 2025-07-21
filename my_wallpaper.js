//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;
 var x = 100;
 var y = 0 
var hx = 70;
 var hy = 70;
 var vx = 80;
 var vy = 55;
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
  // background(240, 255, 240); //light honeydew green colour
 background(245, 90, 0, 50); //light orange background
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function



fourCross()
 
}



function rect (){
  let rect_width  = 20;
let rect_height = 30;
 var x = 100;
 var y = 0 
 fill(66, 135, 245)
 rect(x,y,rect_width, rect_height); 
 rect(x, y+40, rect_width, rect_height);
  rect(x, y+80, rect_width, rect_height);
  rect(x, y+120, rect_width, rect_height);
   rect(x, y+160, rect_width, rect_height);
}
 function fourCross (){
    stroke(242, 0, 226);
 strokeWeight(sw-1);
 line(hx-10,hy-10,hx+10,hy-10)//horizontal
 line(vx-10,vy-10,vx-10,vy+35)//vert

    stroke(242, 0, 226);
 strokeWeight(sw);
 line(hx,hy,hx+20,hy)//horizontal
 line(vx,vy,vx,vy+45)//vert


stroke(242, 0, 226);
 strokeWeight(sw+1);
 line(hx+10, hy+10,hx+30, hy+10)//horizontal
 line(vx+10,vy+10,vx+10,vy+55)//vert

stroke(242, 0, 226);
 strokeWeight(sw+2);
 line(hx+20,hy+20,hx+40,hy+20)//horizontal
 line(vx+20,vy+20,vx+20,vy+65)//vert
 
 stroke(242, 0, 226);
 strokeWeight(sw+3);
 line(hx+30,hy+30,hx+50,hy+30)//horizontal
 line(vx+30,vy+30,vx+30,vy+75)//vert
 }