```
# Step 1

1. Link to High scores should be in the html

2. Timer should be in the html

3. Grab start button element on page using java script.
(This should be in the html)

4. When I click on start button element (event listener with a type of "click") run the code to start the quiz.

5. When I click on the start button, set a max time on the timer.


5. In the html their should be a container that I append the questions and answers to.

6. Dynamically render the question to the screen.

7. Dynamically render the answers to the screen. (Should be buttons because you click them.) Do we want to refresh the page? No - should use prevent.default.

8. Start the timer.

8. Make sure to put the event listener on the container when we click on an answer. Event delegation. We will add the listener to the parent. Parents is the container I am appending questions and answers to. From here we can do the element.match("button") we probably want to figure out what text or attributes are on that button to start that pair to see if we were right or not.

9. If correct show next question. If incorrect decrease the time on the timer by a chosen value. Also if the time hits 0 then end the game. Also if there are no more questions, end the game.
```
