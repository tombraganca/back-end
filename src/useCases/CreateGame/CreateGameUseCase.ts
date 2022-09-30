import { Game } from "../../entities/Games";
import { IGamesRepository } from "../../repositories/IGamesRepository";
import { ICreateGameRequestDTO } from "./CreateGameDTO";

export class CreateGameUseCase {
    constructor(
        private gamesRepository: IGamesRepository
    ) { }

    async execute(data: ICreateGameRequestDTO) {
        const game = new Game(data);

        await this.gamesRepository.save(game);
    }
}