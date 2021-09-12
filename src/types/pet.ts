export interface PetData {
    id: number;
    name: string;
    species: number;
    breed: string;
    gender: number;
    age: number;
    size: number;
    castrated: boolean;
    adopted: boolean;
    images: string[];
}

export interface PetAllData {
    count: number;
    rows: PetData[];
}
