export const PWD_RULE = [
    'min 8 characters',
    'min 1 uppercase letter',
    'min 1 lowercase',
    'min 1 special character',
    'min 1 number',
]
export const min_num_pwd = 8
export const min_other_char = 1
export const special_char_reg = new RegExp('([^!,%,&,@,#,$,^,*,?,_,~])', 'g')
export const uppercase_reg = new RegExp('[^A-Z]', 'g')
export const lowercase_reg = new RegExp('[^a-z]', 'g')
export const numeric_reg = new RegExp('[^0-9]', 'g')
export const email_reg=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
