const UserModel = require('../../models/userModel');
const { joinRace, joinUser } = require('../../helpers/aggregationPipeline')


// TODO  CONTESTANT, GOODIES



const superAdminDashboardControllers = async (req, res) => {

    const { userId } = req.params;
    const { role } = req.locals


        if(role !== 'superadmin') {
         throw new Error('You are not authorized to access this page')
        }  
        
            const  superAdminPipeline = 
            [
                {
                  $match: {
                         $expr: {
                                   $and:
                                        [
                                        {$eq: ["$_id",{ $toObjectId: userId}]},
                                        {$eq: ["$role", "superadmin"]}
                                        ],      
                                }
                          }
                },
                { $project: { password:0 }}
            ]

        const superAdminData = await UserModel.aggregate([...superAdminPipeline,...joinRace,...joinUser])

         res.send(superAdminData )

    } 

module.exports = superAdminDashboardControllers;