<template>
    <main class="container mt-3">
        <div class="alert alert-info" role="alert" v-if="productCount < 1">
            Aún no has añadido juegos a tu carrito
        </div>
        <div v-else>
            <h1 class="d-flex justify-content-between align-items-center mb-3">
                <span >Tu compra de hoy</span>
                <span class="badge bg-primary rounded-pill">{{ productCount }} juegos</span>
            </h1>
            <!-- Tabla del carrito -->
             <CartTableComp :editableCount="true" />
        </div>
    </main>
</template>

<script>
import { mapGetters } from 'vuex'
import CartTableComp from '@/components/CartTableComp.vue'
export default {
    name: 'CartView',
    // props: {},
    data: function () {
        return {}
    },
    computed: {
        ...mapGetters(['productCount'])
    },
    //methods: {},
    // watch: {},
    components: {
        CartTableComp
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped></style>