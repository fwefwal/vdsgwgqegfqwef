<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/Header.vue'
import Slider from './components/Slider.vue'
import ProductCard from './components/ProductCard.vue'
import Footer from './components/Footer.vue'
import Payment from './components/Payment.vue'

const heroSlides = [
  {
    image: '',
    title: 'iPhone 16 Pro Max',
    subtitle: 'Titanium. All-new design.'
  },
  {
    image: '',
    title: 'Samsung Galaxy S25 Ultra',
    subtitle: 'Next level photography'
  }
]

const products = [
  {
    image: '',
    title: 'Apple iPhone 14 Pro Max 128GB Deep Purple',
    price: 1399
  },
  {
    image: '',
    title: 'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)',
    price: 1399
  },
  {
    image: '',
    title: 'Apple iPhone 14 Pro Max 128GB Deep Purple',
    price: 900
  },
  {
    // ссылок нет
    image: '',
    title: 'Apple iPhone 14 Pro Max 128GB Deep Purple',
    price: 900
  }
]

const currentPage = ref<'home' | 'payment'>('home')

const goToHome = () => {
  currentPage.value = 'home'
}

const goToPayment = () => {
  currentPage.value = 'payment'
}
</script>

<template>
  <div class="app">
    <Header 
      @logo-click="goToHome"
      @cart-click="goToPayment"
    />

    <main v-if="currentPage === 'home'">
      <div class="hero-section">
        <Slider :slides="heroSlides" />
      </div>

      <section class="products-section">
        <h2>Product Cards</h2>
        <div class="products-grid">
          <ProductCard
            v-for="(product, i) in products"
            :key="i"
            :image="product.image"
            :title="product.title"
            :price="product.price"
          />
        </div>
      </section>

      <Footer />
    </main>

    <Payment v-else @back="goToHome" />
  </div>
</template>

<style scoped>
.app {
  font-family: 'Nunito Sans', system-ui, sans-serif;
  min-height: 100vh;
  background: #fff;
}

.hero-section {
  padding: 20px 16px;
}

.products-section {
  padding: 40px 16px 60px;
}

.products-section h2 {
  font-size: 24px;
  margin-bottom: 24px;
  text-align: center;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
}

@media (min-width: 768px) {
  .hero-section, .products-section {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (min-width: 1024px) {
  .hero-section, .products-section {
    padding-left: 160px;
    padding-right: 160px;
  }
}
</style>

<!-- Слишком много микросервисов, это ужасно -->