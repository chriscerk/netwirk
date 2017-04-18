export interface IEdge {
    id: number;
    source: number;
    target: number;
    weight: number;
    name: string;
    description: string;
}

export interface INode {
    id: number;
    weight: number;
    name: string;
    description: string;
}

export interface IPost {
    artist_genres: string[];
    artist_name: string;
    tag: string;
    comment_count: number;
    score: number;
    artist_release: string;
    key: string;
}

export class IMediaPost implements IPost {
    artist_genres: string[];
    artist_name: string;
    tag: string;
    comment_count: number;
    score: number;
    artist_release: string;
    key: string;
    media_type: string;
    media_embed: string;
    thumbnail: string;
}

export interface IGenreData {
    genre_name: string;
    popularity: number;
}
