const graphql = require('graphql'); //use graphql package
const   University = require('../models/university');
const _ = require('lodash');
ObjectId = require('mongodb').ObjectID;

/*Getting GraphQLObjectType function from 'graphql' to define the (dataType) 
 structure of our queries and their model type.
*/
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObject,
  GraphQLSchema,
} = graphql;

//Defining UniversityType with its fields.
const UniversityType = new GraphQLObjectType({
  name: 'University',
  fields: () => ({
    name: { type: GraphQLString },
    image: { type: GraphQLString },
    Program: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLString },
  }),
});
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    University: {
      type: new GraphQLList(UniversityType) ,
      resolve() {
        return University.find({});
      },
 
    },
  }
    });

      
   
//exporting 'GraphQLSchema with RootQuery' for GraphqlHTTP middleware.
module.exports = new GraphQLSchema({
  query: RootQuery,
 
});