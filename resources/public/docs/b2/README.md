<h1>App to Add Two Numbers</h1>

## Project Outline

In this project you will learn to add two numbers. Both the numbers are to be added through two input elements and should output sum after validation on a button click.

## Learning Outcome

* Components
  - a React component is a `JavaScript` function that combines markup, CSS, and JavaScript. It returns you `JSX`. 
  - a react components are reusable UI elements for the app.
* useState
  - useState is a `React Hook` that lets functional components create and manage their own state. In simple terms, it allows a component to remember information and update it when needed. 
  - Hooks are special functions in React that let you “hook into” features like state and lifecycle methods without writing a class. 

## Create a Project

```js
npm create vite@latest
```

    - project name : b2
    - framework : react
    - variant : javascript

```js
cd b2
npm install
npm run dev
```

## File Structure
There are number of ways to approach this project. We will introduce commonly used professional file structure. Its a good practice to keep components group in one folder inside a `components` folder inside `src` folder.

```css
b2/
|-- public
|-- src/
│-- |-- components/
|-- |-- |-- formComponents/
|-- |-- |-- |-- InputField.jsx  
|-- |-- |-- |-- SubmitButton.jsx 
|-- |-- |-- |-- SumForm.jsx 
|-- |-- App.css
|-- |-- App.jsx
|-- |-- index.css
|-- |-- main.jsx
|-- ...
|-- index.html

```

## Clean App.jsx

Open `App.jsx` and remove some of the code to make the file look like as below. Alternatively, you can paste the following code in the `App.jsx`

```js
import './App.css'
function App() {
  return (
    <>
    </>
  )
}
export default App
```
