import {AxiosError} from 'axios';
import {PetData} from '../types/pet';
import {serviceErrorHandler} from '../util/helpers';
import {api} from './api';

interface petServicesData {
    _getAll(): Promise<PetData[]>;
    _getOne(id: number): Promise<PetData>;
}

const _getAll = async () => {
    try {
        const {data} = await api.get('/pet');

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

export const petServices = (): petServicesData => ({
    _getAll,
    _getOne,
});
