const UserModel = require('../../models/userModel');

// TODO U IZRADI
// TODO  RACES, CONTESTENTS, GOODIES, USERS



const superAdminDashboardControllers = async (req, res, next) => {

    const { userId } = req.params;
    const { role } = req.locals
    // console.log(req.locals);


    try {
        if(role !== 'superadmin') {
         throw new Error('You are not authorized to access this page')
        }
        
        let  superAdminPipeline = [
            {
              $match: {
                $expr: {
                    $and:[
    
                        {$eq: ["$_id",{ $toObjectId: userId}]},
                        {$eq:["$role", "superadmin"]}
                    ]
                }
              }
            }
      ]
 
       
        
        const superAdminData = await UserModel.aggregate(superAdminPipeline)


      
           
        


        res.send(superAdminData )



        
    } catch (error) {
        return next(error);
    }

}



module.exports = superAdminDashboardControllers;