const User = require('../model/user');
const express = require('express');
const router = express.Router();
// const multer = require('multer');
const fileUpload = require('express-fileupload');

// const storage = multer.memoryStorage();
// const upload = multer({ storage });

router.get("/", (req, res) => {
    res.send("Contact route is displaying data")
})

router.use(fileUpload());

router.post('/save', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/save', async(req, res) => {
    try {
        const user = await User.find();
        res.send(user);
    }
    catch(error)
    {
        res.status(500).send(error);
    }
})

router.get('/:name', async (req, res) =>{
    try{
        const user = await User.find({
            Name: req.params.name
            // _id : req.params.id
            })
        res.send(user);
    }
    catch(error){
        res.status(500).send(error);
    }
})

// router.post('/upload/:id', async (req, res) => {     
//     console.log(req);
//     try {
//         if (!req.files || Object.keys(req.files).length === 0) {
//           return res.status(400).send('No files were uploaded.');
//         }
    
//         const user = await User.findById(req.params.id);
    
//         if (!user) {
//           return res.status(404).send({ error: 'User not found' });
//         }
    
//         const image = req.files.image;
//         if (!image.mimetype.startsWith('image')) {
//             return res.status(400).send('File is not an image.');
//           }
//         user.Image.data = image.data;
//         user.Image.contentType = image.mimetype;
    
//         await user.save();
    
//         res.status(201).send(user);
//       } catch (error) {
//         res.status(400).send("error");
//       }
    
// });

module.exports = router;

// http://localhost:4111/users/save :get||post
// http://localhost:4111/users/John Doe/653a0d000b40661d197a8a8a
