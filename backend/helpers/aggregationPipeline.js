module.exports = {

    
    joinRace:[{
        $lookup:{
            from: "races",
            localField: "userId",
            foreignField: "raceId",
            as: "race",

            pipeline:
               [
                 { $sort: { dateOfRace: -1} },
                 { $project: {_id:0 }}
                
               ]
        }
    },
    {$unwind: "$race"}],

    joinUser:[{
        $lookup:{
            from: "users",
            localField: "userId",
            foreignField: "userId",
            as: "user",

            pipeline:
            [
                { $sort: { role: -1}},
                { $project: {_id:0, password:0 }}
            ]


        }
    },{$unwind: "$user"}],

    joinGoodies:[{
        $lookup:{
            from: "goodies",
            localField: "userId",
            foreignField: "goodiesId",
            as: "goodies",

            pipeline:
            [
                { $sort: { quantity: -1}}
            ]
        }
    },{$unwind: "$goodies"}],

    joinContestant:[],
    
    
}
