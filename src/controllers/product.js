// import models here
const {product, user} = require("../../models")

exports.getProduct = async (req, res) => {
  // code here
  try {
    const data = await product.findAll({
      include:{
        model: user,
        as: "user",
        attributes:{
          exclude: ['password','createdAt','updatedAt']
        }
      },
      attributes:{
        exclude: ['createdAt','updatedAt']
      }
    })

    res.send({
      status:'success',
      data
    })
    
  } catch (error) {
    console.log(error)
    res.send({
        status: 'failed',
        message: 'Server Error'
    }) 
  }
};

exports.addProduct = async (req, res) => {
  // code here
  try {

      const data = req.body
      await product.create(data)

      res.send({
          status: 'success',
          message: 'Add product success',
          data
      })
  } catch (error) {
      console.log(error)
      res.send({
          status: 'failed',
          message: 'Server Error'
      })
  }
};
