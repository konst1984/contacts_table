import React, {useState} from 'react';
import PropTypes from "prop-types";

const Form = React.memo(({getFormData}) => {
  const [isForm, setIsForm] = useState(false);
  const [dataForm, setDataForm] = useState({
    id: '',
    firstName:'',
    lastName: '',
    email: '',
    phone: ''
  })

  const onSubmitHandler = (e) =>{
    e.preventDefault();
    getFormData(dataForm)
  }

  return (
    <>
      <button className = "btn btn-primary" type = "button" onClick = {() => setIsForm(!isForm)}>Add contact</button>
      {isForm && <form className = "needs-validation" noValidate onSubmit={onSubmitHandler}>
        <div className = "form-row">
          <div className = "col-md-1 mb-3">
            <label htmlFor = "validationTooltip04">ID</label>
            <input type = "numeric" className = "form-control" id = "validationTooltip04" placeholder = "ID"
                  value={dataForm.id} required onChange={(e) => setDataForm({...dataForm,id: e.target.value})}/>
            <div className = "invalid-tooltip">
              Please provide a valid state.
            </div>
          </div>
          <div className = "col-md-3 mb-3">
            <label htmlFor = "validationTooltip01">First name</label>
            <input type = "text" className = "form-control" id = "validationTooltip01" placeholder = "First name"
                   value={dataForm.firstName} required onChange={(e) => setDataForm({...dataForm,firstName: e.target.value})}/>
            <div className = "valid-tooltip">
              Looks good!
            </div>
          </div>
          <div className = "col-md-3 mb-3">
            <label htmlFor = "validationTooltip02">Last name</label>
            <input type = "text" className = "form-control" id = "validationTooltip02" placeholder = "Last name"
                   value={dataForm.lastName}  required onChange={(e) => setDataForm({...dataForm,lastName: e.target.value})}/>
            <div className = "valid-tooltip">
              Looks good!
            </div>
          </div>
          <div className = "col-md-3 mb-3">
            <label htmlFor = "validationTooltipUsername">Email</label>
            <div className = "input-group">
              <input type = "email" className = "form-control" id = "validationTooltipUsername" placeholder = "Username"
                     aria-describedby = "validationTooltipUsernamePrepend" value={dataForm.email}  required onChange={(e) => setDataForm({...dataForm,email: e.target.value})}/>
              <div className = "invalid-tooltip">
                Please choose a unique and valid username.
              </div>
            </div>
          </div>
          <div className = "col-md-3 mb-3">
            <label htmlFor = "validationTooltip03">Phone</label>
            <input type = "tel" className = "form-control" id = "validationTooltip03" placeholder = "Phone" value={dataForm.phone}  required onChange={(e) => setDataForm({...dataForm,phone: e.target.value})}/>
            <div className = "invalid-tooltip">
              Please provide a valid city.
            </div>
          </div>
        </div>
        <button className = "btn btn-primary" type = "submit">Submit form</button>
      </form>}
    </>
  );
});

Form.propTypes ={
  getFormData: PropTypes.func
}

Form.defaultProps ={
  getFormData: () => {}
}

export default Form;