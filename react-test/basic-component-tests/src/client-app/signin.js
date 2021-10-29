import React from 'react'
import {connect} from 'react-redux'
import * as actions from './redux/actions'


const SignIn=props=>{
  return <div>
    <h2>SignIn to Application</h2>
  </div>
}

export default connect(null, actions)(SignIn)
