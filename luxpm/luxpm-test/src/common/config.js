import labels from "./formlabels";
import routes from "./routes";
import app_messages from "./messages";
import * as constants from "./consts";
import {email_reg, min_other_char} from "./consts";

export const config = {
    appName: 'alphametrica',
    defaultUserName: 'test@luxpmsoft.com',
    defaultPassword: 'test1234!',
    route: routes,
    labels,
    app_messages,
    PWD_RULE: constants.PWD_RULE,
    min_num_pwd: constants.min_num_pwd,
    special_char_reg: constants.special_char_reg,
    uppercase_reg: constants.uppercase_reg,
    lowercase_reg: constants.lowercase_reg,
    numeric_reg: constants.numeric_reg,
    min_other_char: constants.min_other_char,
    email_reg: constants.email_reg
}


export const notifyMe = (msg, autohide = true, callback) => {
    let iserr = msg.substring(0, 1) === '?'
    let msgNotifyInstance = new window.Notify({
        title: 'notification',
        status: iserr ? 'error' : 'success',
        text: iserr ? msg.substring(1) : msg,
        position: 'right bottom',
        customIcon: '',
        customClass: '',
        autoclose: autohide
    })
    setTimeout(() => {
        if (callback !== undefined) callback()
    }, 700)
}
