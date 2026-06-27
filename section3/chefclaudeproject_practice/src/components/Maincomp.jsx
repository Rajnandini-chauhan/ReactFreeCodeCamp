export default function MainComponent() {
  function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior like page reload and allows you to handle the form submission in JavaScript.and does not change the URL in the browser.

    console.log("Form submitted")

    const formData = new FormData(event.currentTarget); // Creates a new FormData object from the form element that triggered the event. This object allows you to easily access the form data.

    const newIngredient = formData.get("ingredient"); // Retrieves the value of the input field with the name "ingredient" from the FormData object.

    console.log("New ingredient:", newIngredient);

    ingredients.push(newIngredient); // Adds the new ingredient to the ingredients array. 
  }


  const ingredients = []
  const ingredientList = ingredients.map((ingredient) => {
    <li>{ingredient}</li>
  })

  return (
    <main className="main">
      <form className="main-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="ingredient"
          placeholder="e.g. pasta"
          aria-label="Add ingredient"
        />

        <button onClick={handleSubmit} type="submit">
          Add ingredient
        </button>
      </form>
      <ul>
        {ingredientList}
      </ul>
    </main>
  );
}
//Difference between onClick and onSubmit:
// onClick is an event handler that is triggered when a user clicks on an element, such as a button.
//  It can be used to perform actions like submitting a form, changing the state of a component, or triggering other functions. 
// In this case, the onClick event is attached to the button element and calls the handleSubmit function when the button is clicked.
// onSubmit is an event handler that is triggered when a form is submitted. It is typically used to handle form submissions and
//  perform actions like validating input, sending data to a server, or updating the state of a component. 
// In this case, the onSubmit event is attached to the form element and calls the handleSubmit function when the
//  form is submitted, either by clicking the submit button or pressing Enter while focused on an input field.

//Difference between props and state:
// Props (short for properties) are read-only data that is passed from a parent component to a child component. 
// They allow you to customize the behavior and appearance of a component based on the data provided by its parent. 
// Props are immutable, meaning that a child component cannot modify the props it receives from its parent.
// State, on the other hand, is mutable data that is managed within a component. It can be updated using the useState hook and triggers a re-render when changed. 

//Props refer to the properitees being passed to a component in order for it to work correctly, similar to how a function receives parameters."from above". 
//A component receiving props is not allwed to modify those prpos. They are immutable 

// State refers to values that are managed by the component , similar to variables declared within a funtion. any time you have changing
//values that should by saved/displayed , you'll likely be using state. State is mutable 

//View as a function of state:
//Render : React runs your function and displays whatever is returned. When state changes, React runs your function again and updates the display to match the new state.
//setState : Changing a local,non-state variable does not cause react to re-render the component. Changing state with a built-in setState function does.
//view = function(state) : React components are functions that take in state and props as input and return a view (JSX) as output.
//  When the state or props change, React re-runs the component function to generate a new view that reflects the updated state or props. 
// This is why we say that the view is a function of state.