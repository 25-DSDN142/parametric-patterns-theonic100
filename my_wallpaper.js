//your parameter variables go here!

//opacity 
var opa = 55
var otri = 100

// centre lines
var alllines1 = 100
var alllines = 100

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



function setup_wallpaper(pWallpaper) {
 pWallpaper.output_mode(DEVELOP_GLYPH);
//pWallpaper.output_mode(GLIDE_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
 background(255)//white
 if(circlesize>50){
 background(252, 130, 0)}//burnt orange background
 if(circlesize<50){background(0, 13, 255,opa)}//light blue
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


  //centre lines without opacity filter
//RH Side
  fill(247,107,7);
  strokeWeight(0)
 if(circlesize<50){
  stroke(0,0,0)
  strokeWeight(2)
  //diamond lines
  //RH side
 line(alllines1,alllines1,alllines1+100,alllines1-50,alllines1+100,alllines1);//top
line(alllines1,alllines1,alllines1+100,alllines1+50,alllines1+100,alllines1+25);//bottom
//top 
line(alllines1,alllines1,alllines1+50,alllines1-100,alllines1+25,alllines1-100);//right
line(alllines1,alllines1,alllines1,alllines1-100,alllines1-25,alllines1-100);//centre
line(alllines1,alllines1,alllines1-50,alllines1-100,alllines1-50,alllines1-100);//left
//LH side
line(alllines1,alllines1,alllines1-100,alllines1-50,alllines1-100,alllines1-50);//top
line(alllines1,alllines1,alllines1-100,alllines1+50,alllines1-100,alllines1+75);//bottom
//bottom
line(alllines1,alllines1,alllines1-50,alllines1+100,alllines1-25,alllines1+100);//left
line(alllines1,alllines1,alllines1,alllines1+100,alllines1+25,alllines1+100);//centre
line(alllines1,alllines1,alllines1+50,alllines1+100,alllines1+75,alllines1+100);//right
}else{
//background lines
//rhside
triangle(alllines1,alllines1,alllines1+100,alllines1-75,alllines1+100,alllines1-50);
triangle(alllines1,alllines1,alllines1+100,alllines1-25,alllines1+100,alllines1);
triangle(alllines1,alllines1,alllines1+100,alllines1+100,alllines1+100,alllines1+75);
triangle(alllines1,alllines1,alllines1+100,alllines1+50,alllines1+100,alllines1+25);
//top 
triangle(alllines1,alllines1,alllines1+75,alllines1-100,alllines1+100,alllines1-100);
triangle(alllines1,alllines1,alllines1+50,alllines1-100,alllines1+25,alllines1-100);
triangle(alllines1,alllines1,alllines1,alllines1-100,alllines1-25,alllines1-100);
triangle(alllines1,alllines1,alllines1-75,alllines1-100,alllines1-50,alllines1-100);
//LH side
triangle(alllines1,alllines1,alllines1-100,alllines1-75,alllines1-100,alllines1-100);
triangle(alllines1,alllines1,alllines1-100,alllines1-25,alllines1-100,alllines1-50);
triangle(alllines1,alllines1,alllines1-100,alllines1,alllines1-100,alllines1+25);
triangle(alllines1,alllines1,alllines1-100,alllines1+50,alllines1-100,alllines1+75);
//bottom
triangle(alllines1,alllines1,alllines1-100,alllines1+100,alllines1-75,alllines1+100);
triangle(alllines1,alllines1,alllines1-50,alllines1+100,alllines1-25,alllines1+100);
triangle(alllines1,alllines1,alllines1,alllines1+100,alllines1+25,alllines1+100);
triangle(alllines1,alllines1,alllines1+50,alllines1+100,alllines1+75,alllines1+100);}


//centre lines with ocacity fillter
fill(247,107,7,opa);
if(circlesize<50){fill(252, 59, 0,opa)}
//RHside
strokeWeight(0);
triangle(alllines,alllines,alllines+100,alllines+75,alllines+100,alllines+50);
strokeWeight(0);
triangle(alllines,alllines,alllines+100,alllines-100,alllines+100,alllines-75)
strokeWeight(0);
triangle(alllines,alllines,alllines+100,alllines-50,alllines+100,alllines-25)
strokeWeight(0);
triangle(alllines,alllines,alllines+100,alllines+25,alllines+100,alllines)
//top 
strokeWeight(0);
triangle(alllines,alllines,alllines+50,alllines-100,alllines+75,alllines-100);
strokeWeight(0);
triangle(alllines,alllines,alllines,alllines-100,alllines+25,alllines-100);
strokeWeight(0);
triangle(alllines,alllines,alllines-50,alllines-100,alllines-25,alllines-100);
strokeWeight(0);
triangle(alllines,alllines,alllines-100,alllines-100,alllines-75,alllines-100);
// LH side
strokeWeight(0);
triangle(alllines,alllines,alllines-100,alllines-50,alllines-100,alllines-75);
strokeWeight(0);
triangle(alllines,alllines,alllines-100,alllines,alllines-100,alllines-25);
strokeWeight(0);
triangle(alllines,alllines,alllines-100,alllines+25,alllines-100,alllines+50);
strokeWeight(0);
triangle(alllines,alllines,alllines-100,alllines+75,alllines-100,alllines+100);
// bottom
strokeWeight(0);
triangle(alllines,alllines,alllines-75,alllines+100,alllines-50,alllines+100);
strokeWeight(0);
triangle(alllines,alllines,alllines-25,alllines+100,alllines,alllines+100);
strokeWeight(0);
triangle(alllines,alllines,alllines+25,alllines+100,alllines+50,alllines+100);
strokeWeight(0);
triangle(alllines,alllines,alllines+75,alllines+100,alllines+100,alllines+100);


fill(239, 245, 66,otri);
if (circlesize > 55){ 
  fill(29, 7, 227,otri)}
//circle
strokeWeight(0); 
circle(circlex,circley,circlesize);//tri1
circle(circlex+50,circley+50,circlesize);//tri2
circle(circlex+100,circley+100,circlesize);//tri3


if (trianglex > 75) {
  stroke(29, 7, 227,95);
  strokeWeight(2);      
  line(100,0,100,200);// vert line
  line(0,100,200,100)
 
}else{fill(255, 0, 0, 90);
  //triangle small pink 
strokeWeight(0);
triangle(trianglex+25,triangley+25,trianglex,triangley,trianglex+50,triangley);//top
triangle(trianglex,triangley+50,trianglex-25,triangley+25,trianglex-25,triangley+75);//left
triangle(trianglex+50,triangley+50,trianglex+75,triangley+25,trianglex+75,triangley+75);//right
triangle(trianglex+25,triangley+75,trianglex,triangley+100,trianglex+50,triangley+100);//bottom
}


// triangle big pink
fill(247, 5, 183, otri);
strokeWeight(0);
triangle(tpinkx+80,tpinky+25,tpinkx+40,tpinky,tpinkx+120,tpinky);//top
triangle(tpinkx+25,tpinky+80,tpinkx,tpinky+40,tpinkx,tpinky+120);//left
triangle(tpinkx+135,tpinky+80,tpinkx+160,tpinky+40,tpinkx+160,tpinky+120);//right
triangle(tpinkx+80,tpinky+135,tpinkx+40,tpinky+160,tpinkx+120,tpinky+160);//bottom


//corner triangles
strokeWeight(0);
triangle(75,125,25,156,44,175);
triangle(125,75,156,25,175,44);


}



