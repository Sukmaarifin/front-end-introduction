
export const handleLogout = () => {
    localStorage.setItem('authData', null);
}

export const handleLogin = (data) => {
    localStorage.setItem('authData', JSON.stringify(data));
}

export const checkAuthData = () => {
    const authData =JSON.parse(localStorage['authData'] || '{}');
    return authData;
}