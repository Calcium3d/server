import prisma from '../../prisma/prisma.js'

const Query = {
    Patient: (parent, args) => {
        return prisma.patient.findMany({
            where: {
                patient_id: args.patient_id
            },
        })
    },
}

export default Query