export const createUser = (signup)=>{
    localStorage.setItem("user", JSON.stringify(signup))
}


export const registered = ()=>{
    return JSON.parse(localStorage.getItem("user"))
}