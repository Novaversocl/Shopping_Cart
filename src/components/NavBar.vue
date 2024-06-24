<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand" href="#">Tiendita de juegos</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="(route, index) in routes" :key="index">
                        <router-link class="nav-link active" activeClass="active disabled" :to="route.path">{{ route.name }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    // props: {},
    data: function () {
        return {
            routes: [
                {
                    name: 'Inicio',
                    path: '/'
                },
                {
                    name:'Juegos FPS',
                    path: '/category/fps'
                },
                {
                    name: 'Juegos de Carreras',
                    path: '/category/racing'
                },
                {
                    name: 'Juegos RPG',
                    path: '/category/rpg'
                },
                {
                    name: 'Carrito',
                    path: '/cart'
                }
            ]
        }
    },
    // computed: {},
    //methods: {},
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods

    // -- End Lifecycle Methods
}
</script>

<style scoped></style>