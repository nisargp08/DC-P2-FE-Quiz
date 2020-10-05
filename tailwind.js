module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily : {
        'poppins' : ['Poppins','sans-serif'],
        'montserrat' : ['Montserrat','sans-serif'],
      },
      colors : {
        // Background Colors
        background : {
          primary : 'var(--bg-background-primary)',
          secondary : 'var(--bg-background-secondary)',
          ternary : 'var(--bg-background-ternary)',
        },
        // Text colors : tc
        tc : {
          primary : 'var(--text-tc-primary)',
          secondary : 'var(--text-tc-secondary)',
          ternary : 'var(--text-tc-ternary)',
        },
        //General
        'purple' : 'rgba(96, 102, 208, 0.8)',
        'yellow' : '#F9A826',
        'light-green' : '#60BF88',
        'light-red' : '#EA8282',
        'dark-blue' : '#1D355D',
      },
      borderRadius : {
        '12px' : '12px',
        '24px' : '24px'
      },
      boxShadow : {
        'yellow' : 'box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4)'
      }
    },
  },
  variants: {},
  plugins: [],
}
