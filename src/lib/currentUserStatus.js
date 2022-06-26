function currentUserStatus(user, isConnected=false, isAdmin=false) {
    let result = false

    if (isConnected && user?.isConnected === isConnected) {
        result = true
    }

    if (isAdmin && user?.level === 2) {
        result = true
    }

    return result
}

export {currentUserStatus}