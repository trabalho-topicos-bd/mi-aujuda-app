import axios from 'axios';
import {getApiUrl} from '../util/helpers';

export const api = axios.create({
    baseURL: getApiUrl(),
});
