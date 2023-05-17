export type Story = {

    headline: string;
    author: string;
    published: number;
    blurb: string;
    story: string;
    topic: string;
    id: string;
}

export enum Topics {
    NEWS = "news",
    BUSINESS = "business",
    ENTERTAINMENT = "entertainment",
    TECH = "tech",
    POLITICS = "politics",
    FINANCE = "finance",
    ECONOMICS = "economics",
    MUSIC = "music",
    WORLD = "world",
}