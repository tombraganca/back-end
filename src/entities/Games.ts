export class Game {
    public readonly id?: string;

    public title: string;
    public bannerUrl: string

    constructor(props: Omit<Game, 'id'>, id?: string) {
        this.title = props.title;
        this.bannerUrl = props.bannerUrl;
        this.id = id;
    }
}