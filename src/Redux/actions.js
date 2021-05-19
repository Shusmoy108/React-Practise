export const increment = ()=>{
    console.log("action")
    return {
        type:"INCREMENT"
    }
}
export const decrement = ()=>{
    return {
        type:"DECREMENT"
    }
}