import {delLocalStorage, getLocalStorage} from "./localStorage";

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function sesseionStatus() {
    const jwt = getLocalStorage('access_token');

    if (jwt) {
        const token = parseJwt(jwt);

        if (token?.exp > (Date.now() / 1000)) {
            return JSON.parse(getLocalStorage('user'));
        } else {
            delLocalStorage('user');
            delLocalStorage('access_token');

            return null;
        }
    } else {
        return null;
    }
}

export {
    parseJwt,
    sesseionStatus
};