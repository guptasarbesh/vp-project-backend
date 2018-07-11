const express = require('express');
const router = express.Router();

//register
router.get('/register',(req,res,next)=>{
 
    res.send('REGISTER');
}
);

//Authenticate
router.get('/authenticate',(req,res,next)=>{
    res.send('AUTHENTICATE');
}
);


//Profile
router.get('/profile',(req,res,next)=>{
    res.send('Profile');
}
);
//validate
router.get('/validate',(req,res,next)=>{
    res.send('Validate');
}
);
module.exports=router;