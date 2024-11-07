import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {
    private static readonly AUTH_TOKEN_KEY = '@auth_token';

    public static async setAuthToken(token: string): Promise<void> {
        try {
            await AsyncStorage.setItem(this.AUTH_TOKEN_KEY, token);
        } catch (error) {
            console.error('Error storing auth token:', error);
        }
    }

    public static async getAuthToken(): Promise<string | null> {
        try {
            return await AsyncStorage.getItem(this.AUTH_TOKEN_KEY);
        } catch (error) {
            console.error('Error getting auth token:', error);
            return null;
        }
    }

    public static async removeAuthToken(): Promise<void> {
        try {
            await AsyncStorage.removeItem(this.AUTH_TOKEN_KEY);
        } catch (error) {
            console.error('Error removing auth token:', error);
        }
    }

    public static async setData(key: string, data: any): Promise<void> {
        try {
            const jsonValue = JSON.stringify(data);
            await AsyncStorage.setItem(key, jsonValue);
        } catch (error) {
            console.error('Error storing data:', error);
        }
    }

    public static async getData(key: string): Promise<any | null> {
        try {
            const jsonValue = await AsyncStorage.getItem(key);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (error) {
            console.error('Error getting data:', error);
            return null;
        }
    }

    public static async removeData(key: string): Promise<void> {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.error('Error removing data:', error);
        }
    }
}