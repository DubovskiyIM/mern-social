import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert'
import PropTypes from 'prop-types'

const Register = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} = formData

  const inputChangeHandler = (e) => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })

  const formSubmitHandler = async (e) => {
    e.preventDefault()
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger')
    } else {
      console.log('SUCCESS')
    }
  }

  return (
    <div className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user" /> Create Your Account</p>
      <form className="form" action="create-profile.html" onSubmit={formSubmitHandler}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={inputChangeHandler}
            required
          />
          <small className="form-text"
          >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={inputChangeHandler}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register"/>
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  )
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired
}

export default connect(
  null,
  {setAlert}
  )(Register)