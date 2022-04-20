const {user} = require('../../models')

exports.addUsers = async(req,res) => {

    try {
        await user.create(req.body)

        res.send({
            status: 'success',
            message: 'Add user success'
        })
        
    } catch (error) {
        console.log(error);
    }
}