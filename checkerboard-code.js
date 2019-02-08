 processing.draw = function() {
     var size = 50; 				// size of the squares
     for (var j = 1; j <= 10; j++) 			// makes 10 rows
     {
       for (var i = 1; i <= 10; i++) 		// makes 10 columns
     	{
       		if ((i+j) % 2 == 0) 		// when i+j is even, color it greenish
         			fill(100, 200, 100);
       		else		 		// when i+j is odd, color it reddish
         			fill(200, 100, 100);
       		rect( size * i, size * j, size, size);  // makes the squares
     }
    }
   }

