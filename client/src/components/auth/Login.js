import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData

  const inputChangeHandler = (e) => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })

  const formSubmitHandler = async (e) => {
    e.preventDefault()
    console.log('SUCCESS')
  }

  return (
    <div className="container">
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user" /> Sign Into Your Account</p>
      <form className="form" action="create-profile.html" onSubmit={formSubmitHandler}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={inputChangeHandler}
            required
          />
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
        <input type="submit" className="btn btn-primary" value="Login"/>
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </div>
  )
}

export default Login
