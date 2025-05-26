<template>
    <section class="projects">
      <h2>Proyectos</h2>
      <ul>
        <li v-for="project in projects" :key="project.name">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank">Ver proyecto</a>
        </li>
      </ul>
    </section>
  </template>
  
  <script>
  export default {
    props: ["projects"]
  };
  </script>
  