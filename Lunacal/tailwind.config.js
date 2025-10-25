export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
        boxShadow: {
        'profile-widget': '0 24px 24px rgba(248, 8, 8, 0.8)', // soft but deep shadow
      },
    },
  },
  plugins: [],
}
