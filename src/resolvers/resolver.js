import Query from './query.js'
import Mutation from './mutation.js'

const Patient = {
    id: (parent) => parent.id,
    patient: (parent) => parent.patient,
    patient_id: (parent, args) => parent.patient_id,
    blood_pressure: (parent) => parent.blood_pressure,
    oxygen_saturation: (parent) => parent.oxygen_saturation,
    pulse: (parent) => parent.pulse,
    weight: (parent) => parent.weight,
    height: (parent) => parent.height
}

const resolvers = {
    Patient,
    Query,
    Mutation,
}

export default resolvers