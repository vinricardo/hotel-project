import prismaClient from '../prisma';

class CreateHotelService {
    async execute(hotel: any){
        var newHotel = await prismaClient.hotel.create({
            data:{
                name: hotel.name,
                price: hotel.price,
                description: hotel.description,
                facilities: hotel.facilities,
                details: hotel.details
            }
        })

        if(hotel.location){
            var newLocation = await prismaClient.location.create({
                data: {
                    latitude: hotel.location.longitude,
                    longitude: hotel.location.latitude,
                    hotelId: newHotel.id
                }
            })
            return Object.assign({...newHotel, location:{...newLocation}});
        }

        return newHotel;
    }
}

export { CreateHotelService }