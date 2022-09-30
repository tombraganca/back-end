import { Ads } from "../entities/Ads";

export interface IAdsRepository {
    findById(id: string): Promise<Ads>;
    save(ad: Ads): Promise<void>;
}