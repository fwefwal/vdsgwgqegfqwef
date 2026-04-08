<script setup lang="ts">
import { ref } from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'

const props = defineProps<{
  image: string
  title: string
  price: number
  isLiked?: boolean
}>()

const liked = ref(props.isLiked || false)

const toggleLike = () => {
  liked.value = !liked.value
}
</script>

<template>
  <div class="product-card">
    <div class="image-wrapper">
      <img :src="image" :alt="title" />

      <button class="like-btn" @click.stop="toggleLike">
        <Icon 
          variant="favorites" 
          :style="{ color: liked ? '#ff2d55' : '#ffffff', filter: liked ? 'none' : 'drop-shadow(0 1px 3px rgba(0,0,0,0.6))' }"
        />
      </button>
    </div>

    <!-- Info -->
    <div class="info">
      <p class="title">{{ title }}</p>
      <div class="price">${{ price }}</div>
      
      <Button 
        label="Buy Now" 
        variant="fill" 
        color="black" 
        style="width: 100%; margin-top: 16px;"
      />
    </div>
  </div>
</template>

<style scoped>
.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
}

.image-wrapper {
  position: relative;
  height: 260px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.like-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  z-index: 2;
}

.info {
  padding: 16px 20px 20px;
}

.title {
  font-size: 15.5px;
  line-height: 1.35;
  margin: 0 0 6px 0;
  font-weight: 500;
  color: #111;
}

.price {
  font-size: 19px;
  font-weight: 700;
  color: #000;
}
</style>