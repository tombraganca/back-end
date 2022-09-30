import { Game } from "../entities/Games";

export interface IGamesRepository {
    findById(id: string): Promise<Game>;
    save(game: Game): Promise<void>;
}