import { resolve } from 'path';
import { defineWindiSetup } from '@slidev/types';
import colors from 'windicss/colors';

export default defineWindiSetup(() => ({
  extract: {
    include: [resolve(__dirname, '../**/*.{vue,ts}')],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: '"Noto Sans KR", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        mono: '"Space Mono", monospace',
      },
      colors: {
        light: colors.light,
        dark: colors.dark,
        red: {
          50: '#FFEBEB',
          100: '#FFD6D6',
          200: '#FFADAD',
          300: '#FF8585',
          400: '#FF5C5C',
          500: '#FF3333',
          600: '#F50000',
          700: '#B80000',
          800: '#7A0000',
          900: '#3D0000',
        },
        yellow: {
          50: '#FFFEF5',
          100: '#FFFDE0',
          200: '#FFFBBD',
          300: '#FFF899',
          400: '#FFF570',
          500: '#FFF333',
          600: '#EBDB00',
          700: '#CCBE00',
          800: '#ADA200',
          900: '#807700',
        },
        green: {
          50: '#F9FFF5',
          100: '#ECFFE0',
          200: '#DCFFC7',
          300: '#C6FFA3',
          400: '#A7FF70',
          500: '#81FF33',
          600: '#5AEB00',
          700: '#4ECC00',
          800: '#42AD00',
          900: '#2F7A00',
        },
        cyan: {
          50: '#F5FFFD',
          100: '#E5FFFA',
          200: '#CCFFF5',
          300: '#A8FFEE',
          400: '#80FFE5',
          500: '#33FFD6',
          600: '#00EBBC',
          700: '#00CCA3',
          800: '#00AD8B',
          900: '#007A62',
        },
        lightblue: {
          50: '#F0F6FF',
          100: '#E5F0FF',
          200: '#C7DDFF',
          300: '#9EC5FF',
          400: '#75ACFF',
          500: '#3385FF',
          600: '#1A75FF',
          700: '#0062F5',
          800: '#0050C7',
          900: '#00398F',
        },
        blue: {
          50: '#F5F5FF',
          100: '#E5E7FF',
          200: '#CCCFFF',
          300: '#A8AEFF',
          400: '#8088FF',
          500: '#3341FF',
          600: '#1A29FF',
          700: '#0010F5',
          800: '#000ED1',
          900: '#00098A',
        },
      },
    },
  },
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
}));
