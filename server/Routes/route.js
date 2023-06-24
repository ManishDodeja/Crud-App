const express= require('express')
const {addUser, getUsers, getSingleUser,editSingleUser, deleteUser}= require('../Controller/User-Controller')
const router = express.Router()

//api 
router.post('/addUser', addUser)
router.get('/', (req, res)=>{
    res.send('server is running')
})
router.get('/allUsers', getUsers)
router.get('/:id', getSingleUser)
router.post('/:id', editSingleUser)
router.delete('/:id', deleteUser)

module.exports=router;