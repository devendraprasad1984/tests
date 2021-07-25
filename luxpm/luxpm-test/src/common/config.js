export const config = {
    appName: 'alphametrica',
    defaultUserName: 'test@luxpmsoft.com',
    defaultPassword: 'test1234!',
    route: {
        home: {key: '/', val: 'HOME'},
        login: {key: '/login', val: 'LOGIN'},
        signup: {key: '/signup', val: 'SIGN-UP'}
    },
    labels: {
        splashMsg: {name: 'Stay on top of your finances'},
        proceed: {name: 'Proceed'},
        signup: {name: 'Sign Up'},
        login: {name: 'Login'},
        forgot: {name: 'forgot?'},
        name: {name: 'name', placeholder: 'your name',key:'_name'},
        email: {name: 'email', placeholder: 'abc@gmail.com',key:'_email'},
        password: {name: 'password', placeholder: 'min 8 chars (alphanumeric text uppercase, lower, number, special chars)',key:'_pwd'},
        confirmPassword: {name: 'confirm', placeholder: 'same as password',key:'_confirmpwd'},
        phone: {name: 'phone', placeholder: '+00 000 000 0000',key:'_phone'},
        dob: {name: 'date of birth', placeholder: 'mm-dd-yyy',key:'_dob'},
        subscribe: {name: 'subscribe', placeholder: 'email Newsletter',key:'_subscibe_news_letter'}
    }
}
