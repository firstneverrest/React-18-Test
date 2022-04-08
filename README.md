# React-18-Test

React 18.0.0 was released in 29 March 2022. This version come with wonderful new features. [Visit React new version document here](https://github.com/facebook/react/blob/main/CHANGELOG.md).

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
import ReactDOM from 'react-dom/client';
...
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

## Automatic Batching

Grouping all the state updates to re-render the component once instead of re-render every time when the state was change. Moreover, React 18's createRoot API can batch the state updates inside asynchronous functions.

## Suspense & Suspense List

Enable using Suspense for data fetching.
