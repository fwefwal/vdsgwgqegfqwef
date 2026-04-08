<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Icon from './Icon.vue'

const props = defineProps<{
  slides: Array<{
    image: string
    title: string
    subtitle?: string
  }>
}>()

const current = ref(0)
const autoPlay = ref(true)
let interval: ReturnType<typeof setInterval> | null = null

const next = () => {
  current.value = (current.value + 1) % props.slides.length
}

const prev = () => {
  current.value = (current.value - 1 + props.slides.length) % props.slides.length
}

const goTo = (index: number) => {
  current.value = index
}

onMounted(() => {
  if (autoPlay.value) {
    interval = setInterval(next, 5000)
  }
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <div class="hero-slider">
    <div class="slides" :style="{ transform: `translateX(-${current * 100}%)` }">
      <div v-for="(slide, i) in props.slides" :key="i" class="slide">
        <img :src="slide.image" :alt="slide.title" />
        <div class="content">
          <h1>{{ slide.title }}</h1>
          <p v-if="slide.subtitle">{{ slide.subtitle }}</p>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <button class="arrow left" @click="prev">
      <Icon variant="arrow" />
    </button>
    <button class="arrow right" @click="next">
      <Icon variant="arrow" />
    </button>

    <!-- Dots -->
    <div class="dots">
      <button
        v-for="(s, i) in props.slides"
        :key="i"
        class="dot"
        :class="{ active: i === current }"
        @click="goTo(i)"
      />
    </div>
  </div>
</template>

<style scoped>
.hero-slider {
  position: relative;
  overflow: hidden;
  height: 520px;
  border-radius: 16px;
}

.slides {
  display: flex;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide {
  min-width: 100%;
  position: relative;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  position: absolute;
  bottom: 80px;
  left: 80px;
  color: white;
  text-shadow: 0 2px 10px rgba(0,0,0,0.4);
}

.content h1 {
  font-size: 52px;
  font-weight: 700;
  margin: 0 0 12px;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.9);
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  font-size: 20px;
}

.arrow.left { left: 30px; }
.arrow.right { right: 30px; transform: translateY(-50%) rotate(180deg); }

.dots {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,0.6);
  border: none;
  cursor: pointer;
}

.dot.active {
  background: white;
  transform: scale(1.3);
}
</style>