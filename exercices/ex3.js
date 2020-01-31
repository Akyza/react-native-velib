import { AsyncStorage } from 'react-native';

export const get = async (url) => {
    const key = encodeURIComponent(url);

    try {
        const data = await fetch(url);
        const json = await response.json();
        AsyncStorage.setItem(key, JSON.stringify(json));
        return json;
    } catch (e) {
        return JSON.parse(AsyncStorage.getItem(key));
    }
}