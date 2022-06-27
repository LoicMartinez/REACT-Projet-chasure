function currentUserStatus(user, isConnected=null, isAdmin=null) {
    let result = false;

    if (isConnected !== null && user?.isConnected === isConnected) {
        result = true;
    }

    if (isConnected !== null && user?.level === 2) {
        result = true;
    }

    return result;
}

export {currentUserStatus};