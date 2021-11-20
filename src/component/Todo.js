import React from 'react';

const Todo = (props) => {
  return (
    <div>
     <div className="todo_style">
   <span 
   onClick={()=>{
       props.onSelete(props.id);
   }}><i class="fas fa-trash"></i>
</span>
   <li> {props.text} </li>
  </div> 
      
    </div>
  )
}

export default Todo
