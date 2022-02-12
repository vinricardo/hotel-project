import prismaClient from '../prisma';

class GetHotelsService {
    async execute(){
        const hotels = await prismaClient.hotel.findMany({
            orderBy: {
                createdAt: "desc"  
            },
            include:{
                location: true,
                reviews: true,
                pictures: true
            }
        })

        return hotels;
    }
}

export { GetHotelsService }