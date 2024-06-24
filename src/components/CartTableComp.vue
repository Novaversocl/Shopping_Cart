<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Game</th>
                <th scope="col">Amount</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Total</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="game in cart" :key="game.sku">
                <td>{{ game.name }}</td>
                <td>
                    <div class="btn-group">
                        <button class="btn btn-sm btn-outline-light" v-if="editableCount" @click="add(game)"><i
                                class="bi bi-plus-lg"></i></button>
                        <button class="btn btn-sm btn-outline-light" disabled>{{ game.quantity }}</button>
                        <button class="btn btn-sm btn-outline-light" v-if="editableCount" @click="remove(game)"><i
                                class="bi bi-dash"></i></button>
                    </div>
                </td>
                <td>{{ game.price }}</td>
                <td>{{ game.total }}</td>
            </tr>
            <tr>
                <th class="text-end" colspan="3" scope="row">Total (USD)</th>
                <td><strong>${{ cartTotalPrice }}</strong></td>
            </tr>
        </tbody>
    </table>

    <!-- Crear pedido -->
    <div class="d-flex justify-content-between">
        <form class="p-2" v-if="editableCount" @submit.prevent="createOrder">
            <button class="btn btn-success" type="submit">Crear Pedido</button>
        </form>
        <button class="btn btn-danger btn-sm" @click="vaciarCarrito">Vaciar Carrito</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
    name: 'component-name',
    props: {
        editableCount: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data: function () {
        return {}
    },
    computed: {
        ...mapState(['cart']),
        ...mapGetters(['productCount', 'cartTotalPrice'])
    },
    methods: {
        ...mapActions(['addQuantityToProduct', 'removeQuantityFromProduct', 'emptyCart']),
        add(game) {
            try {
                this.addQuantityToProduct(game)
            } catch (error) {
                alert(error.message)
            }
        },
        remove(game) {
            try {
                this.removeQuantityFromProduct(game)
            } catch (error) {
                alert(error.message)
            }
        },
        createOrder() {
            this.$router.push('/checkout')
        },
        vaciarCarrito() {
            this.emptyCart();
        }
    }
}
</script>

<style scoped></style>