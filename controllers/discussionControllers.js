const Discussion   = require("../models/Discussion.js");


const getalldiscussion =async (req, res) => {

    const all_discussion = await Discussion.find({});
    res.status(200).json({
        "status": "success",
        "data": all_discussion
    })
   
}

/*

request.body = {
    "heading": heading,
    "body": description,
    "creator_id": xyz
}

1. Create new discussion from request body .
3. Save heading, body, creator_id for every discussion.

Response :

1. Success

200 Code

json = 
{
    "message": 'Discussion added successfully',
    "discussion_id": discussion_id._id, //id of task that is created.
    "status": 'success'
}

2. Fail to do

404 Status Code
json = 
{
    "status": 'fail',
    "message": error message
}

*/

const creatediscussion = async (req, res) => {

    //Write your code here.
    
}

module.exports = { getalldiscussion, creatediscussion };