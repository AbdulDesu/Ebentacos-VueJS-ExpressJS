import {createStore} from "vuex"
import axios from "axios"

const store = createStore({
    state() {
        return {
            allFoods: [],
            user: undefined,
            admin: undefined,
        }
    },
    mutations: {
        setFoodsData(state, payload){
            state.allFoods = payload;
        },
        setUser(state, payload){
            state.user = payload;
        },
        setAdmin(state, payload){
            state.admin = payload;
        }
    },
    actions: {
        async getFoodsData(context){
            try {
                let response = await axios.get('/foods');
                context.commit("setFoodsData", response.data.data);
            } catch (error) {
                console.error("Gagal memuat data makanan:", error);
                context.commit("setFoodsData", []);
            }
        },
    }
})

export default store;