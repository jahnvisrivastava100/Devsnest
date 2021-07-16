import './App.css';
import CreateItem from './Item_Create';
import ItemsList from './List';
import {useState} from 'react';

function App() {
  const [items, setItems] = useState([]);
    
    const addItem = (name, calories) => {
        setItems([...items, {name: name, calories: calories}]);
    }
    const deleteItem = (name) => {
      setItems(items.filter((item) => item.name !== name));
  }
    const updateItem = (prevName, newName, calories) => {
        const index = items.findIndex((item) => item.name === prevName);
        items[index].name = newName;
        items[index].calories = calories;
        setItems(items);
    }

    


  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
        <CreateItem addItem={addItem}/>
        <ItemsList items={items} updateItem={updateItem} deleteItem={deleteItem}/>
        </div>
      </header>
    </div>
  );
}

export default App;