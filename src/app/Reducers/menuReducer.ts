import {createSlice} from "@reduxjs/toolkit";



const initialState = {
    items: [
        {
            id: 1,
            name: "Products",
            links: [
                {name: "Shoes", items: ["Adidas", "Armani", "Gucci", "Salli", "Nike"]},
                {name: "Jewelery", items: ["Gold", "Silver"]},
                {name: "Electronics", items: ["Phone", "Watches", "Power Banks"]}
            ],
            isOpen: false
        },
        {
            id: 2,
            name: "Settings",
            links: [
                {name: "Colors", items: ["Red", "Blue", "Orange"]},
                {name: "Sound", items: []},
                {name: "Language", items: ["Armenian", "English", "Russian", "French"]}
            ],
            isOpen: false
        },
        {
            id: 3,
            name: "Shops",
            links: [
                {name: "Baldi", items: ["Zenden", "Sali"]},
                {name: "Dalma", items: ["Gucci", "Nike", "Armani"]},
                {name: "Rossia Mall", items: ["Dolce Gabbana", "Puma", "Casio"]}
            ],
            isOpen: false
        },
    ]
}


const menuReducer = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setOpen(state, action) {
            state.items = state.items.map((i) => {
                if (i.id === action.payload) {
                    return {...i, isOpen: !i.isOpen}
                }
                return i;
            })
        }

    }
})

export const {setOpen} = menuReducer.actions;
export default menuReducer.reducer;