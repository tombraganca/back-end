import { PrismaGamesRepository } from "../../repositories/implementations/prismaGamesRepositories";
import { CreateGameController } from "./CreateGameController";
import { CreateGameUseCase } from "./CreateGameUseCase";

const prismaProvider = new PrismaGamesRepository()

const createGamerUseCase = new CreateGameUseCase(prismaProvider);

const createGameController = new CreateGameController(createGamerUseCase);

export { createGameController, createGamerUseCase };