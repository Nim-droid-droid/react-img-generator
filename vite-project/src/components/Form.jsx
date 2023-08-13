import React, { useState } from "react";
import imgData from '../data'; // Make sure to adjust the path

/*
// What is State? A way for React to remember saved values from within a component.
  A state is required for each state cuz React only reads a line once so unless theres a change in state (that a hook is hooked into) it won't know to rerender, this is y we use state over normal funt
    React is declarative library so all we need to do is update our data and React will automatically react to it & update the page’s UI to reflect what has changed in that data. All we need to do is make sure the data updates correctly (useState - this will allow me to hook into the component, so whenever i update the state, MyForm cmpnt & React will update the UI based on any changes that happen to the val thats saved in useState) & React will handle the rest.

// When to use props when - 
Anytime you want to pass data into a component so that
component can determine what will get displayed on the
screen.

// When to use state when - 
Anytime you want a component to maintain some values from
within the component. (And "remember" those values even
when React re-renders the component).

  // CBF in set funt
callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.

// Props are immutable. State is mutable.
*/


// grab whatever input the user types in & generate the correspondin img from the JSON or API
export default function MyForm() {

  // state to store the default pic & then update it based on user input
  const [initialImg, setInitialImg] = useState('/sailormooncover.png'); // Set the initial image URL
  const [userInput, setUserInput] = useState("");

  // grab user input
  const handleInputChange = (e) => {
    const input = e.target.value.toLowerCase();
    setUserInput(input);
  };

  // grab the img that matches user input: userInput == imgData.images.name
  const handleGetImage = (e) => {
    e.preventDefault();
    const matchingImage = imgData.images.find(image => image.name.toLowerCase() === userInput);
    if (matchingImage) {
      setInitialImg(matchingImage.img_URL);
    } else {
      // Handle case when no match is found
      setInitialImg('/sailormooncover.png'); // Reset to the default image
    }
  };

  return (
    <>
      <form action="post" className="form">
        <input
          className="formInput"
          placeholder="Sailor Soldier Do You Want to See?"
          onChange={handleInputChange}
          type="text"
          name="userInput"
        />
        <button className="formBtn" onClick={handleGetImage}>
          Get image
        </button>
      </form>
      <img src={initialImg} alt="" />
    </>
  );
}

