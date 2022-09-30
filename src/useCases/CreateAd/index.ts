import { PrismaAdsRepositories } from "../../repositories/implementations/prismaAdsRepositories";
import { CreateAdController } from "./CreateAdController";
import { CreateAdUserCase } from "./CreateAdUserCase";

const prismaProvider = new PrismaAdsRepositories()

const createAdUseCase = new CreateAdUserCase(prismaProvider);

const createAdController = new CreateAdController(createAdUseCase);

export { createAdUseCase, createAdController }