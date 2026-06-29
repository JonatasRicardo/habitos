import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'habitos',
      values: [{ name: 'habitos', value: '#ffa24a' }],
    },
    layout: 'centered',
  },
}

export default preview
