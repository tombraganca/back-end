export interface ICreateAdDTO {
    gameId: string;
    name: string;
    discord: string;
    weekDays: string;
    yearsPlaying: number;
    hourStart: number;
    hourEnd: number;
    useVoiceChannel: boolean;
}