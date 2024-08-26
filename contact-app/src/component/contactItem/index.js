import { IoPersonCircle } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import Popup from 'reactjs-popup';
import './index.css'

const ContactItem = (props)=>{
    const {name,mobile,id,Delete,Edit,Show,email,address} = props
    const style = { color: "black" }

    const OnShow  = ()=> {
        Show(id)
    }
    const OnDelete = () => {
        Delete(id)
    }
    const onEdit = () => {
        
        Edit(id)
    }

    return(
        <li className="listItem">
            <p className="id">{id}</p>
            <IoPersonCircle className="profile"/> 
            <div className="buttons-card">
                <p className="text">{name}</p>
                <p className="text">{mobile}</p>
            </div>
            <div className="buttons-card1">
                
                <Popup
    trigger={<button className="button" onClick={OnShow}><FaEye id="unique-eye-icon"/></button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="content">
        <p className="header"> Contact Details </p>
          <hr/>
          <div>

            <p>Name:{name}</p>
            <p>email:{email}</p>
            <p>Number:{mobile}</p>
            <p>Address:{address}</p>
          </div>
        </div>
        
        
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
      </div>
    )}
  </Popup>
                <button className="button" onClick={OnDelete}><AiFillDelete style={style}/></button>
                <button className="button" onClick={onEdit}><FaEdit/></button>
            </div>
        </li>
    )
}

export default ContactItem