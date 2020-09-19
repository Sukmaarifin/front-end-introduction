
export const handleLogout = () => {
    localStorage.removeItem('authData');
}

export const handleLogin = (data: any) => {
    localStorage.setItem('authData', JSON.stringify(data));
}

export const checkAuthData = () => {
    const authData =JSON.parse(localStorage['authData'] || '{}');
    return authData;
}