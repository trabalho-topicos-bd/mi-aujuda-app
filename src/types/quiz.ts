import {FeatureData} from './feature';
import {PetData} from './pet';

export interface QuestionData {
    key: keyof FeatureData;
    title: string;
    options: string[];
}

export interface ResultsData {
    pet: PetData;
    similarity: number;
}
