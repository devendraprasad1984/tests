//local definition for user model as per DB
//this will tell mongoose ORM to have it mapped to mongo DB
const mongoose=require('mongoose')
const schema=mongoose.Schema


//define our model
const userSchema=new schema({
    email: {
        type: schema.Types.String,
        unique: true,
        lowercase: true
    },
    password: schema.Types.String
})

//create the model class and export
const userModelClass=mongoose.model('user', userSchema)
module.exports=userModelClass
