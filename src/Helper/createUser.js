export const createUser = (signup)=>{
    localStorage.setItem("user", JSON.stringify(signup))
}


export const registered = ()=>{
    const userData = JSON.parse(localStorage.getItem("user"))
    return userData;
}