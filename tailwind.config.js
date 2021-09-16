module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'overpass': ['Overpass', "sans-serif"],
        'ubuntu': ['Ubuntu', "sans-serif"]
      },
      colors:{
        primary: {
          100:"hsl(356, 100%, 66%)",
          200:"hsl(355, 100%, 74%)",
          300:"hsl(208, 49%, 24%)"
        },
        secondary:{
          100:"hsl(0, 0%, 100%)",
          200:"hsl(240, 2%, 79%)",
          300:"hsl(207, 13%, 34%)",
          400:"hsl(240, 10%, 16%)"
        },
        gradients:{
          100:"hsl(13, 100%, 72%)",
          200:"hsl(353, 100%, 62%)",
          300:"hsl(237, 17%, 21%)",
          400:"hsl(237, 23%, 32%)"
        }
      },
      backgroundImage: {
        'intro-pattern': "url('images/bg-pattern-intro.svg')",
        'circles-pattern': "url('images/bg-pattern-circles.svg')"
      },
      borderRadius: {
        "5R":"5rem"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
