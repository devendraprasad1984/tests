import React from "react";
import {reduxForm, Field} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import * as actions from './redux/actions'

const SignUp = props => {
    const {handleSubmit} = props //handleSubmit is via the ReduxForm

    const onSubmit = (formProps) => {
        const {email, password} = formProps
        console.log(email, password)
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
            <label>Email</label>
            <Field name='email' type='text' component='input' autoComplete={'none'}/>
        </fieldset>
        <fieldset>
            <label>Password</label>
            <Field name='password' type='password' component='input' autoComplete={'none'}/>
        </fieldset>
        <button type='submit'>Signup</button>
    </form>
}

// export default connect(null, actions)(reduxForm({form: 'signup'})(SignUp))
export default compose(
    connect(null, actions),
    reduxForm({form: 'signup'})
)(SignUp)