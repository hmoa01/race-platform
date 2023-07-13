const RaceModel = require('../../models/raceModel');

const addRaceControllers = (req, res,next) => {
       
    const { role, ...thisUser} = req.locals;
    const reqBody = req.body;

    if(role !== 'superadmin' ){
        throw new Error('You are not authorized to add a race');
    } else {
        RaceModel.create(reqBody)
        .then((race) =>{
            console.log('Created race', race);
            res.send(race)
        })
        .catch((error) => {
            return next(error);
    })

    }





    // console.log("role",role);
    // console.log("thisUser",thisUser);
   
    // console.log(req.body);
    // res.send('addRaceControllers')
}


module.exports = addRaceControllers