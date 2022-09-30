import { Request, Response } from "express";
import { CreateGameUseCase } from "./CreateGameUseCase";

export class CreateGameController {
    constructor(
        private createGamesUserCase: CreateGameUseCase
    ) {

    }

    async handle(request: Request, response: Response) {
        const { title, bannerUrl } = request.body;

        try {
            await this.createGamesUserCase.execute({ title, bannerUrl });
            return response.status(201).json({ message: 'Create successfully' });
        } catch (err: any) {
            return response.status(400).json({
                message: err.message || 'unexpected error'
            })
        }
    }
}