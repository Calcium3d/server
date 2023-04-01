import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import resolvers from './resolvers/resolver.js'

const typeDefs = `#graphql

  type Patient {
    id: ID!
    patient: String!,
    patient_id: Int
    blood_pressure: String!,
    oxygen_saturation: Int,
    pulse: Int,
    weight: Int,
    height: Int,
  }

  type Query {
    Patient (patient_id: Int): [Patient]
  }

  type Mutation {
    register(patient_id: Int, blood_pressure: String!, patient: String!, oxygen_saturation: Int, pulse: Int, weight: Int, height: Int): Patient
  }
`


const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`)