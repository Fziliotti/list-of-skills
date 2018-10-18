<template>
  <div id="app">
    <header>
      <h1>Lista de skills</h1>
    </header>

    <nav>
      <router-link to="/">Home</router-link>
       <router-link to="/about">About</router-link>
    </nav>

    <transition name="router-anime">
     <router-view/>
    </transition>
    
  </div>
</template>

<script>
import Skills from "./components/Skills.vue";
export default {
  name: "app",
  components: {
    Skills
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

body {
  background-color: #eeeeee;
  font-family: "Montserrat", sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}

body,
html {
  margin: 0;
  height: 100%;
}
#app {
  width: 80%;
}

nav {
  padding: 20px 20px 20px 0;
}
nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}

.router-anime-enter-active {
  animation: coming .5s;
  animation-delay: 0.5s;
  opacity: 0;
}

.router-anime-leave-active {
  animation: going .5s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-50px);
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>