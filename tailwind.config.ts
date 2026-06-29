import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}', './.storybook/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--color-ink)',
        muted: 'var(--color-muted)',
        sunshine: 'var(--color-sunshine)',
        amber: 'var(--color-amber)',
        orange: 'var(--color-orange)',
        panel: 'var(--color-panel)',
        panelSoft: 'var(--color-panel-soft)',
        success: 'var(--color-success)',
        danger: 'var(--color-danger)',
        cyan: 'var(--color-cyan)',
        blue: 'var(--color-blue)',
        violet: 'var(--color-violet)',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      },
      borderRadius: {
        app: 'var(--radius-app)',
        panel: 'var(--radius-panel)',
        tile: 'var(--radius-tile)',
      },
      boxShadow: {
        habit: 'var(--shadow-habit)',
        lift: 'var(--shadow-lift)',
      },
    },
  },
  plugins: [],
} satisfies Config
