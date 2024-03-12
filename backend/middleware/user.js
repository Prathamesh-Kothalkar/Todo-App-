const jwt = require('jsonwebtoken');
const { JWT_PASS } = require('../config');
function userMiddleWare(req,res,next){
 const token=req.headers.authorization;
 try{
 if(token){
    const decode =jwt.verify(token,JWT_PASS)
    //console.log(decode)
    next()
 }  
 else{
    res.json({
        msg:"norkenk"
    })
 }
}
catch{
   console.log("Invalid")
   throw new Error()
}

}

module.exports = userMiddleWare;