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
             await prismaClient.location.create({
                data: {
                    latitude: hotel.location.longitude,
                    longitude: hotel.location.latitude,
                    hotelId: newHotel.id
                }
            })
        }

        if(hotel.pictures){
            hotel.pictures.forEach(async picture => {
                picture.hotelId = newHotel.id
                picture.url = `../pictures/${picture.hotelId}/${picture.fileName}`
                await prismaClient.picture.create({
                    data: {
                        url: picture.url,
                        hotelId: picture.hotelId,
                        profile: picture.profile || false
                    }
                })
            });
        }

        return newHotel;
    }
}

export { CreateHotelService }