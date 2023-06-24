const mongoose = require('mongoose');
//const autoIncrement = require('mongoose-auto-increment')
const userSchema = mongoose.Schema({
    name:String,
    username: String,
    email: String,
    phone:String
})

// userSchema.plugin(autoIncrement.plugin, {
//     model: 'User',
//     field: '_id',
//     startAt: 1,
//     incrementBy: 1
// });

const Users= mongoose.model('Users', userSchema)
// autoIncrement.initialize(mongoose.connection);

module.exports=Users