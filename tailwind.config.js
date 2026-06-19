/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Cinzel = engraved Roman caps (epic titles)
        display: ['Cinzel', 'ui-serif', 'Georgia', 'serif'],
        // Cormorant = elegant high-contrast accent (quotes, hero subtitle)
        accent: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
        // EB Garamond = literary, highly readable body
        body: ['"EB Garamond"', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        // Obsidian / nightfall base
        obsidian: {
          950: '#08060f',
          900: '#0c0a18',
          850: '#110d20',
          800: '#181227',
          700: '#231a38',
        },
        // Warm manuscript ink
        parchment: {
          DEFAULT: '#ece2cf',
          dim: '#cabd9f',
          faint: '#a89a7d',
        },
        gold: {
          DEFAULT: '#d9b25f',
          light: '#f3d99a',
          deep: '#b3893d',
        },
        arcane: '#a06bff',   // amethyst spell-glow
        arcanedeep: '#6f3fd1',
        emerald: '#3fc99a',  // mana / verdant
        ember: '#e8688a',    // rose-ember warmth
      },
      boxShadow: {
        gold: '0 0 36px -8px rgba(217,178,95,0.45)',
        arcane: '0 0 48px -10px rgba(160,107,255,0.5)',
        emberglow: '0 0 40px -10px rgba(232,104,138,0.45)',
        relic: '0 24px 60px -24px rgba(0,0,0,0.85)',
        inset: 'inset 0 1px 0 0 rgba(243,217,154,0.12)',
      },
      backgroundImage: {
        'gild': 'linear-gradient(110deg, #b3893d 0%, #f3d99a 38%, #d9b25f 55%, #f7e9c4 72%, #b3893d 100%)',
        'arcane-grad': 'linear-gradient(115deg, #a06bff 0%, #c39bff 40%, #3fc99a 100%)',
        'magic-radial':
          'radial-gradient(at 22% 28%, rgba(160,107,255,0.30) 0, transparent 52%), radial-gradient(at 80% 18%, rgba(217,178,95,0.20) 0, transparent 50%), radial-gradient(at 62% 82%, rgba(63,201,154,0.18) 0, transparent 55%)',
      },
      keyframes: {
        'gild-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-rev': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '45%': { opacity: '0.82' },
          '55%': { opacity: '0.92' },
          '70%': { opacity: '0.78' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'rune-pulse': {
          '0%, 100%': { opacity: '0.25', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.04)' },
        },
      },
      animation: {
        'gild-pan': 'gild-pan 7s ease infinite',
        'spin-slow': 'spin-slow 60s linear infinite',
        'spin-rev': 'spin-rev 90s linear infinite',
        float: 'float 6s ease-in-out infinite',
        flicker: 'flicker 5s ease-in-out infinite',
        marquee: 'marquee 42s linear infinite',
        'rune-pulse': 'rune-pulse 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
