import { Request, Response } from "express";
import { FindGameUseCase } from "./FindGameUseCase";

export class FindGameController {
    constructor(
        private findGamesUserCase: FindGameUseCase
    ) { }

    async handle(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const game = await this.findGamesUserCase.execute({ gameId: id });
            return response.status(201).json({ game });
        } catch (err: any) {
            return response.status(400).json({
                message: err.message || 'unexpected error'
            });
        }
    }
}