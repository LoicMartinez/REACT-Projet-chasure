import {getLocalStorage, setLocalStorage} from '../lib/localStorage'

class Client {
    async call(method, endpoint, headers, body) {
        const options = {
            method,
            redirect: 'manual',
        };

        headers = headers || {};

        if (['POST', 'PUT', 'PATCH'].includes(method) && body) {
            if (typeof body === 'object') {
                headers['Content-Type'] = 'application/json';
                options.body = JSON.stringify(body);
            } else {
                options.body = body;
            }
        }

        const bearer = getLocalStorage('access_token');
        if (bearer) {
            headers['Authorization'] = 'Basic ' + bearer;
        }

        options.headers = headers;
        console.log(endpoint)
        console.log(options)
        return await fetch(endpoint, options);
    }

    async login(email, password) {
        const response = await this.call(
            "POST",
            "/user/login",
            null,
            {email, password}
        );

        if (!response.ok) {
            setLocalStorage('access_token', null);
            return null;
        }

        const body = await response.json();

        setLocalStorage('access_token', body.token);

        let userProfile = await this.getProfile(body.userId);
        userProfile = JSON.stringify(userProfile);

        setLocalStorage('user', userProfile);

        return userProfile;
    }

    async getCollection() {
        const response = await this.call(
            "GET",
            "/product/collection"
        );

        if (!response.ok) {
            return null;
        }

        return await response.json();
    }

    async getProfile(userId) {
        const response = await this.call(
            "GET",
            "/user/profile",
            {userId}
        )

        if (!response.ok) {
            return null;
        }

        return await response.json();
    }

    async getProductDetail(productId) {
        const response = await this.call(
            "GET",
            `product/detail/${productId}`,
        );

        if (!response.ok) {
            return null;
        }

        return await response.json();
    }
}

export default new Client();
