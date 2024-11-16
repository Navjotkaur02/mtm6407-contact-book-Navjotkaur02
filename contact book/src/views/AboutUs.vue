<!-- src/views/AboutUs.vue -->
<template>
  <div class="about-container">
    <h1>About Us</h1>
    <p>
      Welcome to the Contact Book application! This app allows you to easily manage your contacts, 
      including adding, editing, and deleting them. You can also search through your contacts and 
      view detailed information about each one.
    </p>
    <p>
      The goal of this app is to provide a simple and intuitive way to manage personal or professional contacts.
    </p>
    <router-link to="/" class="back-home">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style scoped>
.about-container {
  padding: 30px;
  max-width: 800px;
  margin: 50px auto;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #007bff; /* Blue header for consistency */
}

p {
  font-size: 1.2em;
  line-height: 1.8;
  color: #007bff;
}

.back-home {
  display: inline-block;
  margin-top: 25px;
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
}

.back-home:hover {
  background-color: #0056b3;
}
</style>
