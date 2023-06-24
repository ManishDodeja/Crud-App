//here we will only write callbacks

const { response } = require('express');
const Users = require('../Schema/user-schema')


module.exports = {
  addUser: async (req, res) => {
    try {
      // Create a new user using the data from the request body
      const newUser = new Users(req.body);

      // Save the user to the database
      const savedUser = await newUser.save();

      // Send a response to the client indicating success
      res.json({ success: true, user: savedUser });
    } catch (err) {
      // Handle any errors that occur during the process
      console.error('Error while adding user:', err);
      res.status(500).json({ success: false, error: 'Failed to add user' });
    }
  },

  getUsers: async (req, res) => {
    try {
      // const usersList = await Users.find().select('-_id');
      const usersList = await Users.find();
      res.status(200).json(usersList)
    } catch (err) {
      res.status(404).json({ message: err.message })
    }
  }, 

  getSingleUser: async (req, res)=>{
    try{
      console.log(req.params.id);
      const singleUser = await Users.findById({_id: req.params.id})
      res.status(200).json(singleUser)
    } catch (err) {
      res.status(404).json({ message: err.message })
    }
  },

  editSingleUser:async(req, res)=>{
    let user=req.body
    const editUser = new Users(user)
    
    try{
      await Users.updateOne({_id:req.params.id},editUser)
      response.status(201).json(editUser)
    }catch(err){
      res.status(409).json({message:err.message})
    }
  },

  deleteUser:async (req, res)=>{
    try{
      await Users.deleteOne({_id: req.params.id})
      // res.status(200).json()
    }catch(err){
      res.status(409).json({message:err.message})
    }
  }
}