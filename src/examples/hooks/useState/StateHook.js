import React, { useState } from "react";

// https://reactjs.org/docs/hooks-state.html
// Hooks are a new addition in React 16.8. They let you use state and other
// React features without writing a class (from “stateless components”).
// As Hooks now introduced the ability to use React state from “Stateless components”,
// we prefer the name “function components”.
// Hooks don’t work inside classes. But you can use them instead of writing classes.

export default function StateHook() {
  // In a function component, we have no 'this', so we can’t assign or read
  // this.state. Instead, we call the useState Hook directly inside our component,
  // useState declares a “state variable”.
  // useState is a new way to use the exact same capabilities that this.state
  // provides in a class.

  // The only argument to the useState() Hook is the initial state. Unlike with
  // classes, the state doesn’t have to be an object. We can keep a number or a
  // string if that’s all we need.

  // useState returns a pair of values: the current state and a function that
  // updates it. This is why we write const [count, setCount] = useState(). This
  // is similar to this.state.count and this.setState in a class, except you get
  // them in a pair.

  // We declare a state variable called count, and set it to 0. React will
  // remember its current value between re-renders, and provide the most recent
  // one to our function. If we want to update the current count, we can call
  // setCount.
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* When we want to display the current count in a class, we read
      this.state.count: <p>You clicked {this.state.count} times</p>
      In a function, we can use count directly: */}
      <p>You clicked {count} times</p>

      {/* In a class, we need to call this.setState() to update the count state:
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        Click me
      </button>
      In a function, we already have setCount and count as variables so we don’t
      need this: */}
      <button onClick={() => setCount(count + 1)} type="button">
        Click me
      </button>
    </div>
  );
}

//  Note: You might be wondering: why is useState not named createState instead?
// “Create” wouldn’t be quite accurate because the state is only created the
// first time our component renders. During the next renders, useState gives us
// the current state. Otherwise it wouldn’t be “state” at all! There’s also a
// reason why Hook names always start with use. We’ll learn why later in the
// Rules of Hooks.

// Tip: Using Multiple State Variables
// Declaring state variables as a pair of [something, setSomething] is also handy
// because it lets us give different names to different state variables if we want
// to use more than one:

// function ExampleWithManyStates() {
//   Declare multiple state variables!
//   const [age, setAge] = useState(42);
//   const [fruit, setFruit] = useState('banana');
//   const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

// In the above component, we have age, fruit, and todos as local variables, and
// we can update them individually:
//   function handleOrangeClick() {
//     Similar to this.setState({ fruit: 'orange' })
//     setFruit('orange');
//   }

// You don’t have to use many state variables. State variables can hold objects
// and arrays just fine, so you can still group related data together. However,
// unlike this.setState in a class, updating a state variable always replaces it
// instead of merging it.
