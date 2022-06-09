<template>
    <div class="wrapper w-10/12 m-auto relative max-w-screen-xl">
      <Header />
      <Introduction />
      <About />
      <Projects />
      <Footer />
    </div>
</template>

<script>
import Header from '@/layouts/Header.vue'
import Introduction from '@/layouts/Introduction.vue'
import About from '@/layouts/About.vue'
import Projects from '@/layouts/Projects.vue'
import Footer from '@/layouts/Footer.vue'

export default {
    name: 'Home',
    components: {
        Header,
        Introduction,
        About,
        Projects,
        Footer
    }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700&display=swap');
* {
	font-family: 'Heebo', sans-serif;
}
html {
	scroll-behavior: smooth;
}
body {
	background: #242539;
}
</style>