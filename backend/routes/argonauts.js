const router = require('express').Router();
const Argonaut = require('../models/argonaut.model');

/**
 *  READ ALL - Get request (all argonauts from data) 
 */

router.route('/').get((req, res)=> {
    Argonaut.find()
        .then(argonauts => res.json(argonauts))
        .catch(err => res.status(400).json('Error 400 :'+err));
});

/**
 *  CREATE Argonaut - Post request
 */

router.route('/add').post((req, res)=>{

    const argonautName = req.body.name;
    const argonautTags = req.body.tags;

    const existingArgonaut = Argonaut.findOne({argonautName});

    try{
        if(existingArgonaut !== null){
            console.log({argonautName}+" is already in the list.");
            return res.status(400).json({errorMessage:'This Argonaut is already in the list! Jason, please choose another Argonaut.'});
        }
        else if(argonautName.lenght < 3){
            console.log('A name cannot be less than 3 letters.');
            return res.status(400).json({errorMessage:'This is not a name. Jason, please enter a real name.'});
        }

        const newArgonaut = new Argonaut({argonautName, argonautTags});

        newArgonaut.save()
            .catch((err)=> res.status(400).json( 'Error 400: '+err))
            .finally( console.log( 'New argonaut added!'));

    }catch(err){
        console.log(err);
        res.status(400).json('Error 400 : '+err);
    }
});


/**
 *  DELETE Argonaut -
 */

