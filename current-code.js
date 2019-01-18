processing.setup()
{
	size(400, 400);		// Sets the size of the canvas
	frameRate(30);		// The number of times the canvas will update
						// per second
	x=0;				// initial x value
}


processing.draw = function() 
{
	background(0);		// background color

	var pos = 150;		// Tracks the position variable

	fill(200);			// Changes the fill color
	rect(150, 150, 100, 150); 	// Makes the rocket body
	fill(135, 206, 250);		
	ellipse(200,200,50,50);		// Makes the window
	fill(255,0,0);				
	triangle(150, 150, 200, 100, 250, 150); //Make the three fins
	triangle(200, 325, 150, 325, 175, 300);
	triangle(250, 325, 200, 325, 225, 300);

}