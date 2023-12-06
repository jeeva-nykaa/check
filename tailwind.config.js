/** @type {import('tailwindcss').Config} */
const generateSpacings = (limit) => {
  const items = {};
  for (let i = 0; i <= limit; i += 2) {
    items[i.toString()] = `${i}px`;
  }
  return items;
};

const fontSizeArr = () => {
  const items = {};
  for (let i = 1; i <= 50; i += 1) {
    items[i.toString()] = `${i}px`;
  }
  return items;
};

// // Command to get widths greater than 200 & copy them to clipboard
// // rg "\W(([whxy]|m[tblrxy]?|p[tblrxy]?)-\d\d\d\d?)" -Io | rg "\d+" -Io | sort | uniq | awk '{if($1>200)print$1}' | sed '$!s/$/,/' | pbcopy

const spacing = {
  ...generateSpacings(200),
};
const negativeSpacing = {
  ...generateSpacings(50),
};

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    spacing: {
      ...spacing,
    },
    negativeSpacing: {
      ...negativeSpacing,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0px",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
      },
    },
    fontSize: {
      ...fontSizeArr(),
    },
    extend: {
      colors: {
        theme: "#6259CF",
        textColor: "#142535",
        subTextColor: "#5E6871",
        divider: "#C4C4C4",
        greyBg: "#F3F4F5",
        lightBorder: "#EAEBEC",
        lightBg: "#D9DADC",
      },
      spacing: {
        ...spacing,
        ...negativeSpacing,
      },
      width: {
        360: "360px",
        "80p": "80%",
      },
      height: {},
      padding: {},
      minHeight: {},
      minWidth: {},
      maxHeight: {},
      maxWidth: {},
      zIndex: {},
      boxShadow: {},
      inset: () => ({
        0: "0px",
        20: "20px",
        50: "50px",
        80: "80px",
        300: "300px",
      }),
    },
  },
  plugins: [],
};
