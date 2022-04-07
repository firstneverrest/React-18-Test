# React-18-Test

React 18.0.0 was released in 29 March 2022. This version come with wonderful new features.

## Root API

```js
// old - cannot use new features in React 18
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// new
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
