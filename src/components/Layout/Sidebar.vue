<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="sidebar">
    <ul>
      <li><router-link to="/">Dashboard</router-link></li>
      <li><router-link to="/calendar">Calendario</router-link></li>
      <li><router-link to="/rooms">Salas</router-link></li>
    </ul>
  </nav>
</template>
<style scoped>
.sidebar {
  width: 100%;
  background: #2c3e50;
  color: white;
  padding: 1rem;
}
@media (min-width: 768px) {
  .sidebar {
    width: 220px;
    height: 100vh;
  }
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  margin: 1rem 0;
}
a {
  color: white;
  text-decoration: none;
}
a.router-link-active {
  font-weight: bold;
}
</style>
