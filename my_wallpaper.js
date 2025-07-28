//your parameter variables go here!

//opacity 
var opa = 55

//





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
 //background(34, 12, 237, 50); //light orange background
 background(0,0,0,55)
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//   //rect
//   strokeWeight(0)
// fill(72, 105, 37);
// rect(0,100,200,100);



//centre lines
//RH side
fill(247,107,7);
strokeWeight(0);
triangle(100,100,200,75,200,100);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,200,50,200,75);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,200,25,200,50);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,200,0,200,25);

fill(247,107,opa);
strokeWeight(0);
triangle(100,100,200,200,200,175);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,200,175,200,150);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,200,150,200,125);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,200,125,200,100);

//top 
fill(247,107,7);
strokeWeight(0);
triangle(100,100,175,0,200,0);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,150,0,175,0);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,150,0,125,0);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,100,0,125,0);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,100,0,75,0);

fill(247, 107, 7,opa);
strokeWeight(0);
triangle(100,100,50,0,75,0);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,25,0,50,0);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,0,0,25,0);

// LH side
fill(247,107,7);
strokeWeight(0);
triangle(100,100,0,25,0,0);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,0,50,0,25);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,0,75,0,50);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,0,100,0,75);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,0,100,0,125);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,0,125,0,150);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,0,150,0,175);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,0,175,0,200);

//bottom
fill(247,107,7);
strokeWeight(0);
triangle(100,100,0,200,25,200);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,25,200,50,200);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,50,200,75,200);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,75,200,100,200);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,100,200,125,200);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,125,200,150,200);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,150,200,175,200);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,175,200,200,200);



//circle
strokeWeight(0); 
fill(239, 245, 66, opa+5);
circle(100,100,50);

// triangle small pink
fill(247, 5, 183, opa);
strokeWeight(0);
triangle(100,75,75,50,125,50);
triangle(75,100,50,75,50,125);
triangle(125,100,150,75,150,125);
triangle(100,125,75,150,125,150);

// triangle big pink

fill(247, 5, 183, opa);
strokeWeight(0);
triangle(100,45,65,20,135,20);
triangle(45,100,20,65,20,135);
triangle(155,100,180,65,180,135);
triangle(100,155,75,180,125,180);

// triangle big green
fill(5, 247, 66,opa+20);
strokeWeight(0);
triangle(75,75,44,25,25,44);
triangle(75,125,25,156,44,175);
triangle(125,75,156,25,175,44);
triangle(125,125,156,175,175,156);









}



