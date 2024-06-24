<template>
    <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title">{{ categoria.name }}</h5>
            <p class="card-text">{{ categoria.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComp',
    props: {
        categoria: {
            type: Object,
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

<style scoped></style>