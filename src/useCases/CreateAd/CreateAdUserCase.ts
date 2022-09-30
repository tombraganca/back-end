import { Ads } from "../../entities/Ads";
import { IAdsRepository } from "../../repositories/IAdsReposotory";
import { ICreateAdDTO } from "./CreateAdDTO";

export class CreateAdUserCase {
    constructor(
        private adRepository: IAdsRepository
    ) {

    }

    async execute(data: ICreateAdDTO) {
        const ad = new Ads(data);
        
        this.adRepository.save(ad);
    }
}