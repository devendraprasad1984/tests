import {config, notifyMe} from "../common/config";

const signup_validation = (meta, pwdRuleCounter) => {
    console.log('signup meta', meta)
    const {email, password, confirmPassword} = config.labels

    if (config.email_reg.test(meta[email.key]) === false) {
        notifyMe(config.app_messages.incorrect_email)
        return false
    }

    let checkPwdRules = Object.values(pwdRuleCounter).filter(x => x === true)
    if (checkPwdRules.length !== config.PWD_RULE.length || meta[password.key] === '') {
        notifyMe(config.app_messages.password_complexity_not_matched)
        return false
    }

    if (meta[confirmPassword.key] !== meta[password.key]) {
        notifyMe(config.app_messages.pwd_confirm_not_ok)
        return false
    }
    return true
}

export default signup_validation
