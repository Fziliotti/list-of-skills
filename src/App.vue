<template>
  <div id="app">
    <header class="header-site">
      <h1>Planejamento Pessoal</h1>

    </header>
    <div class="container">
      <nav>
        <router-link to="/about">Sobre</router-link>
        <router-link to="/skills"  >Skills</router-link>
        <router-link to="/todos">Todos</router-link>
        <router-link to="/expenses">Despesas</router-link>
      </nav>

      <transition name="router-anime">
      <router-view/>
      </transition>
    </div>
    
  </div>
</template>

<script>

export default {
  name: "app"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

body {
  background-color: #eeeeee;
  font-family: "Montserrat", sans-serif;
  /* display: grid;
  grid-template-rows: auto;
  justify-items: center; */

}

body,
html {
  margin: 0;
  height: 100%;
}
#app {
  width: 100%;

}

.container{
  width: 80%;
  margin: 1rem auto;

}

.header-site{
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: #323333;
  color:lightgrey;
}

nav {
  padding: 20px 20px 20px 0;
}
nav a {
  box-sizing: border-box;
  padding: 10px;
  text-decoration: none;
  background: #323232;
  border-radius: 3px;
  color: lightgrey;
  font-weight: bold;
  margin-right: 15px;
  transition: 0.2s all linear;
  text-transform: uppercase
}

nav a:hover {
 background-color: #aaa;
 color:#323232;
 
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