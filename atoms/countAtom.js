const { atom } = require("recoil");

const counterAtom = atom({
    key:'counter-app',
    default:0
})