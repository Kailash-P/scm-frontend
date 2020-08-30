import { API } from "../../../baseComponents/helper/backendConfig"

export const signUp = user => {
    return fetch(`${API}/signUp`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const signIn = user => {
    return fetch(`${API}/signIn`, {
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const signOut = next => {
    if(typeof window !== "undefined") {
        localStorage.removeItem("authToken");
    }

    return fetch(`${API}/signOut`, {
        method : "GET"
    })
    .then(response => {
        console.log("Signed out successfully !!!");
    })
    .catch(err => console.log(err));
};

export const authenticate = (data, next) => {
    if(typeof window !== "undefined") {
        localStorage.setItem("authToken", JSON.stringify(data));
        next();
    }
};

export const isAuthenticated = () => {
    if(typeof window == "undefined") {
        return false;
    }
    if(localStorage.getItem("authToken")){
        return JSON.parse(localStorage.getItem("authToken"));
    } else {
        return false;
    }
};