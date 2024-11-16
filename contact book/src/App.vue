<!-- src/App.vue -->
<template>
  <header>
    <nav>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About Us</router-link>
    </nav>
  </header>
  
  <router-view />

  <footer>
    <p>&copy; 2024 Contact Book App. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: "App"
}
</script>

<style scoped>
header {
  background-color: #007bff; /* Blue background for header */
  padding: 10px;
  color: white;
  text-align: center;
}

nav {
  display: flex;
  justify-content: center;
}

.nav-link {
  color: white;
  margin: 0 20px;
  text-decoration: none;
}

.nav-link:hover {
  text-decoration: underline;
}

footer {
  background-color: #007bff; /* Dark background for footer */
  color: white;
  text-align: center;
  padding: 20px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
}

footer p {
  margin: 0;
}
</style>
