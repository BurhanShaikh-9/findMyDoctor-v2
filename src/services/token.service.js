
const tokenService = () => {

    const userToken = (token) => {
        localStorage.setItem("token", JSON.stringify(token));
    }
    const getToken = () => {
        const getToken =  localStorage.getItem("token");
        return getToken
    }

    const setUserObject = (data) => {
        localStorage.setItem("data", JSON.stringify(data));

    }

    const getStorageData = () => {
        const savedDataString = localStorage.getItem("data");
        const savedData = JSON.parse(savedDataString);
        return savedData;
    }


    const clearToken = () => {
        localStorage.clear();
        window.location.reload();
    }

    return { userToken, setUserObject, getStorageData, clearToken, getToken }

}

export default tokenService