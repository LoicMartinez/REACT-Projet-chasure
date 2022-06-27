function getLocalStorage(key) {
    return localStorage.getItem(key)
}

function setLocalStorage(key, value) {
    if (key && value) {
        window.localStorage.setItem(key, value);
    } else {
        throw new Error("key or value not valid to set local storage")
    }
}

function delLocalStorage(key) {
    if (typeof key === 'string') {
        localStorage.removeItem(key)
    }
}

export {
    getLocalStorage,
    setLocalStorage,
    delLocalStorage
}