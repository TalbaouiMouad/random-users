import './searchBox.style.css'
export const SearchBox=(props)=>{
    return (
    <input className='searchBox'
    type='search'
    placeholder={props.text}
    onChange={props.handleChange}
    />)}