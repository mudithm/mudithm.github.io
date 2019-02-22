var empty_array = [];

var numbers = [1, 2, 3, 4];
var words = ["Hello", "World", "hehe"];
//		Hello			World			hehe
//alert(words[0] + " " + words[1] + " " + words[2]);
//alert(words[3]);

var animals = ["tiger", "koala", "dog", "chimpanzee"];
processing.draw = function() {
 	 for (var i = 0; i < animals.length; i++)
     {
       fill(255);
       rect( 20, 20 * i, 100, 20);
       fill(random(0, 255), random(0, 255), random(0, 255)); 
       // Hint: Use random(), or a variable
       text(animals[i], 20, 20+20*i);
     }
  noLoop();
}
