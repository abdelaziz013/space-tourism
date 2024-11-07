export interface DestData {
    name: string;
    images: {
        png: string
    };
    description: string;
    distance: string;
    travel: string;
}
export interface CrewData {
    name: string;
    images: {
        png: string;
    };
    role: string;
    bio: string;
}
export interface TecHData {
    name: string;
    images: {
        portrait: string;
        landscape: string;
    };
    description: string;
}