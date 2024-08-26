
import {Component} from 'react' 
import { IoIosAddCircleOutline } from "react-icons/io";
import ContactItem from './contactItem/index'
import Popup from 'reactjs-popup';
import './index.css'

const contactDetails=[   
    {
        "id": 1,
        "name": "Aaron",
        "mobile": "5785664545",
        "email": "aaron@gmail.com",
        "address": "ghmc"
    },
    {
        "id": 2,
        "name": "Buincy Hanson",
        "mobile": "5785664545",
        "email": "hanson@gmail.com",
        "address": "gBmc"
    }
]

class Contact extends Component {
    state = {contactList:contactDetails,name:'',email:'',phnumber:'',add:'',searchTExt:''}

    onName= event =>{
        this.setState({name:event.target.value})
    }

    onEmail= event =>{
        this.setState({email:event.target.value})
    }

    onPhnumber= event =>{
        this.setState({phnumber:event.target.value})
    }

    onAdd = event =>{
        this.setState({add:event.target.value})
    }

     Show  = id => {
        console.log('show',id)
    }

    Delete = id => {
        const {contactList} = this.state 

        const new_List = contactList.filter( each => each.id!== id
        
        )
        this.setState({contactList:new_List})
    }

     Edit = id => {
        console.log(id)
    }

    onSearch = (event)=> {
        const {contactList} = this.state

        const newTest = event.target.value 
        console.log(newTest)
        
        const newLi = contactList.filter (each=> each.name.includes(newTest))

        this.setState({contactDetails:newLi})

        
    }

    addContact = () =>{
        const {name,email,phnumber,add,contactList} = this.state
        const newContact = {
            'id':contactList.length+1,
            'name':name,
            'emai':email,
            'mobile':phnumber,
            'address': add
        }

        this.setState(prestate => ({contactList : [...prestate.contactList,newContact],name:'',email:'',phnumber:'',add:''}))
    }

    render(){
        const {contactList,email,name,add,phnumber,searchTExt} = this.state

        return(
            <div className='bg'>
                <div className='AllContact-card'>
                    <h1 className='AllContact-header'>All Contacts</h1>
                    <Popup trigger={<button className="button"> <IoIosAddCircleOutline className='plus'/> </button>} modal  position="top center"
    nested>          
                    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Add Contact </div>
        <form className="content">
          <label htmlFor='name' className='labelText'>Name :</label> <br/>
          <input type='text' id='name'className='searchInput' placeholder='Enter Your Name' onChange={this.onName} value={name}/> <br/>
          <label htmlFor='Email' className='labelText'>Email:</label> <br/>
          <input type='text' id='Email' className='searchInput' placeholder='Enter Your Email' onChange={this.onEmail} value={email}/> <br/>
          <label htmlFor='phnu' className='labelText'>Phone Number :</label> <br/>
          <input type='text' id='phnu' className='searchInput' placeholder='Enter your phone Number' onChange={this.onPhnumber} value={phnumber}/><br/>
          <label htmlFor='add' className='labelText'>Address :</label> <br/>
          <input type='text' id='add' className='searchInput' placeholder='Enter your Address' onChange={this.onAdd} value={add}/>
        </form>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button>
        </div>
        <button className='button1' onClick={this.addContact}>ADD Contact</button>
        <button className='button1 color'> Reset</button>
      </div>
    )}
  </Popup>
                    
                
                    
            
                </div>
                <div>
                    <input type='search' placeholder= 'search Contact' className='searchInput' onChange={this.onSearch} />

                </div>
                <ul type='none'>

                    {
                      contactList.map(each=> <ContactItem key={each.id} name={each.name} mobile={each.mobile} email={each.email} id={each.id}  Show={this.Show} address={each.address}
                        Edit={this.Edit}
                        Delete={this.Delete}
                        
                        />)  
                    }
                </ul>

            </div>
        )
    }
}

export default Contact