import {Component} from 'react';
import './App.css';
import {ClassList} from './components/class-list/class-list.components'
import { SearchBox } from './components/searchBox/searchBox.components';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      user:[],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => {this.setState({user:data})
  console.log('nom',this.state.user);});
  }
  
  render(){
    let {searchField,user}=this.state;
    let filteredList=user.filter((user)=>{
      return user.name.toLowerCase().includes(searchField.toLowerCase());
    });
  return (
    <div className="App">
      <h1>Random Profiles</h1>
      <SearchBox
      text='search someone'
      handleChange={(e)=>{this.setState({searchField:e.target.value})}}
      />
      <ClassList user={filteredList}/>
    </div>
  )}
}

export default App;
