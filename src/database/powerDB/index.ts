import prisma from "../prisma";

class PowerDB {
    async saveToDB(jsonData:any) {
        await prisma.cardID.upsert({
            where: {
                cardId: jsonData.cardId
            },
            update: {},
            create: jsonData
        })
    }
}

export default new PowerDB()