const {user} = require('../../models')

exports.addUsers = async(req,res) => {

    try {
        await user.create(req.body)

        res.status(201).send({
            status: 'success',
            message: 'Add user success'
        })
        
    } catch (error) {
        console.log(error);
        res.status(401).send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}