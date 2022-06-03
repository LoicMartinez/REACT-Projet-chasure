function getLocalStorage(key) {
    const result = localStorage.getItem(key)
    console.log(key)
    console.log(result)
    if (!result) {
        return ''
    }

    return result
}

function setLocalStorage(key, value) {
    if (key && value) {
        window.localStorage.setItem(key, value);
    } else {
        throw new Error("key or value not valid to set local storage")
    }

}

export {
    getLocalStorage,
    setLocalStorage
}