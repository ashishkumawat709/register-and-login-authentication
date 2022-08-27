const UserModel = require('../models/user')
const bcrypt = require('bcrypt')

class usercontroller{
    static home = (req,res)=>{
        res.render('index')
    }

    static registration = (req,res)=>{
        res.render('registration')
    }

    static login = (req,res)=>{
        res.render('login')
    }  

    // static createDoc = async(req,res)=>{
    //     try {
    //         const doc = new UserModel({
    //             name:req.body.name,
    //             email:req.body.email,
    //             password:req.body.password,
    //         })
    //         const result = await doc.save()
    //         res.redirect('/login') 
    //         console.log(result);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    static createDoc = async(req,res)=>{
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        try {
            const doc = new UserModel({
                name:req.body.name,
                email:req.body.email,
                password:hashPassword,
            })
            const result = await doc.save()
            res.redirect('/login') 
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    // static verifyLogin = async(req,res)=>{
    //     try {
    //         const {email,password} = req.body;
    //         const result = await UserModel.findOne({email:email})
    //         if(result !=  null){
    //             if(result.email == email && result.password == password){
    //                 res.send(`<h1>dashboard....${result}</h1>`)
    //             }else{
    //                 res.send('<h1>invalid user login</h1>')
    //             }
    //         }else{
    //             res.send('<h1>user not registerd</h1>')
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    static verifyLogin = async(req,res)=>{
        try {
            const {email,password} = req.body;
            const result = await UserModel.findOne({email:email})
            if(result !=  null){
                const isMatch = await bcrypt.compare(password, result.password)
                if(result.email == email &&  isMatch){
                    res.send(`<h1>dashboard....${result}</h1>`)
                }else{
                    res.send('<h1>invalid user login</h1>')
                }
            }else{
                res.send('<h1>user not registerd</h1>')
            }
        } catch (error) {
            console.log(error);
        }
    }
}



module.exports= usercontroller