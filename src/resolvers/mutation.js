import prisma from '../../prisma/prisma.js'

const Mutation = {
    register: (parent, args) => {
        return prisma.patient.create({
            data: {
                    patient: args.patient,
                    patient_id: args.patient_id,
                    blood_pressure: args.blood_pressure,
                    oxygen_saturation: args.oxygen_saturation,
                    pulse: args.pulse,
                    weight: args.weight,
                    height: args.height,
            }
        })
    }
}
export default Mutation