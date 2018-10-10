Dani Briggs, 50

[Live Sketch Link](https://dani-briggs.github.io/120-work/hw-7/)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing


Why is it working the way it is?

  It works this way because the code that sets up the ball's movement is in the draw function, so the ball's postion will update each time. The if statment in the draw function allows a change to occur and since it's in the draw function it will update naturally. The mousePressed function, activates the change in the if statment.

What does each line do?

  The first set of lines, setup the varables that will be used in the sketch. The setup function, sets up the canvas, and then, in the draw function, is where the we create the ball and setup its movement within the canvas. The first set of lines with ball.x and ball.y, sets the postion of the ball to affected by the delta and scale of the ball. The next set of lines effect the ball's speed. The last lines have it so when the mouse is clicked/pressed in a certain area of the canvas, the movement of the ball will either move faster or slower.

How can you make the ball change direction?

  In the live sketch, you can click on different parts of the canvas that will make the ball move faster or slower, which will make it change its direction pattern. If you wanted to change the direction of the ball within the code; you could change the number values within some of the functions and varables in the code. For example, in the mousePressed function, change the last numbers from 10 to 20 and that made a change to the direction of the ball.


## How did you alter the sketch?

I decided to make the sketch a bit more colorful. Now, it looks it should have the yellow submarine in it. I also change the size of the ball from 40 to 100. I changed the ball.x and ball.y from 1 to 5, to see what would happen and it looks like it didn't do much. The last thing I did was change the last numbers in the mousePressed function from 10 to 20 and it looks like it made the ball move faster, when clicked towards the right side of the canvas. I also added a randomize stroke color but you can't really tell.
