processing.setup()
{
	size(400, 400);		// Sets the size of the canvas
	frameRate(30);		// The number of times the canvas will update
						// per second
	x=400;				// starting position of the rocket
}


processing.draw = function() 
{
	background(0);		// background color

	var height = 150;	// Tracks the height of the rocket

	fill(200);			// Changes the fill color
	rect(150, height + x, 100, 150); 	// Makes the rocket body
	fill(135, 206, 250);		
	ellipse(200,200 + x,50,50);		// Makes the window
	fill(255,0,0);

	// For triangles:
	//         Coord 1       Coord 2       Coord 3
	//        x1   	  y1	x2      y2	  x3      y3				
	triangle(150, 150 + x, 200, 100 + x, 250, 150 + x); //Make the three fins
	triangle(200, 325 + x, 150, 325 + x, 175, 300 + x);
	triangle(250, 325 + x, 200, 325 + x, 225, 300 + x);


	// When the lowest Y coordinate on the rocket (y = 325) is at the top of
	// the canvas, reset the rocket below the bottom of the canvas
	if ( x < -325)
	{
		x = 400 + 325;
	}

	// update the value of x every time draw() is called
	x = x - 10;



}