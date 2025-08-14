## About Tic-Tac-Toe
Tic-Tac-Toe is a simple two-player game usually played on a 3×3 grid. Players take turns marking one empty square with `X` or `O`. Player who takes first turn is assigned `X`. The goal is to be the first to get three of your symbols in a row — horizontally, vertically, or diagonally. The game is drawn if all 9 squares are filled without anyone making 3 in a row.

## Setting up the Project
```js
npm create vite@latest
```

    - project name : p2
    - framework : react
    - variant : javascript

```js
cd p2
npm install
npm run dev
```

The react app locates `index.html` which has <div id="root"></div> tag and one script tag to load `main.jsx`. The `main.jsx` tells react to render <App /> component into the `root` div. The component <App /> is defined in `App.jsx` which is loaded using `import` in `main.jsx`. In other words, the content of `App.jsx` is what the user actually sees on the screen.

Remove all the content of `App.jsx` and `App.css`

## Create a Square
We need a clickable square where a player will click to take the turn. We can use HTML `<button>` element

```js
import './App.css'

export default function Square() {
  return <button className="square"></button>;
}
```
Check the browser after adding the following style in `App.css`. 

```css
.square {
  background: #ffffff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
}
```
You will see one square button on the screen.

Now, we have to display `X` of `O` in the button on the button click. So, we have to handle click event using `onClick`. Also, the state needs to be updated.

```js
import React, { useState } from 'react';

import './App.css'

export default function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
```
React function defines a Square component that displays a button that starts empty and changes to X on the first click. To see this in action, check the browser and click in box.

`onClick={handleClick}` tells `react` to call the function `handleClick` when the button is clicked. If we write `onClick={handleClick()}` the function would be called immediately during render instead of waiting for the click. 

The function `handleClick` set the value to `X`.

You will see two square in case you add `Square` component in `main.jsx` as below. 

```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Square from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <App />
    <Square />
    </>
  </StrictMode>
)
```
It is important to note that you will get the same element when you import `App` or `Square` through `./App.jsx`. Now, the browser will render two square boxes.

This activity was done just reaffirm the concept of component handling in react. `Undo` the changes you have done in the `main.jsx`. 

## Creating Board
The board for this game is a `3 x 3` grid. So, let us create another component with name `Board` which will use `<Square />` as component we just created. Now, we will `export default` the `<Board />` component, so, **remove** `export default` from `Square` function. 

```js
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
```
To see this in action, check the browser and click in box. You find the boxes are in one row only. To make it a `3 x 3` grid, add the following css in the `App.css`.

```css
.board-row:after {
  clear: both;
  content: '';
  display: table;
}
```

## Let Board Knows the State of Each Square
Currently, each Square component maintains a part of the game’s state. To check for a winner in a tic-tac-toe game, the Board would need to know the state of each of the 9 Square components.

So, the state variable are to be in the scope of the `Board`. In case we shift that in `Board`, we have to handle the button click inside board and pass the `value` and the `handleClick` function to `Square` function as props. So, we can use:

```js
export default function Board() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue("X");
  }
return (
  <>
    <div className="board-row">
      <Square value = { value } onSquareClick = {() => handleClick()} />
   ....
   ....
```
and the Square function is update as

```js
function Square( { value, onSquareClick }) {  
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
```
If make changes in all the `<Square />` components, then all the Squares will have `X` when clicked in any of the Square. Our aim is to update with the individual values associated with the square. 
Let us store these values in an array. So 

```js
const [squares, setSquares] = useState(Array(9).fill(null));
```


