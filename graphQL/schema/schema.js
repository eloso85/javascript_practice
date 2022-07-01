const  { profile }  = require('../sampleData.js');

const {GraphQLObjectType, GraphQLBoolean ,GraphQLInt ,GraphQLID, GraphQLString, GraphQLSchema } = require('graphql')

const ProfileType = new GraphQLObjectType({
    name:'Profile',
    fields:()=>({
        //scalar
        id: { type: GraphQLID },
        index: { type: GraphQLInt },
        guid:{ type: GraphQLString },
        isActive: { type: GraphQLBoolean },
        balance: { type: GraphQLString },
        picture: { type: GraphQLString },
        age: { type: GraphQLInt },
        eyecolor: { type: GraphQLString },
        name: { type: GraphQLString },
        gender: { type: GraphQLString },
        company: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        address: { type: GraphQLString },
        about: { type: GraphQLString },

        })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        profile:{
            type: ProfileType,
            args:{ id: {type: GraphQLID} },
            resolve(parent, args){
                return profile.find(profile => profile.id === args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})