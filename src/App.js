import {Component} from 'react'
import Delete from './components/Delete';
import './App.css';
 const UsersList=[
   {
     uniqueId:1,
     content: "Font-End Developer"
   },
   {
     uniqueId:2,
     content:"Back-end developer"
   },
   {
    uniqueId:3,
    content:"Full-stack developer"
  },
  {
    uniqueId:4,
    content:"Java developer"
  },
  {
    uniqueId:5,
    content:"UI/UX designer"
  },
  {
    uniqueId:6,
    content:"Pyhton developer"
  },
  {
    uniqueId:7,
    content:"SQL member technical"
  },
 ]

class App extends Component{
  state={users:UsersList}
  deleteList=(uniqueId)=>{
    const{users}=this.state
    const newUsers=users.filter(eachList=>(
      eachList.uniqueId!==uniqueId
    ))
    this.setState({users:newUsers})
  }
  render(){
    const{users}=this.state
    return(
      <div className='App'>
        <h1>Developer Positions</h1>
        <ul className='ul-container'>
          {users.map(each=>(
            <Delete key={each.uniqueId} details={each} deleteUser={this.deleteList}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default App;
