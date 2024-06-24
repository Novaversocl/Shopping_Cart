<template>
    <div class="container mx-auto my-3 text-light">
        <div class="alert alert-info" role="alert" v-if="productCount < 1">
            Aún no has añadido juegos a tu carrito
        </div>
        <main v-else>
            <div class="py-5 text-center">
                <h2>Gracias por elegirnos</h2>
                <div class="text-body-secondary">
                    <p>Rellena tus datos en el formulario para completar tu pedido. </p>
                    <p>Ten en cuenta que los productos se enviarán a la dirección proporcionada.</p>
                    <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos. Estamos aquí para ti.</p>
                </div>
            </div>
            <div class="row g-5">
                <div class="col-md-5 col-lg-4 order-md-last">
                    <!-- Tabla de carrito -->
                    <CartTableComp />
                </div>
                <div class="col-md-7 col-lg-8">
                    <!-- Formulario de Checkout -->
                    <CheckoutFormComp @confirmOrderSubmit="confirm" />
                </div>
            </div>
        </main>
    </div>


</template>

<script>
import { mapGetters } from 'vuex'
import CartTableComp from '@/components/CartTableComp.vue'
import CheckoutFormComp from '@/components/CheckoutFormComp.vue'
export default {
    name: 'CheckoutView',
    // props: {},
    data: function () {
        return {}
    },
    computed: {
        ...mapGetters(['productCount'])
    },
    methods: {
        confirm(order) {
            // Se guarda la orden en session storage
            sessionStorage.order = JSON.stringify(order)
            this.$router.push({ name: 'confirmation', params: { orderId: order.id } })
        }
    },
    // watch: {},
    components: {
        CartTableComp,
        CheckoutFormComp
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped></style>