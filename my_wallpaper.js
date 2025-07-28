//your parameter variables go here!

//opacity 
var opa = 55
var opa1 = 60
var otri = 100

// centre lines
var alllines = 0
var alllines1 = 0

//triangles pink

 




function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
//  pWallpaper.output_mode(GRID_WALLPAPER);
  
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





//centre lines
//RH side

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,200,alllines,200,alllines+25);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,200,alllines+25,200,alllines+50);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,200,alllines+50,200,alllines+75);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,200,alllines+75,200,alllines+100);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,200,alllines+ 200,200,alllines+175);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,200,alllines+175,200,alllines+150);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,200,alllines+150,200,alllines+125);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,200,alllines+125,200,alllines+100);

//top 
fill(247,107,7);
strokeWeight(0);
triangle(100,100,alllines+175,0,alllines+200,0);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,alllines+150,0,alllines+175,0);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,alllines+150,0,alllines+125,0);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,alllines+100,0,alllines+125,0);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,alllines+100,0,alllines+75,0);

fill(247, 107, 7,opa);
strokeWeight(0);
triangle(100,100,alllines+50,0,alllines+75,0);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,alllines+25,0,alllines+50,0);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,alllines,0,alllines+25,0);

// LH side
fill(247,107,7);
strokeWeight(0);
triangle(100,100,0,alllines+25,0,alllines);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,0,alllines+50,0,alllines+25);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,0,alllines+75,0,alllines+50);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,0,alllines+100,0,alllines+75);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,0,alllines+100,0,alllines+125);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,0,alllines+125,0,alllines+150);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,0,alllines+150,0,alllines+175);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,0,alllines+175,0,alllines+200);

//bottom
fill(247,107,7);
strokeWeight(0);
triangle(100,100,alllines+0,200,alllines+25,200);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,alllines+25,200,alllines+50,200);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,alllines+50,200,alllines+75,200);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,alllines+75,200,alllines+100,200);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,alllines+100,200,alllines+125,200);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,alllines+125,200,alllines+150,200);

fill(247,107,7);
strokeWeight(0);
triangle(100,100,alllines+150,200,alllines+175,200);

fill(247,107,7,opa);
strokeWeight(0);
triangle(100,100,alllines+175,200,alllines+200,200);

//centre lines
//RH side

fill(247,107,7,opa1);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+200,alllines1,alllines1+200,alllines1+25);

fill(247,107,7);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+200,alllines1+25,alllines1+200,alllines1+50);

fill(247,107,7,opa1);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+200,alllines1+50,alllines1+200,alllines1+75);

fill(247,107,7);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+200,alllines1+75,alllines1+200,alllines1+100);

fill(247,107,7);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+200,alllines1+ 200,alllines1+200,alllines1+175);

fill(247,107,7,opa1);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+200,alllines1+175,alllines1+200,alllines1+150);

fill(247,107,7);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+200,alllines1+150,alllines1+200,alllines1+125);

fill(247,107,7,opa1);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+200,alllines1+125,alllines1+200,alllines1+100);

//top 
fill(247,107,7);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+175,alllines1+0,alllines1+200,alllines1+0);

fill(247,107,7,opa1);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+150,alllines1+0,alllines1+175,alllines1+0);

fill(247,107,7);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+150,alllines1+0,alllines1+125,alllines1+0);

fill(247,107,7,opa1);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+100,alllines1+0,alllines1+125,alllines1+0);

fill(247,107,7);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+100,alllines1+0,alllines1+75,alllines1+0);

fill(247, 107, 7,opa1);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+50,alllines1+0,alllines1+75,alllines1+0);

fill(247,107,7);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+25,alllines1+0,alllines1+50,alllines1+0);

fill(247,107,7,opa1);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1,alllines1+0,alllines1+25,alllines1+0);

// LH side
fill(247,107,7);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+0,alllines1+25,alllines1+0,alllines1);

fill(247,107,7,opa1);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+0,alllines1+50,alllines1+0,alllines1+25);

fill(247,107,7);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+0,alllines1+75,alllines1+0,alllines1+50);

fill(247,107,7,opa1);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+0,alllines1+100,alllines1+0,alllines1+75);

fill(247,107,7);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+0,alllines1+100,alllines1+0,alllines1+125);

fill(247,107,7,opa1);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+0,alllines1+125,alllines1+0,alllines1+150);

fill(247,107,7);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+0,alllines1+150,alllines1+0,alllines1+175);

fill(247,107,7,opa1);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+0,alllines1+175,alllines1+0,alllines1+200);

//bottom
fill(247,107,7);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+0,alllines1+200,alllines1+25,alllines1+200);

fill(247,107,7,opa1);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+25,alllines1+200,alllines1+50,alllines1+200);

fill(247,107,7);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+50,alllines1+200,alllines1+75,alllines1+200);

fill(247,107,7,opa1);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+75,alllines1+200,alllines1+100,alllines1+200);

fill(247,107,7);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+100,alllines1+200,alllines1+125,alllines1+200);

fill(247,107,7,opa1);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+125,alllines1+200,alllines1+150,alllines1+200);

fill(247,107,7);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+150,alllines1+200,alllines1+175,alllines1+200);

fill(247,107,7,opa1);
strokeWeight(0);
triangle(alllines1+100,alllines1+100,alllines1+175,alllines1+200,alllines1+200,alllines1+200);

//circle
strokeWeight(0); 
fill(239, 245, 66, otri+5);
circle(100,100,50);

// triangle small pink
fill(247, 5, 183, otri);
strokeWeight(0);
triangle(100,75,75,50,125,50);
triangle(75,100,50,75,50,125);
triangle(125,100,150,75,150,125);
triangle(100,125,75,150,125,150);

// triangle big pink

fill(247, 5, 183, otri);
strokeWeight(0);
triangle(100,45,65,20,135,20);
triangle(45,100,20,65,20,135);
triangle(155,100,180,65,180,135);
triangle(100,155,50,180,150,180);

// triangle big green
fill(5, 247, 66,otri+20);
strokeWeight(0);
triangle(75,75,44,25,25,44);
triangle(75,125,25,156,44,175);
triangle(125,75,156,25,175,44);
triangle(125,125,156,175,175,156);












}



