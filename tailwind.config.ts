module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tangerine': {
          '50': '#fff7ed',
          '100': '#feeed6',
          '200': '#fdd8ab',
          '300': '#fbbc76',
          '400': '#f78c2e',
          '500': '#f5781a',
          '600': '#e65d10',
          '700': '#bf450f',
          '800': '#983714',
          '900': '#7a3014',
          '950': '#421608',
      },
      
        'highlight': '#43C0F6', // Azul claro
        'multicolor-start': '#FFC837', // Amarillo
        'multicolor-middle': '#41A4F5', // Azul
        'multicolor-end': '#E03C8A', // Rosa
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
      backgroundImage: (_theme: any) => ({
        'gradient-multicolor': 'linear-gradient(90deg, #FFC837, #41A4F5, #E03C8A)',
      }),
      typography: (theme: (arg0: string) => any) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.foreground'),
            '--tw-prose-headings': theme('colors.foreground'),
            '--tw-prose-links': theme('colors.foreground'),
            '--tw-prose-bold': theme('colors.foreground'),
            '--tw-prose-counters': theme('colors.foreground'),
            '--tw-prose-bullets': theme('colors.foreground'),
            '--tw-prose-hr': theme('colors.foreground'),
            '--tw-prose-quotes': theme('colors.foreground'),
            '--tw-prose-quote-borders': theme('colors.foreground'),
            '--tw-prose-captions': theme('colors.foreground'),
            '--tw-prose-code': theme('colors.foreground'),
            '--tw-prose-pre-code': theme('colors.foreground'),
            '--tw-prose-pre-bg': theme('colors.background-start'),
            '--tw-prose-th-borders': theme('colors.foreground'),
            '--tw-prose-td-borders': theme('colors.foreground'),
            '--tw-prose-invert-body': theme('colors.foreground'),
            '--tw-prose-invert-headings': theme('colors.foreground'),
            '--tw-prose-invert-links': theme('colors.foreground'),
            '--tw-prose-invert-bold': theme('colors.foreground'),
            '--tw-prose-invert-counters': theme('colors.foreground'),
            '--tw-prose-invert-bullets': theme('colors.foreground'),
            '--tw-prose-invert-hr': theme('colors.foreground'),
            '--tw-prose-invert-quotes': theme('colors.foreground'),
            '--tw-prose-invert-quote-borders': theme('colors.foreground'),
            '--tw-prose-invert-captions': theme('colors.foreground'),
            '--tw-prose-invert-code': theme('colors.foreground'),
            '--tw-prose-invert-pre-code': theme('colors.foreground'),
            '--tw-prose-invert-pre-bg': theme('colors.background-end'),
            '--tw-prose-invert-th-borders': theme('colors.foreground'),
            '--tw-prose-invert-td-borders': theme('colors.foreground'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
