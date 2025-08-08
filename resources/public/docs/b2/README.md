<p style="center">dfdf</p>
## Project Outline

In this project you will learn to add two numbers. Both the numbers are to be added through two input elements and should output sum after validation on a button click.

## Learning Outcome

* Components
* useState

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

```css
b2/
|-- public
|-- src/
│-- |-- components/
|-- |-- |-- sum_form/
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
