import { AsyncStorage } from "react-native";

async function saveItem(key, value) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
}

async function retrieveItem(key) {
  try {
    const retrievedItem = await AsyncStorage.getItem(key);
    const item = JSON.parse(retrievedItem);
    return item;
  } catch (error) { }
  return;
}

function retrieveItemwithoutasync(key) {
  try {
    const retrievedItem = AsyncStorage.getItem(key);
    const item = JSON.parse(retrievedItem);
    return item;
  } catch (error) { }
  return;
}

async function removeItem(key) {
  try {
    await AsyncStorage.removeItem(key);
    
    return true;
  } catch (error) {
    return false;
  }
}

export default { saveItem, retrieveItem, removeItem, retrieveItemwithoutasync };
