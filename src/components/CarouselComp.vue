<template>
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div v-for="(producto, index) in productos" :key="index">
                <div class="carousel-item" :class="{active: index == 0}">
                    <img :src="producto.image_url" class="d-block w-100" alt="...">
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'CarouselComp',
    props: {
        productos: {
            type: Array,
            required: true
        }
    },
    data: function () {
        return {}
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

<style scoped lang="scss">
img{
    object-fit: contain;
    height: 50vh;
}
</style>