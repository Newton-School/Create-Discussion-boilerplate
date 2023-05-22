const Discussion   = require("../models/discussion.js");


const getAllDiscussion =async (req, res) => {

    const allDiscussion = await Discussion.find({});
    res.status(200).json({
        status: 'success',
        data: allDiscussion
    })
   
}

/*

request.body = {
    heading
    body
    creator_id
}

1. Create new discussion from request body .
3. Save heading, body, creator_id for every discussion.

Response :

1. Success

200 Code

json = 
{
    message: 'Discussion added successfully',
    discussion_id: discussion_id._id, //id of task that is created.
    status: 'success'
}

2. Fail to do

500 Status Code
json = 
{
    status: 'fail',
    message: error message
}

*/

const createDiscussion = async (req, res) => {

    //Write your code here.
    
}

module.exports = { getAllDiscussion, createDiscussion };