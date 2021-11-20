import React, { useState } from 'react';
import './App.css';
import Todo from './component/Todo';

const App = () => {
 
  const [currentData, newData] = useState("");
  const [Items, newItem] = useState([]);

  const inputEvent = (event) =>{
    newData(event.target.value);

};

 const listOfItem = () => {
  if(currentData === ""){
      alert("Please Enter anything");
  }
  else{
    newItem((oldItems) => {
    
    return [...oldItems, currentData];
    
  });

  }

     newData("");
 };
 const deleteItems= (id) => {
  newItem((oldItems) => {
    return oldItems.filter((arrElem, index) =>{
          return index !== id;
    })
  })
       
  };


   return(
    <>
     <div className="main__div">
       <div className="center__div">
       <br />
        <h1> ToDo List</h1>
       <br />
        <input type="text" placeholder="Add  a Item" value={ currentData } onChange={inputEvent} />
        <button onClick={listOfItem }><i class="fas fa-plus"></i></button>
        <ol>
                {Items.map((itemval, index) =>
                {
                return (
                  <Todo 
                  key = {index}
                  id={index}

                  text={itemval}
                     onSelete={deleteItems}
                   />
                   );
                     })}
          
        </ol>
          

        
      </div>

    </div>
    </>
    );
}

export default App
