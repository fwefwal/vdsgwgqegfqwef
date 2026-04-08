<script lang="ts" setup>
import Logo from "./Logo.vue";
import Icon from "./Icon.vue";

const sections = [
  {
    title: "Services",
    links: ["Bonus program", "Gift cards", "Credit and payment", "Service contracts", "Non-cash account", "Payment"]
  },
  {
    title: "Assistance to the buyer",
    links: ["Find an order", "Terms of delivery", "Exchange and return", "Guarantee", "FAQ", "Terms of use"]
  }
];
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <Logo color="white" class="logo" />
        <p>
          We are a residential interior design firm located in Portland.<br>
          Our boutique-studio offers more than
        </p>
      </div>

      <div v-for="section in sections" :key="section.title" class="footer-column">
        <h4>{{ section.title }}</h4>
        <ul>
          <li v-for="link in section.links" :key="link">{{ link }}</li>
        </ul>
      </div>

      <div class="footer-social">
        <Icon variant="twitter" />
        
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.879V14.89H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.89H13.563V21.879C18.343 21.128 22 16.991 22 12Z"/>
        </svg>

        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"/>
          <circle cx="17.5" cy="6.5" r="1.5"/>
        </svg>

        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.59 6.69C18.5 5.8 17.8 4.4 17.8 2.9H15.1V13.9C15.1 15.8 13.5 17.4 11.6 17.4C9.7 17.4 8.1 15.8 8.1 13.9C8.1 12 9.7 10.4 11.6 10.4C12 10.4 12.4 10.5 12.7 10.7V8C12.3 8 11.9 7.9 11.6 7.9C8.3 7.9 5.7 10.5 5.7 13.9C5.7 17.3 8.3 19.9 11.6 19.9C15 19.9 17.6 17.3 17.6 13.9V7.3C19 8.1 20.1 9.2 20.9 10.6H23V2.9H19.59Z"/>
        </svg>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #0a0a0a;
  color: white;
  padding: 60px 16px 40px;
}

.footer-content {
  display: grid;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.logo {
  margin-bottom: 12px;
  display: block;
}

.footer-brand p {
  opacity: 0.8;
  line-height: 1.5;
  font-size: 14px;
}

.footer-column h4 {
  font-size: 15px;
  margin-bottom: 16px;
  color: #ccc;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
}

.footer-column li {
  margin-bottom: 10px;
  opacity: 0.85;
}

.footer-content {
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 60px;
}

.footer-social {
  position: absolute;
  left: 20px;
  bottom: 0;
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  opacity: 1;
}

:global(body), body {
  margin: 0;
  padding: 0;
}

@media (min-width: 768px) {
  .footer {
    padding: 80px 40px 60px;
  }
  .footer-content {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
  .footer-social {
    justify-content: flex-end;
  }
}

@media (min-width: 1024px) {
  .footer {
    padding-left: 160px;
    padding-right: 160px;
  }
}
</style>