import {AxiosError} from 'axios';

export const lightenColor = (color: string, value: number): string => `${color}${value}`;

export const serviceErrorHandler = (err: AxiosError): string => {
    if (typeof err === 'string') return err;

    if (err.response?.data) {
        if ('message' in err.response?.data) {
            return err.response?.data.message;
        }
    }

    if (typeof err === 'object') {
        if (err.message) return err.message;

        if ('message' in err.response?.data) return err.response?.data.message;
    }

    return JSON.stringify(err);
};

export const getApiUrl = (): string => 'http://549137.minivps.info:5001';

export const getImageUrl = (path: string): string => `${getApiUrl()}/public/img/${path}`;

export const sleep = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));
