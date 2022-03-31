import './item.style.css'
export const ItemList= ({user}) =>{
        return (
        <li  className='list-item'>
        <img src={`https://i.pravatar.cc/150?img=${user.id}`}/>
        <h1>{user.name}</h1>
        <span>{user.email}</span>
        </li>)}