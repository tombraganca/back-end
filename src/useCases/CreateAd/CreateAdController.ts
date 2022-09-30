import { Request, Response } from "express";
import { Game } from "../../entities/Games";
import { CreateAdUserCase } from "./CreateAdUserCase";

export class CreateAdController {
    constructor(
        private createAdUseCase: CreateAdUserCase
    ) {

    }

    static handle(request: Request, response: Response) {

        const { gameId, name, discord, weekDays, yearsPlaying, hourStart, hourEnd, useVoiceChannel } = request.body;

    }
}