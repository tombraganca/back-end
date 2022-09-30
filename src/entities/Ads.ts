
export class Ads {
    public readonly id?: string;
    public readonly gameId: string;

    public name: string;
    public yearsPlaying: number;
    public discord: string;
    public weekDays: string;
    public hourStart: number;
    public hourEnd: number;
    public useVoiceChannel: boolean;
    public createdAt?: Date;

    constructor(props: Omit<Ads, 'id createdAt'>, id?: string, createdAt?: Date) {

        this.gameId = props.gameId;
        this.name = props.name;
        this.yearsPlaying = props.yearsPlaying;
        this.discord = props.discord;

        this.hourStart = props.hourStart;
        this.hourEnd = props.hourEnd;
        this.useVoiceChannel = props.useVoiceChannel;

        this.weekDays = props.weekDays;
        if (!createdAt) {
            this.createdAt = new Date();
        } else {
            this.createdAt = createdAt;
        }
    }
}