import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

const meta = {
  title: 'Atoms/RangeInput',
  component: 'input',
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: {},
    setup() {
      const value = ref(6);
      return { value, args };
    },
    template: `
      <div style="max-width: 400px;">
        <label style="display: block; margin-bottom: 8px; font-weight: 500;">
          Installments: {{ value }} months
        </label>
        <input 
          type="range" 
          v-model="value"
          :min="args.min" 
          :max="args.max" 
          :step="args.step"
          style="width: 100%; accent-color: black;"
        />
        <div style="display: flex; justify-content: space-between; margin-top: 4px; font-size: 14px;">
          <span>{{ args.min }} months</span>
          <span>{{ args.max }} months</span>
        </div>
      </div>
    `
  }),
  args: {
    min: 3,
    max: 12,
    step: 1,
  },
};