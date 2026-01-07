module.exports = {
    content: [
      "./index.html",   
      "./*.html",       
    ],
    theme: {
      extend: {
        colors: {
          "custom-yellow": "#bdeb00",
          "dark-background": "#1e1f25",
          "dark-secondary": "#2a2b30",
        },
        fontFamily: {
          sans: ['"Open Sans"', "sans-serif"],
          roboto: ["Roboto", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  