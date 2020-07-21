import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addEducation } from '../../actions/profile'

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldOfStudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  })

  const [toDateDisabled, toggleDisabled] = useState(false)

  const {
    school,
    degree,
    fieldOfStudy,
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
    addEducation(formData, history)
  }

  return (
    <div className='container'>
      <h1 className="large text-primary">
        Add Your Education
      </h1>
      <p className="lead">
        <i className="fas fa-graduation-cap" /> Add any school, bootcamp, etc that
        you have attended
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            value={school}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            value={degree}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Field Of Study"
            name="fieldOfStudy"
            value={fieldOfStudy}
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
            />{' '}Current School or Bootcamp
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={onChangeHandler}
            disabled={toDateDisabled}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Program Description"
            value={description}
            onChange={onChangeHandler}
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
}

export default connect(
  null,
  { addEducation }
)(AddEducation)
