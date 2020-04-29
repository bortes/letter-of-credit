const TOKEN_KEY = 'lct';

const LOGIN_RESPONSE_200 = {
    apiVersion: '0.0',
    id: new Date().getTime(),
    data: {
        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IkwvQyIsImlhdCI6MTUxNjIzOTAyMn0.QHdv85k4XEvm1jvQT8bRf7yttFbgYzN56Mp2GQuncfI',
        created_at: new Date().getTime(),
        expires_in: 1800,
        refresh_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwibmFtZSI6IkwvQyIsImlhdCI6MTUxNjIzOTAyMn0.P3VhCAwLVHhIY0k7Si2NsMKIaovHHPGXWde7gV0on8Q',
        token_type: 'Bearer',
        account_id: 1
    }
};

const LOGIN_RESPONSE = {
    code: 401,
    message: 'Usuário ou senha inválidos.',
    errors: []
};

export function login(username, password) {
    return new Promise(function (resolve, reject) {
        if (/^poc$/i.test(username) && /^poc$/i.test(password)) {
            localStorage.setItem(TOKEN_KEY, JSON.stringify(LOGIN_RESPONSE_200.data));

            resolve(LOGIN_RESPONSE_200);
        } else {
            reject(LOGIN_RESPONSE);
        }
    })
}

export function logout() {
    localStorage.removeItem(TOKEN_KEY);
}

export function isAuthenticated() {
    const token = localStorage.getItem(TOKEN_KEY);

    let data = null;

    try {
        data = JSON.parse(token);
    } catch {
        return false;
    }

    if (!data || isNaN(data.expires_in)) {
        return false;
    }

    return (data.created_at + (data.expires_in * 1000)) > new Date().getTime();
}
