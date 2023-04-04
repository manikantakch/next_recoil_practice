const { atom } = require("recoil");

export const todoListState = atom({
    key:'todoListState',
    default:[]
})




export const todoListFilterState = atom({
    key:'todoListFilterState',
    default:'Show All'

})