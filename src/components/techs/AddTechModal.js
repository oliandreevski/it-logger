import React,{useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTech } from '../../actions/techAction'

const AddTechModal = ({addTech}) => {
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const onSubmit =()=>{
    if(firstName === '' || lastName === ''){
      M.toast({html:'Please enter a first and last name'})
    }else{
    addTech({
      firstName,
      lastName
      })

    //clear Fields
    setFirstName('')
    setLastName('')
  }
}
  return (
    <div id='tech-modal' className='modal'>
      <div className="modal-content">
        <h4>Add New Tech</h4>
        <div className="row">
          <div className="input-field">
            <input 
            type="text" 
            name='firstName' 
            value={firstName} 
            onChange={ e =>setFirstName(e.target.value)} />
            <label htmlFor="firstName" className='active'>
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input 
            type="text" 
            name='lastName' 
            value={lastName} 
            onChange={ e =>setLastName(e.target.value)} />
            <label htmlFor="lastName" className='active'>
              First Name
            </label>
          </div>
        </div>
       </div>
      <div className="modal-footer">
        <a href="#!" 
        onClick={onSubmit} 
        className="modal-close waves-effect blue waves-light btn">Enter</a>
      </div>
    </div>
  )
}
AddTechModal.propTypes = {
  addTech:PropTypes.func.isRequired,
}

export default connect (null,{ addTech })(AddTechModal)
