<script setup lang="ts">
import { ref } from 'vue'
import Button from './Button.vue'
import Field from './Field.vue'
import Icon from './Icon.vue'

defineEmits(['back'])

const total = 1399
const selectedMethod = ref('card')
const agreeTerms = ref(true)
const subscribe = ref(false)
const installments = ref(6)
</script>

<template>
  <div class="payment-page">
    <div class="payment-header">
      <button class="back-btn" @click="$emit('back')">
        <Icon variant="arrow" style="transform: rotate(180deg);" />
        Back
      </button>
      <h1>Checkout</h1>
    </div>

    <div class="summary">
      <div class="item">
        <span>Apple iPhone 14 Pro Max 128GB Deep Purple</span>
        <span>${{ total }}</span>
      </div>
      <div class="total">
        <strong>Total</strong>
        <strong>${{ total }}</strong>
      </div>
    </div>

    <div class="section">
      <h3>Payment Method</h3>
      <div class="radio-group">
        <label class="radio-option">
          <input 
            type="radio" 
            v-model="selectedMethod" 
            value="card"
          />
          <span>Credit / Debit Card</span>
        </label>
        <label class="radio-option">
          <input 
            type="radio" 
            v-model="selectedMethod" 
            value="apple"
          />
          <span>Apple Pay</span>
        </label>
        <label class="radio-option">
          <input 
            type="radio" 
            v-model="selectedMethod" 
            value="google"
          />
          <span>Google Pay</span>
        </label>
      </div>
    </div>

    <div v-if="selectedMethod === 'card'" class="section">
      <h3>Card Details</h3>
      <Field label="Card Number" placeholder="4242 4242 4242 4242" />
      <div class="row">
        <Field label="Expiry Date" placeholder="MM / YY" style="flex: 1" />
        <Field label="CVC" placeholder="123" style="flex: 1; margin-left: 12px" />
      </div>
      <Field label="Cardholder Name" placeholder="John Doe" />
    </div>

    <!-- Installments Slider -->
    <div class="section">
      <h3>Installments (optional)</h3>
      <div class="slider-container">
        <div class="slider-values">
          <span>{{ installments }} months</span>
          <span>${{ Math.round(total / installments) }}/month</span>
        </div>
        <input 
          type="range" 
          v-model="installments" 
          min="3" 
          max="12" 
          step="1"
        />
      </div>
    </div>

    <div class="section checkboxes">
      <label class="checkbox-label">
        <input type="checkbox" v-model="agreeTerms" />
        <span>I agree to the Terms and Conditions</span>
      </label>
      
      <label class="checkbox-label">
        <input type="checkbox" v-model="subscribe" />
        <span>Subscribe to newsletter for updates and promotions</span>
      </label>
    </div>

    <Button 
      label="Pay Now" 
      variant="fill" 
      color="black" 
      style="width: 100%; margin-top: 32px; height: 56px; font-size: 17px;"
      @click="alert('Payment successful! (demo)')"
    />
  </div>
</template>

<style scoped>
.payment-page {
  max-width: 460px;
  margin: 40px auto;
  padding: 32px 24px;
  background: white;
  border-radius: 16px;
}

.payment-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
}

.back-btn {
  background: none;
  border: none;
  color: #555;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  padding: 0;
}

h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
}

h3 {
  margin: 0 0 16px 0;
  font-size: 17px;
  font-weight: 600;
  color: #222;
}

.summary {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 32px;
}

.item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 15px;
}

.total {
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 2px solid #eee;
  font-size: 18px;
}

.section {
  margin-bottom: 32px;
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  cursor: pointer;
}

.radio-option input[type="radio"] {
  accent-color: black;
  width: 18px;
  height: 18px;
}

.slider-container {
  margin-top: 12px;
}

.slider-values {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 15px;
}

input[type="range"] {
  width: 100%;
  accent-color: black;
}

.checkboxes {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 15px;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  margin-top: 3px;
  accent-color: black;
  width: 18px;
  height: 18px;
}

.row {
  display: flex;
}
</style>