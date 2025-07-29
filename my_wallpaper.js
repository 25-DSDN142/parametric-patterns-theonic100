//your parameter variables go here!

//opacity 
var opa = 55
var otri = 100

// centre lines
var alllines = 0


//triangles small pink
var trianglex = 75
var triangley = 50

//triangle big pink
var tpinkx = 20
var tpinky = 20

//circles 
var circlex = 50
var circley = 50
var circlesize = 50
// triangles green
 




function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
//pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
 //background(34, 12, 237, 50); //light orange background
 background(0,0,0,55)
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


//centre lines
//RH side

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,alllines+200,alllines,alllines+200,alllines+25);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,alllines+200,alllines+25,alllines+200,alllines+50);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,alllines+200,alllines+50,alllines+200,alllines+75);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,alllines+200,alllines+75,alllines+200,alllines+100);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,alllines+200,alllines+ 200,alllines+200,alllines+175);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,alllines+200,alllines+175,alllines+200,alllines+150);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,alllines+200,alllines+150,alllines+200,alllines+125);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,alllines+200,alllines+125,alllines+200,alllines+100);

//top 
fill(247,107,7);
strokeWeight(0);
triangle(100,100,alllines+175,alllines,alllines+200,alllines);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,alllines+150,alllines,alllines+175,alllines);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,alllines+150,alllines,alllines+125,alllines);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,alllines+100,alllines,alllines+125,alllines);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,alllines+100,alllines,alllines+75,alllines);

fill(247, 107, 7,opa);
strokeWeight(0);
triangle(100,100,alllines+50,alllines,alllines+75,alllines);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,alllines+25,alllines,alllines+50,alllines);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,alllines,alllines,alllines+25,alllines);

// LH side
fill(247,107,7);
strokeWeight(0);
triangle(100,100,alllines,alllines+25,alllines,alllines);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,alllines,alllines+50,alllines,alllines+25);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,alllines,alllines+75,alllines,alllines+50);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,alllines,alllines+100,alllines,alllines+75);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,alllines,alllines+100,alllines,alllines+125);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,alllines,alllines+125,alllines,alllines+150);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,alllines,alllines+150,alllines,alllines+175);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,alllines,alllines+175,alllines,alllines+200);

//bottom
fill(247,107,7);
strokeWeight(0);
triangle(alllines+100,alllines+100,alllines,alllines+200,alllines+25,alllines+200);

fill(247,107,7,opa);
strokeWeight(0);
triangle(alllines+100,alllines+100,alllines+25,alllines+200,alllines+50,alllines+200);

fill(247,107,7);
strokeWeight(0);
triangle(alllines+100,alllines+100,alllines+50,alllines+200,alllines+75,alllines+200);

fill(247,107,7,opa);
strokeWeight(0);
triangle(alllines+100,alllines+100,alllines+75,alllines+200,alllines+100,alllines+200);

fill(247,107,7);
strokeWeight(0);
triangle(alllines+100,alllines+100,alllines+100,alllines+200,alllines+125,alllines+200);

fill(247,107,7,opa);
strokeWeight(0);
triangle(alllines+100,alllines+100,alllines+125,alllines+200,alllines+150,alllines+200);

fill(247,107,7);
strokeWeight(0);
triangle(alllines+100,alllines+100,alllines+150,alllines+200,alllines+175,alllines+200);

fill(247,107,7,opa);
strokeWeight(0);
triangle(alllines+100,alllines+100,alllines+175,alllines+200,alllines+200,alllines+200);

fill(239, 245, 66,opa);
if (circlesize > 50){ 
  fill(29, 7, 227)}

//circle
strokeWeight(0); 
//fill(239, 245, 66, otri+5);
circle(circlex,circley,circlesize);
circle(circlex+50,circley+50,circlesize);
circle(circlex+100,circley+100,circlesize);

// triangle small pink
fill(247, 5, 183, otri);
strokeWeight(0);
triangle(trianglex+25,triangley+25,trianglex,triangley,trianglex+50,triangley);//
triangle(trianglex,triangley+50,trianglex-25,triangley+25,trianglex-25,triangley+75);//
triangle(trianglex+50,triangley+50,trianglex+75,triangley+25,trianglex+75,triangley+75);//
triangle(trianglex+25,triangley+75,trianglex,triangley+100,trianglex+50,triangley+100);//

// triangle big pink
fill(247, 5, 183, otri);
strokeWeight(0);
triangle(tpinkx+80,tpinky+25,tpinkx+40,tpinky,tpinkx+120,tpinky);//top
triangle(tpinkx+25,tpinky+80,tpinkx,tpinky+40,tpinkx,tpinky+120);//left
triangle(tpinkx+135,tpinky+80,tpinkx+160,tpinky+40,tpinkx+160,tpinky+120);//right
triangle(tpinkx+80,tpinky+135,tpinkx+40,tpinky+160,tpinkx+120,tpinky+160);//bottom

// triangle big green
//fill(5, 247, 66,otri+20);
strokeWeight(0);
//triangle(75,75,44,25,25,44);
triangle(75,125,25,156,44,175);
triangle(125,75,156,25,175,44);
//triangle(125,125,156,175,175,156);








}



