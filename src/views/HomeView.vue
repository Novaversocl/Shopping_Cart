<template>
  <main class="home container">
    <h1>Juega nuestros juegos</h1>
    <section>
      <!-- seccion 1 Carrusel con los mas vendidos -->
      <CarouselComp :productos="masVendidos" />
    </section>

    <section>
      <!-- Seccion 2 Cards con las 3 categorias -->
      <h2>Categorias</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        <div class="col" v-for="(categoria, index) in categorias" :key="index">
          <CardComp :categoria="categoria" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CarouselComp from '@/components/CarouselComp.vue'
import CardComp from '@/components/CardComp.vue'

export default {
  name: 'HomeView',
  computed: {
    ...mapState(['masVendidos', 'categorias'])
  },
  methods: {
    ...mapActions(['setMasVendidos', 'setCategorias'])
  },
  components: {
    CarouselComp,
    CardComp
  },

  // Lifecycle Hooks
  async mounted() {
    await this.setMasVendidos()
    await this.setCategorias()
  }
}
</script>
