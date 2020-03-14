const mongoose = require('../db')

const UserSchema = new mongoose.Schema({
        email: {
            type: String,
            required: 'Укажите email',
            unique: true,
            validate: [{
                validator: function(val){
                    return /^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(val)
                },
                message: 'Неверный формат email'
            }]
        },
        name: String,
    }
)


const User = mongoose.model('User', UserSchema)

module.exports = User