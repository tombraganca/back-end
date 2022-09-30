import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const PORT = 3333;

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);
app.listen(PORT);
console.log(`Connect in port ${PORT}`);

// app.get('/games', async (request, response) => {
//     const games = await prisma.game.findMany({
//         include: {
//             _count: {
//                 select: {
//                     ads: true
//                 }
//             }
//         }
//     });
//     return response.json(games);
// })

// app.post('/games/:id/ads', async (request, response) => {
//     const gameId = request.params.id;
//     const body = request.body;

//     console.log(body.weekDays.join(','))

//     const teste = [1,2,3];
//     teste.join(',')

//     const ad = await prisma.ad.create({
//         data: {
//             gameId,
//             name: body.name,
//             yearsPlaying: body.yearsPlaying,
//             discord: body.discord,
//             weekDays: body.weekDays.join(','),
//             hourStart: convertHoursStringToMinutes(body.hourStart),
//             hourEnd: convertHoursStringToMinutes(body.hourEnd),
//             useVoiceChannel: body.useVoiceChannel,
//         }
//     })

//     return response.json({
//         ...ad,
//         hourStart: convertMinutesToHours(ad.hourStart),
//         hourEnd: convertMinutesToHours(ad.hourEnd),
//     })
// })

// app.get('/games/:id/ads', async (request, response) => {
//     console.log('teste')
//     const gameId = request.params.id;

//     const ads = await prisma.ad.findMany({
//         select: {
//             id: true,
//             name: true,
//             weekDays: true,
//             hourEnd: true,
//             hourStart: true,
//             useVoiceChannel: true,
//             yearsPlaying: true
//         },
//         orderBy: {
//             createdAt: 'desc'
//         },
//         where: {
//             gameId
//         }
//     })

//     return response.json(ads.map((ad: any) => {
//         return {

//             ...ad,
//             weekDays: ad.weekDays.split(','),
//             hourStart: convertMinutesToHours(ad.hourStart),
//             hourEnd: convertMinutesToHours(ad.hourEnd)
//         }
//     }))
// })


// app.get('/ads/:id/discord', async (request, response) => {
    //     const adId = request.params.id;
    
    //     const ad = await prisma.ad.findUniqueOrThrow({
        //         select: {
            //             discord: true
            //         },
//         where: {
    //             id: adId
    //         }
    //     })
    //     return response.json(ad)
    // })
    

