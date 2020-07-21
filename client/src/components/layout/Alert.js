import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Alert = ({ alerts }) => (
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`} style={{position: 'absolute', bottom: 0, right: 0}}>
      {alert.msg}
    </div>)
  )
)

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  alerts: state.alert
})

export default connect(mapStateToProps)(Alert)
