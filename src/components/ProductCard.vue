<template>
    <div class="card mb-4 rounded-3 shadow-sm h-100">
        <img :src="product.image_url" class="card-img-top">
        <div class="card-header py-3">
            <h4 class="my-0 fw-normal">{{ product.name }} <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" v-if="count() > 0">{{ count(product) }}</span> </h4>
        </div>
        <div class="card-body">
            <h1 class="card-title pricing-card-title">${{ product.price }}</h1>
            <p>{{ product.description }}</p>
        </div>
        <div class="card-footer">
            <div class="btn-group w-50 d-flex mx-auto">
                <button type="button" class="w-100 btn btn-sm btn-outline-primary" @click="agregar"><i class="bi bi-plus"></i></button>
                <button type="button" class="w-100 btn btn-sm btn-warning" v-if="count() > 0" @click="quitar"><i class="bi bi-dash"></i></button>
                <button type="button" class="w-100 btn btn-sm btn-danger" v-if="count() > 0" @click="eliminar"><i class="bi bi-trash3"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    computed: {
        ...mapState(['cart'])
    },
    methods: {
        ...mapActions(['addToCart', 'removeQuantityFromProduct', 'removeProductFromCart']),
        agregar(){
            let productToAdd = {
                sku: this.product.sku,
                name: this.product.name,
                price: this.product.price,
                quantity: 1
            }
            this.addToCart(productToAdd)
        },
        quitar(){
            try {
                this.removeQuantityFromProduct(this.product)
            } catch (error) {
                alert(error.message)
            }
        },
        eliminar(){
            try {
                this.removeProductFromCart(this.product)
            } catch (error) {
                alert(error.message)
            }
        },
        count(){
            let found = this.cart.find((prod)=> prod.sku == this.product.sku)
            if(found){
                return found.quantity
            }
        }
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped></style>