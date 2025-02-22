# React Native useState Mutation Bug

This repository demonstrates a common error in React Native applications:  failing to properly update state when using objects or arrays with the `useState` hook. Direct mutation of the state object does not trigger a re-render because React uses shallow comparisons.

## The Bug
The `bug.js` file contains code that attempts to increment a counter within an object. Because the object is directly mutated, React's state update mechanism fails to recognize the change, leading to a UI that doesn't reflect the actual state value.

## The Solution
The `bugSolution.js` file provides the corrected implementation.  Instead of directly modifying the object, it creates a new object using the spread syntax (`...`) or other methods that guarantee React detects the state change, triggering a re-render and updating the UI.

## How to reproduce
1. Clone this repository.
2. Navigate to the directory containing the `bug.js` and `bugSolution.js` files.
3. Run the code and observe the behavior for each file.  `bug.js` demonstrates the error while `bugSolution.js` presents the solution. 