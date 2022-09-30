import { PrismaClient } from "@prisma/client";
import { Game } from "../../entities/Games";
import { IGamesRepository } from "../IGamesRepository";

export class PrismaGamesRepository implements IGamesRepository {
    private connection: PrismaClient;
    
    constructor() {
        this.connection = new PrismaClient({
            log: ['query']
        });
    }

    async findById(id: string): Promise<Game> {
        return await this.connection.game.findUniqueOrThrow({
            where: {
                id: id
            }
        })
    }

    async save(game: Game): Promise<void> {
        await this.connection.game.create({
            data: {
                bannerUrl: game.bannerUrl,
                title: game.title
            }
        })
    }
}