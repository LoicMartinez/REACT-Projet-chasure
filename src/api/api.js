class Client {
    async call(method, endpoint, headers, body) {
        const options = {
            method,
            credentials: 'same-origin',
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
        options.headers = headers;

        return await fetch(endpoint, options);
    }

    async login(email, password) {
        const response = await this.call(
            "POST",
            "/user/login",
            null,
            {email, password}
        )

        let body = ""

        console.log(response)
        if (response.ok) {
            body = await response.json();
        }
        console.log(body)
    }

    async getCollection() {
        const response = await this.call(
            "GET",
            "/product/collection"
        )
        console.log(response);
    }

}

export default new Client();
