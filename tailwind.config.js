/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.{html,js}"],

    theme: {
        extend: {

            backgroundImage: {
                'hero': "url('img/home.jpg')",
                'footer': "url('img/footer.jpg')",
            },

            colors: {

                primary: '#281633',
                secondary: '#7BE7FF',
                service: '#0d0b16'

            },

            zIndex: {
                '100': '100',
                '200': '200',
            }
        },


        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '7rem',
                xl: '7rem',
                '2xl': '9rem',
            },
        },
    },
    plugins: [],
}