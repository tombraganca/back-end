import { Request, Response } from "express";
import { PrismaGamesRepository } from "../../repositories/implementations/prismaGamesRepositories";
import { FindGameUseCase } from "../FindGame/FindGameUseCase";
import { ICreateAdDTO } from "./CreateAdDTO";
import { CreateAdUserCase } from "./CreateAdUserCase";

export class CreateAdController {
    constructor(
        private createAdUseCase: CreateAdUserCase
    ) { }

    async handle(request: Request, response: Response) {
        const data: ICreateAdDTO = request.body;
        const { id } = request.params;
        data.gameId = id;

        try {
            if (!id) {
                throw new Error("GameId not informed!");
            }

            const gameRepository = new PrismaGamesRepository();
            const findGameUserCase = new FindGameUseCase(gameRepository);
            const game = findGameUserCase.execute(data);

            if (!game) {
                throw new Error("The game of this ad not exist!");
            }

            this.createAdUseCase.execute(data);
            return response.status(201).json({ message: 'Create successfully' });
        } catch (err: any) {
            return response.status(400).json({
                message: err.message || 'unexpected error'
            });
        }
    }
}