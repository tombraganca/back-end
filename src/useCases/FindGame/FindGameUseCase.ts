import { IGamesRepository } from "../../repositories/IGamesRepository";
import { IFindGameRequestDTO } from "./FindGameDTO";

export class FindGameUseCase {

    constructor(
        private gamesRepository: IGamesRepository
    ) { }

    async execute(data: IFindGameRequestDTO) {
        const game = await this.gamesRepository.findById(data.gameId);

        if (!game) {
            throw new Error("Game not find!");
        }

        return game;
    }

}