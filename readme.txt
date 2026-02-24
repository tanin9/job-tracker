Answers to Questions
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

The getElementById()
 --it's returns an Element object
 --select by id which matches the specified string. 
 --Since element Id's are required to be unique if specified, they're a useful way to get access to a specific element quickly.
Syntax : getElementById(id)

The querySelector() 
 --it's returns the first matching Element. If no matches are found, null is returned.
 --select by the document that matches the specified CSS selector, or group of CSS selectors.
 --Slightly slower because it has to parse the more complex selector
Syntax : querySelector(selectors)

The getElementsByClassName() 
 --it's returns an array-like object of all child elements 
 --select by the given class name(s).
 --Generally faster for simple class selection
 --The returned collection automatically updates to reflect changes in the DOM in real-time.
Syntex: getElementsByClassName(names) 

The querySelectorAll() method of the Document returns  NodeList 
 --select by a list of the document's elements that match the specified group of selectors. 
 --Can be slightly slower, especially with complex selectors.
 --returns a static (not live) NodeList  which is not update automatically.
Syntex : querySelectorAll(selectors)


2. How do you create and insert a new element into the DOM?

      /*----create element syntex----*/
      const newElment = document.createElement("p");

      newDiv.textContent = "Hello world";
      const parentElement = document.getElementById("parent-element-id");

      /*----Insert new element syntex----*/
      parentElement.appendChild(newElment);


3. What is Event Bubbling? And how does it work?

in Event Bubbling by clicking an element, the event fires on that element first, then bubbles up through every parent all the way to the document.
/*--------clicking the button triggers all three---------*/
document.querySelector("main").addEventListener("click", () => console.log("main"));
document.querySelector(".card").addEventListener("click", () => console.log("card"));
document.querySelector(".btn").addEventListener("click", () => console.log("btn"));
/*---------- console output order: btn → card → main----------*/


4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a pattern used to handle events efficiently by attaching a single event listener to a parent element 
instead of adding listeners to multiple similar child elements, and then identifying the actual source of the event using 
the event.target property or event.currentTarget .

 --Uses event bubbling to capture events.
 --Reduces the number of event listeners.
 --Ideal for dynamically added elements.
 --Improves performance and memory usage.



5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault()
 --syntax: event.preventDefault();
 -- not return value
 -- not take any parameters

stopPropagation()
 --syntax: event.stopPropagation();
 -- not have any return type
 -- not take any parameters