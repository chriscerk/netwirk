export interface Edge {
    source: number;
    target: number;
    weight: number;
    name: string;
    description: string;
}

export interface Node {
    id: number;
    weight: number;
    name: string;
    description: string;
}
