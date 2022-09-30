import { PrismaGamesRepository } from "../../repositories/implementations/prismaGamesRepositories";
import { FindGameController } from "./FindGameController";
import { FindGameUseCase } from "./FindGameUseCase";

const prismaProvider = new PrismaGamesRepository();

const findGameUseCase = new FindGameUseCase(prismaProvider);

const findUseController = new FindGameController(findGameUseCase);

export { findUseController, findGameUseCase };