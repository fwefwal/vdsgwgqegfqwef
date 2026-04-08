import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { ref } from 'vue';

import Slider from '@/components/Slider.vue';

const activePage = ref<number>(1)

const meta = {
  title: 'Molecules/Slider',
  component: Slider,
  
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};