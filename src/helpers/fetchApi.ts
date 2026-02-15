import qs from 'qs';
import { getStrapiURL } from './api-helper';

export const FetchApi = async (
    path: string, 
    urlParams = {},
  options = {}) => {

    try {
        const queryString = qs.stringify(urlParams, { encodeValuesOnly: true });
        const url = `${getStrapiURL(`${path}${queryString ? `?${queryString}` : ""}`)}`;
        console.log("URL:", url);
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.log("Error fetching API:", error);
    }
    
}