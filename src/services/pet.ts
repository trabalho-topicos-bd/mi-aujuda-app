import {AxiosError} from 'axios';
import {FeatureData} from '../types/feature';
import {PetAllData, PetData} from '../types/pet';
import {ResultsData} from '../types/quiz';
import {serviceErrorHandler} from '../util/helpers';
import {api} from './api';

export type GetAllParams = {[key in keyof PetData]?: PetData[key]};

interface petServicesData {
    _getAll(params?: GetAllParams): Promise<PetAllData>;
    _getOne(id: number): Promise<PetData>;
    _getPerfect(values: FeatureData): Promise<ResultsData[]>;
}

const _getAll = async (params = {}) => {
    try {
        const {data} = await api.get('/pet', {params});

        return data;
    } catch (err) {
        console.log((err as AxiosError).toJSON());

        throw serviceErrorHandler(err as AxiosError);
    }
};

const _getOne = async (id: number) => {
    try {
        const {data} = await api.get(`/pet/${id}`);

        return data;
    } catch (err) {
        throw serviceErrorHandler(err as AxiosError);
    }
};

const _getPerfect = async (values: FeatureData): Promise<ResultsData[]> => {
    try {
        const {data} = await api.post(`/pet/find-perfect`, values);

        return data;
    } catch (err) {
        console.log((err as AxiosError).toJSON());
        throw serviceErrorHandler(err as AxiosError);
    }
};

export const petServices = (): petServicesData => ({
    _getAll,
    _getOne,
    _getPerfect,
});
