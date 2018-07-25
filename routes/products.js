const express = require('express');
const router = express.Router();

const config=require('../config/database');
const Product = require('../models/product');

const Cart=require('../models/cart');



router.post('/addProduct',(req,res,next)=>{
    let newProduct = new Product ({
        name: req.body.name,
        id: req.body.id,
        image: req.body.image,
        image1: req.body.image1,
        image2: req.body.image2,
        image3: req.body.image,
        price: req.body.price
      });
      newProduct.save((err,product)=>{
          if(err)
          res.send(err)
          else
          res.send(product)
      });
});

 // Profile
 router.get('/Sunglass/:id',( req, res, next) => {
    Product.findOne({id:req.params.id},(err,product)=>{
        if(err)
        res.send(err)
        else
        res.send(product)
    })
  });

  router.get('/allProduct',(req,res,next)=>{
    Product.find((err,product)=>{
        if(err)
        res.send(err)
        else
        res.send(product)
    })
  })

//   router.get('/add-to-card/:id',function(req,res,next)
// {
// var productId=req.params.id;
// var cart=new cart(req.session.cart? req.session.cart:{});


// Product.findById(productId,function(err,product){
//     if(err)
//     {
//         return res.redirect('/');
//     // res.send(err);
//     }
//     cart.add(product,product.id);
//     // req.session.cart=cart;
//     // console.log(req.session.cart);
//      res.redirect('/');
// });
// });

module.exports=router;