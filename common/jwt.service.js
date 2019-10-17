const TOKEN_KEY = 'token_key';
const getToken = () => {
    return window.localStorage.getItem(TOKEN_KEY);
};
const setToken = token => {
    window.localStorage.setItem(TOKEN_KEY, token);
};
const destroyToken = () => {
    window.localStorage.removeItem(TOKEN_KEY);
};

export default { getToken, setToken, destroyToken };
