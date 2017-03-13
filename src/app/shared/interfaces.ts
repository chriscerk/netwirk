export interface IEdge {
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
