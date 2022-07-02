const express = require('express');
const fs = require('fs');
const path = require('path');
//const test = require('../data/data.json')

const router = express.Router();

//getMethod

const getProfiles = async (req, res, next) => {
    try{
        const data = fs.readFileSync(path.join(__dirname,'../data/data.json'));
        const profiles = JSON.parse(data);
        const profile = profiles.find(profile => profile.id === Number(req.params.id));
            if(!profile){
                const err = new Error('Profile not found');
                err.status = 404;
                throw err;
            }
            res.JSON(profile);
    }catch (e){
        next(e);
    }
}

router
    .route('/api/v1/profile/:id')
    .get(getProfiles);

module.exports = router;
