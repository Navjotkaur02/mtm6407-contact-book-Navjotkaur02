<!-- src/components/ContactList.vue -->
<template>
    <ul>
      <li v-for="contact in contacts" :key="contact.id">
        <router-link :to="'/contact/' + contact.id">{{ contact.firstName }} {{ contact.lastName }}</router-link>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      contacts: Array
    }
  }
  </script>
  
  <style scoped>
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin: 8px 0;
  }
  </style>
  