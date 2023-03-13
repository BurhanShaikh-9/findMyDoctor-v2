
const tokenService = () => {

    const userToken = (token) =>{
        localStorage.setItem("token", JSON.stringify(token));
    }
    const getToken = () =>{
        return localStorage.getItem("token");
    }

    const setUserObject = (user, id) =>{
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("userId",JSON.stringify(id));
    }
    const getUserName = () =>{
        return localStorage.getItem("user");
    }
    const getUserId = () =>{
        return localStorage.getItem("userId");
    }

    const clearToken =() =>{
        localStorage.clear();
        window.location.reload();
    }
    
    return {userToken, setUserObject, getUserName, clearToken, getToken, getUserId}
    
}

export default tokenService