The correct way to update object or array state is to create a new object or array with the changed values.  This way, React detects the change in the state's reference, triggering a re-render. 

```javascript
// Correct:
const [count, setCount] = useState({ count: 0 });

setCount(prevState => ({ ...prevState, count: prevState.count + 1 })); // Creates a new object

//Alternative using functional update for arrays
const [items, setItems] = useState([{id:1,value:'A'}]);

const addItem = ()=>{setItems(prevItems => [...prevItems,{id:2,value:'B'}])}
```

By using the functional update form of `setCount`, we ensure that the state update is always based on the previous state, preventing potential race conditions and improving the readability of your code.