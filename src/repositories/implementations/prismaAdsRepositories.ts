import { PrismaClient } from "@prisma/client";
import { Ads } from "../../entities/Ads";
import { IAdsRepository } from "../IAdsReposotory";

export class PrismaAdsRepositories implements IAdsRepository {

    private connection: PrismaClient

    constructor() {
        this.connection = new PrismaClient({
            log: ['query']
        });
    }

    async findById(id: string): Promise<Ads> {
        return await this.connection.ad.findUniqueOrThrow({
            where: {
                id: id
            }
        });
    }

    async findByGameId(gameId: string) {
        return await this.connection.ad.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            where: {
                gameId
            }
        })
    }

    async save(ad: Ads): Promise<void> {
        await this.connection.ad.create({
            data: {
                gameId: ad.gameId,
                name: ad.name,
                yearsPlaying: ad.yearsPlaying,
                discord: ad.discord,
                weekDays: ad.weekDays,
                hourStart: ad.hourStart,
                hourEnd: ad.hourEnd,
                useVoiceChannel: ad.useVoiceChannel,
            }
        })
    }
}