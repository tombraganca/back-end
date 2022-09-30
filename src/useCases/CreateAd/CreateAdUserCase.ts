import { Ads } from "../../entities/Ads";
import { IAdsRepository } from "../../repositories/IAdsReposotory";
import { convertHoursStringToMinutes } from "../../utils/convert-hour-string-to-minutes";
import { ICreateAdDTO } from "./CreateAdDTO";

export class CreateAdUserCase {
    constructor(
        private adRepository: IAdsRepository
    ) {

    }

    async execute(data: ICreateAdDTO) {

        if (Array.isArray(data.weekDays)) {
            data.weekDays.join(',');
        } if (typeof data.hourStart === 'string') {
            data.hourStart = convertHoursStringToMinutes(data.hourStart);
        } if (typeof data.hourEnd === 'string') {
            data.hourEnd = convertHoursStringToMinutes(data.hourEnd);
        }

        const ad = new Ads(data);

        this.adRepository.save(ad);
    }
}