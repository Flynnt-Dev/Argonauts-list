const router = require('express').Router();
const Argonaut = require('../models/argonaut.model');

/**
 *  READ ALL - Get request (all argonauts from data) 
 */

router.route('/').get((req, res)=> {
    Argonaut.find()
        .then(argonauts => res.json(argonauts))
        .catch(err => res.status(400).json('Error 400: '+err));
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
            console.log({argonautName} + ' is already in the list.');
            return res.status(400).json({
                errorMessage:'This Argonaut is already in the list! Jason, please choose another Argonaut.'
            });
        }

        const newArgonaut = new Argonaut({argonautName, argonautTags});

        newArgonaut.save()
            .catch((err)=> res.status(400).json('Error 400: '+err))
            .finally(console.log('New argonaut added!'));

    }catch(err){
        console.log(err);
        res.status(400).json('Error 400: '+err);
    }
});

/**
 *  DELETE Argonaut - Delete One by Id
 */

router.route('/:id').delete((req, res)=>{
    Argonaut.findById(req.params.id)
        .catch((err)=> res.status(400).json( 'Error 400: '+err))
        .finally(res.json('Argonaut '+ req.params.id +' deleted.'))
})


module.exports = router;
