import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addExperience } from '../../actions/profile'

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  })

  const [toDateDisabled, toggleDisabled] = useState(false)

  const {
    company,
    title,
    location,
    from,
    to,
    current,
    description
  } = formData

  const onChangeHandler = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })

  const onSubmitHandler = e => {
    e.preventDefault()
    addExperience(formData, history)
  }

  return (
    <div className='container'>
      <h1 className="large text-primary">
        Add An Experience
      </h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Job Title"
            name="title"
            value={title}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Company"
            name="company"
            value={company}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input
            type="date"
            name="from"
            value={from}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              value={current}
              checked={current}
              onChange={() => {
                setFormData({
                  ...formData,
                  current: !current
                })
                toggleDisabled(!toDateDisabled)
              }}
            />{' '}Current Job
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            disabled={toDateDisabled}
            value={to}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            value={description}
            onChange={onChangeHandler}
            cols="30"
            rows="5"
            placeholder="Job Description"
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary my-1"
        />
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
    </div>
  )
}

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
}

export default connect(
  null,
  { addExperience }
)(withRouter(AddExperience))
