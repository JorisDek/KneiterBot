const { float } = require('getenv')
const mongoose = require('mongoose')
var Float = require('mongoose-float').loadType(mongoose);


const profileSchema = new mongoose.Schema({
    userID: {
        type: String, 
        require: true,
        unique: true
    },
    serverID: {
        type: String,
        require: true
    },
    coins: {
        type: Number,
        default: 1000
    },
    bank: {
        type: Number
    },
    pp: {
        type: Float,
        default: 1.00
    },
    ggs: {
        type: Float,
        default: 100
    }

})

const model = mongoose.model('ProfileModels', profileSchema)

module.exports = model