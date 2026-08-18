import AsyncStorage from "@react-native-async-storage/async-storage";

const DEVICE_KEY = "DEVICE_KEY";
export async function storeDeviceKey(key: string) {
    try {
        await AsyncStorage.setItem(DEVICE_KEY, key);
    } catch (e) {
        console.error("Erro ao salvar deviceKey");
        return;
    }
}

export async function getDeviceKey(): Promise<string | undefined> {
    try {
        const deviceKey = await AsyncStorage.getItem(DEVICE_KEY);
        if (deviceKey !== null) {
            return deviceKey
        }
    } catch (e) {
        console.error("Error ao pegar deviceKey");
    }
}