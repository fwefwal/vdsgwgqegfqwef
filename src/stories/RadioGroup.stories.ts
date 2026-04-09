import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

const meta = {
  title: 'Atoms/RadioGroup',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const PaymentMethods: Story = {
  render: () => ({
    setup() {
      const selected = ref('card');
      return { selected };
    },
    template: `
      <div style="max-width: 380px;">
        <div style="margin-bottom: 16px; font-weight: 600;">Payment Method</div>
        
        <label style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; cursor: pointer;">
          <input type="radio" v-model="selected" value="card" style="accent-color: black; width: 18px; height: 18px;" />
          <span>Credit / Debit Card</span>
        </label>

        <label style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; cursor: pointer;">
          <input type="radio" v-model="selected" value="apple" style="accent-color: black; width: 18px; height: 18px;" />
          <span>Apple Pay</span>
        </label>

        <label style="display: flex; align-items: center; gap: 12px; cursor: pointer;">
          <input type="radio" v-model="selected" value="google" style="accent-color: black; width: 18px; height: 18px;" />
          <span>Google Pay</span>
        </label>
      </div>
    `
  })
};