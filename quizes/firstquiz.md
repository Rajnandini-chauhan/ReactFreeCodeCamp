1. Where does React put all of the elements I create in JSX when I 
   call `root.render()`?

All the element I render get put inside the div wiht the id of "root" or whatever other element i might select when calling createRoot


2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```

An object! Unlike creating an HTML element in vanilla Dom js , what gets created form the jsz we have in our React code is a plain js object that react will use to fill in the view.

3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```
we have to wrap both lines in the div or maybe in parent element


4. What does it mean for something to be "declarative" instead of "imperative"?
imperative means we define the step by step method to do the task(exactly how to do the job)

5. What does it mean for something to be "composable"?
 make the big picture into smaller chunks
 and we can put together the chunks