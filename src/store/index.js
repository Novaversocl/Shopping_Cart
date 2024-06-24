import { createStore } from "vuex";
import getProducts from "@/services/productService";

export default createStore({
    state: {
        masVendidos: [],
        categorias: [],
        rpg: [],
        fps: [],
        racing: [],
        cart: [],
    },
    getters: {
      // Obtener cantidad de productos en el carrito
      productCount(state){
        return state.cart.length;
      },
      // Obtener el precio total de un producto (catidad*precio)
      cartProductTotal(state){
        return state.cart.map((product)=>{
          let newProduct = product
          newProduct.total = parseFloat(product.price * product.quantity).toFixed(2)
          return newProduct
        })
      },
      // Buscar producto por codigo SKU
      findProductBySku: (state)=>(sku)=>{
        return state.cart.find((product)=> product.sku == sku)
      },
      // Obtener precio total de la compra
      cartTotalPrice(state, getters){
        let totalPrice = getters.cartProductTotal.reduce((total, product)=>{
          return total+ Number(product.total)
        }, 0)
        return parseFloat(totalPrice).toFixed(2)
      }
    },
    mutations: {
        // Data fetching
        SET_MAS_VENDIDOS(state, juegos) {
            state.masVendidos = juegos;
        },
        SET_CATEGORIAS(state, categorias) {
            state.categorias = categorias;
        },
        SET_RPG(state, juegos) {
            state.rpg = juegos;
        },
        SET_FPS(state, juegos) {
            state.fps = juegos;
        },
        SET_RACING(state, juegos) {
            state.racing = juegos;
        },
        // Logica del carrito
        ADD_TO_CART(state, product) {
            state.cart.push(product);
        },
        ADD_QUANTITY_TO_PRODUCT(state, sku) {
            let index = state.cart.findIndex((product) => product.sku == sku);
            state.cart[index].quantity += 1;
        },
        REMOVE_QUANTITY_FROM_PRODUCT(state, sku) {
            let index = state.cart.findIndex((product) => product.sku == sku);
            state.cart[index].quantity -= 1;
        },
        REMOVE_PRODUCT_FROM_CART(state, sku) {
            let index = state.cart.findIndex((product) => product.sku == sku);
            state.cart.splice(index, 1)
        },
        EMPTY_CART(state){
          state.cart = [];
        }
    },
    actions: {
        // Logica de data fetching
        async setMasVendidos({ commit }) {
            try {
                let data = await getProducts("principal");
                commit("SET_MAS_VENDIDOS", data.principal.destacados);
            } catch (error) {
                console.log(error);
            }
        },
        async setCategorias({ commit }) {
            try {
                let data = await getProducts("principal");
                commit("SET_CATEGORIAS", data.principal.categorias);
            } catch (error) {
                console.log(error);
            }
        },
        async setRpg({ commit }) {
            try {
                let data = await getProducts("rpg");
                commit("SET_RPG", data.rpg);
            } catch (error) {
                console.log(error);
            }
        },
        async setFps({ commit }) {
            try {
                let data = await getProducts("fps");
                commit("SET_FPS", data.fps);
            } catch (error) {
                console.log(error);
            }
        },
        async setRacing({ commit }) {
            try {
                let data = await getProducts("racing");
                commit("SET_RACING", data.racing);
            } catch (error) {
                console.log(error);
            }
        },
        // Logica del carrito
        addToCart({commit, getters}, product){
          let found = getters.findProductBySku(product.sku)
          if(!found){
            commit("ADD_TO_CART", product)
          } else {
            commit('ADD_QUANTITY_TO_PRODUCT', product.sku)
          }
        },
        addQuantityToProduct({commit, getters}, product){
          let found = getters.findProductBySku(product.sku)
          if(found){
            commit('ADD_QUANTITY_TO_PRODUCT', product.sku)
          } else {
            throw 'Producto no encontrado dentro del carro.'
          }
        },
        removeQuantityFromProduct({commit, getters}, product){
          let found = getters.findProductBySku(product.sku)
          if(found){
            if(found.quantity > 1){
              commit("REMOVE_QUANTITY_FROM_PRODUCT", product.sku)
            } else {
              if(confirm('El producto será eliminado del carro. ¿Quieres seguir?')){
                commit("REMOVE_PRODUCT_FROM_CART", product.sku)
              }
            }
          } else {
            throw 'Producto no encontrado dentro del carro.'
          }
        },
        removeProductFromCart({commit, getters}, product){
          let found = getters.findProductBySku(product.sku)
          if(found){
            if(confirm('El producto será eliminado del carro. ¿Quieres seguir?')){
              commit("REMOVE_PRODUCT_FROM_CART", product.sku)
            } 
          } else {
            throw 'Producto no encontrado dentro del carro.'
          }
        },
        emptyCart({commit}){
          commit("EMPTY_CART")
        }
    },
    modules: {},
});
