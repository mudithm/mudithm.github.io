processing.setup = function()
{
 	size(400, 400);
  	frameRate(30);
  	x = 0;
}

processing.draw = function()
{
 background(0); 
 // Snow
 fill(255, 255, 255);
 //          x      y     w   h
 // ellipse(50 , 50 + x, 10, 10);
 x = x + 1;
 for (var i = 0; i < 10; i++)
  {
    for (var k = 0; k < 10; k++)
    {
		ellipse(50*i + x, 50*k + x, 10, 10);
    }
  }
  if ( x == 50)
    x = 0;
}

