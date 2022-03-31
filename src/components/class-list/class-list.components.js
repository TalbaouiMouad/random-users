import './class-list.style.css';
import {ItemList} from'../item-list/item-list.components.js';
export const ClassList=(props)=>{
  return(  <ul className='list-container'>
        {props.user.map((u)=>{return<ItemList  key={u.id} user={u}/>})}
      </ul>)
}