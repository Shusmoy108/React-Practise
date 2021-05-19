import{createSlice} from '@reduxjs/toolkit'
export const restoSlice= createSlice({
    name:'resto',
    initialState:{
        name:"",
        menu:{}
    },
    reducers:{
        setResto:(state,action)=>{
            state.name= action.type.name;
            state.menu= action.type.menu;
        }
    }
});
const {setResto}= restoSlice.actions;
export const loadAsync=()=>(dispatch)=>{
    setTimeout(()=>{
        const name= "asasa",
         menu={
            "111":{id:"111", name:"sdsd",price:"1200"},
            "222":{id:"222", name:"sdsd",price:"1200"},
            "333":{id:"333", name:"sdsd",price:"1200"},
            "444":{id:"444", name:"sdsd",price:"1200"},
            "555":{id:"555", name:"sdsd",price:"1200"},
        };
        dispatch(setResto(name,menu));
    },500
    )
}
export const selectRestoName= state=> state.resto.name;
export const selectRestoMenu= state=> state.resto.menu;
export default restoSlice.reducer