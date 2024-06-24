<template>
    <main class="container">
        <h1>{{ capitalizedName }}</h1>
        <div class="row">
            <div class="col" v-for="game in games" :key="game.sku">
                <ProductCard :product="game" />
            </div>
        </div>
    </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ProductCard from '@/components/ProductCard.vue'

export default {
    name: 'CategoryView',
    props: ['name'],
    data: function () {
        return {}
    },
    computed: {
        ...mapState({
            games(state){
                return state[this.name]
            }
        }),
        capitalizedName(){
            return this.name.charAt(0).toUpperCase() + this.name.slice(1)
        },
        setActionName(){
            return `set${this.capitalizedName}`
        }
    },
    methods: {
        ...mapActions({
            setGames(dispatch){
                return dispatch(this.setActionName)
            }
        })
    },
    watch: {
        name(){
            this.setGames()
        }
    },
    components: {
        ProductCard
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    mounted(){
        this.setGames()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped></style>