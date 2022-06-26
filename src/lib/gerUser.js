import User from "../models/userModel";
import {getLocalStorage} from "./localStorage";

function getCurrentUser() {
    let user = null

    const localStorageResult = getLocalStorage('user')

    if (localStorageResult !== '') {
        return User()
    }

    new User(JSON.parse(localStorageResult))

    return
}
