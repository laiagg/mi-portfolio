<template>
    <div class="home">
      <About :info="portfolio" />
      <Projects :projects="portfolio.projects" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import About from '../components/About.vue';
  import Projects from '../components/Projects.vue';
  
  export default {
    data() {
      return {
        portfolio: {}
      };
    },
    async created() {
      const response = await axios.get("/api/portfolio");
      this.portfolio = response.data;
    },
    components: { About, Projects }
  };
  </script>
  