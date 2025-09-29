/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        varBlack: "#000000",
        varWhite: "#ffffff",
        textGray: "#374151",
        naqibBlue: "#1C58DD",
        naqibRed: "#DC2626",
        buttonColor: "#16a34a",
        bgInputColor: "#F0FDF4",
        inputRing: "#93c5fd",

        dashboarLayoutBg: "#4b5563",
        bgDashboard: "#E4EAF0",
        dashboardMinueBar: "#FBFBFB",
        dashboardMinue: "#F8FAFD",
        dashboardMinueOnHover: "#cedbf4",
        naveBarHoverText: "#d1d5db",
        bgNaveBarHover: "#f8fafc",

        minueBarHaver: "#d4d9e8",

        bgTableHeader: "#EDF9FD",
        tableOddBg: "#65d3ecdd",
        tableEvenBg: "#307180dd",
        tableText: "#172554",
        tableBorder: "#9ca3af",

        popupText: "#1f2937",



        formInputBg: "#f0fdf4",
        formInputBorder: "#4ade80",
        formSelectBg: "#f3e8ff",
        formSelectHover: "#e9d5ff"
      },

      // 📌 مقادیر سفارشی برای اعداد و ابعاد
      spacing: {
        base: "10px",   // فاصله پایه
        lgGap: "32px",  // فاصله بزرگ
      },
      borderRadius: {
        card: "12px",   // گوشه گرد کارت
      },
      fontSize: {
        baseFont: "16px",
      },

      width: {
        container: "1200px",
        sidebar: "280px",
        card: "400px",
      },
      height: {
        header: "80px",
        footer: "200px",
        card: "300px",
      },
    },

    screens: {
      sm: "230px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
