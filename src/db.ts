
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dhanushpappu99:dhanush123@zomatoclonebe.vligrcj.mongodb.net/paytm-be')

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        maxLength: 30,
        minLength: 3
    },
    password: {
        type: String,
        required: true,
        unique: false,
        minLength :3
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: true
    },
})

const UserModal = mongoose.model('User',UserSchema)

module.exports ={
    UserModal
}