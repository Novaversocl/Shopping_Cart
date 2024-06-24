<template>
    <div class="container d-flex w-100 h-100 mt-5 p-3 flex-column text-center">
        <main>
            <h1>¡Tu pedido ha sido confirmado!</h1>
            <p class="lead"><small class="text-body-secondary">Id de tu pedido:</small>{{ orderId }}</p>
            <p class="lead">En este momento se encuentra siendo preparado por nuestro equipo.</p>
            <p class="lead">
                <a class="btn btn-lg btn-outline-light fw-bold" @click="goBack">Volver al inicio</a>
            </p>
        </main>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'ConfirmationView',
    props: {
        orderId: {
            type: String,
            required: true
        }
    },
    data: function () {
        return {}
    },
    // computed: {},
    methods: {
        ...mapActions(['emptyCart']),
        goBack() {
            sessionStorage.removeItem('order')
            this.$router.push('/')
        }
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        this.emptyCart()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped></style>