const  { profiles }  = require('../sampleData.js');

const {GraphQLObjectType, GraphQLBoolean ,GraphQLInt ,GraphQLID, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql')

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
        profiles:{
            type: new GraphQLList(ProfileType),
            resolve(parenr, args){
                return profiles
            }
        },
        profile:{
            type: ProfileType,
            args:{ id: {type: GraphQLID} },
            resolve(parent, args){
                return profiles.find(profile => profile.id === args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})