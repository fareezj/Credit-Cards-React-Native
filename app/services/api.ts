import axios from 'axios';
import {DEFAULT_API_CONFIG} from './api-config';

export const ApiBaseSetup = () => {
  const instance = axios.create({
    baseURL: DEFAULT_API_CONFIG.url,
    timeout: DEFAULT_API_CONFIG.timeout,
    headers: {
      Authorization:
        'Bearer sk_test_51JUm5GEV8wtBYZgiCVBEDRysgy1U3GngTMKppIOxr4uCRIdDi0VFt9demarPgNJF4kVjKaMLphvIkaRB6QFhG8RT00zwNrUs4N',
      Accept: 'application/json',
    },
  });
  return instance;
};
