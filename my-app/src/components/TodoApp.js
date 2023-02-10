import React, {useState, UseState} from 'react'

function TodoApp() {
    const [state, setState] = useState([]);
    const [input, setInput] = useState("");
    

    const addtodo = (todo) => {
        const Newtodo = {
            id: Math.random(),
            text: todo
        }

        setState([...state, Newtodo]);

        setInput("");
    };

    const filteritems = (todoitem) => {
       const newlist = state.filter((items) => items.id !==todoitem)

        setState(newlist)
    }

  return (
    <div>
        <h1>Todo App</h1>
        <input type="text" placeholder='enter things' value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => addtodo(input)}>add item</button>
        <ul>
            {state.map((item) =>  
                <li key={item.id}>{item.text}
                    <button onClick={() => filteritems(item.id)}>&times;</button>
                </li>
            )}
        </ul>

    </div>
  )
}

export default TodoApp