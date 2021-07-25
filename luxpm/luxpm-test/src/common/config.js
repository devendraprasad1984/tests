export const config = {
    appName: 'alphametrica',
    defaultUserName: 'test@luxpmsoft.com',
    defaultPassword: 'test1234!',
    route: {
        home: {key:'/',val:'HOME'},
        login: {key: '/login',val:'LOGIN'},
        signup: {key: '/signup',val:'SIGN-UP'}
    },
    labels: {
        splashMsg: {name: 'Stay on top of your finances'},
        proceed: {name: 'Proceed'},
        signup: {name: 'Sign Up'},
        login: {name: 'Login'},
        forgot: {name: 'forgot?'},
        name: {name: 'name', placeholder: 'your name'},
        email: {name: 'email', placeholder: 'abc@gmail.com'},
        password: {
            name: 'password',
            placeholder: 'min 8 chars alphanumeric text uppercase, lower, number, special chars'
        },
        phone: {name: 'phone', placeholder: '+91 829 829 1812'},
        dob: {name: 'date of birth', placeholder: 'mm-dd-yyy'}
    }
}
