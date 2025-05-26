<template>
    <section class="about">
      <!-- Imagen de perfil -->
      <!-- <img 
        src="/laia-photo.jpg" 
        alt="Photo of Laia" 
        class="about__photo"g
      /> -->
  
      <!-- Nombre y descripción -->
      <h2 class="about__name">Laia</h2>
      <p class="about__description">
        Hola, me llamo Laia, y soy una apasionada del desarrollo web con experiencia.
      </p>
  
      <!-- Lista de educación -->
      <ul class="about__education">
        <li v-for="(edu, index) in education" :key="index" class="about__education-item">
          {{ edu.degree }} ({{ edu.year }})
        </li>
      </ul>
    </section>
  </template>
  
  <script>
  export default {
    name: "AboutSection",
    data() {
      return {
        education: [
          { degree: "Desarrollo de Aplicaciones Multiplataforma", year: "2023" },
          { degree: "Desarrollo de Aplicaciones Web", year: "2024" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .about {
    text-align: center;
    padding: 1.5rem;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .about__photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  
  .about__name {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .about__description {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1rem;
  }
  
  .about__education {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .about__education-item {
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
    color: #333;
  }
  </style>
  