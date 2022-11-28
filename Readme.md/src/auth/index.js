//is Logged in

export const isLoggedIn=()=>{
    let data = localStorage.getItem("data");
    // console.log(data)
    if(data==null){
        return false;
    }
    else{
        return true;
    }
};


//Login data set to local Storage

export const doLogin=(data,next)=>{
    localStorage.setItem("data",JSON.stringify(data));
    next()
};



//logout remove from datastorage


export const doLogOut=(next)=>{
    localStorage.removeItem("data");
    next()
}


//get current user


export const getCurrentUserDetail=()=>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("login"));
    }
    else{
        return undefined;
    }
}



export const getToken=()=>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data")).jwtToken
    }
    else{
        return null;
    }
}