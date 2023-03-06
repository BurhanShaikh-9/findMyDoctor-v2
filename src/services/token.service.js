
const tokenService = () => {

    const userToken = (token) =>{
        localStorage.setItem("token", JSON.stringify(token));
    }
    const getToken = () =>{
        return localStorage.getItem("token");
    }
    const setUserObject = (user) =>{
        localStorage.setItem("user", JSON.stringify(user));
    }
    const getUserObject = () =>{
        return localStorage.getItem("user");
    }
    const clearToken =() =>{
        localStorage.clear();
        window.location.reload();
    }
    
    return {userToken, setUserObject, getUserObject, clearToken, getToken}
    
}

export default tokenService