<!-- src/views/HomeView.vue -->
<template>
  <div class="home-container">
    <h1>Contact Book</h1>
    <nav>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About Us</router-link>
    </nav>
    <input
      type="text"
      v-model="search"
      placeholder="Search contacts by name"
      class="search-input"
    />
    <button @click="goToAdd" class="add-button">Add New Contact</button>
    <ContactList :contacts="filteredContacts" />
  </div>
</template>

<script>
import ContactList from '../components/ContactList.vue'

export default {
  components: { ContactList },
  data() {
    return {
      contacts: [],
      search: ''
    }
  },
  computed: {
    filteredContacts() {
      return this.contacts
        .filter(contact =>
          `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(this.search.toLowerCase())
        )
        .sort((a, b) => a.lastName.localeCompare(b.lastName))
    }
  },
  methods: {
    loadContacts() {
      if (!localStorage.getItem('contacts')) {
        const initialContacts = [
          { id: '1', firstName: 'Alice', lastName: 'Johnson', email: 'alice.johnson@example.com' },
          { id: '2', firstName: 'Bob', lastName: 'Smith', email: 'bob.smith@example.com' },
          { id: '3', firstName: 'Carol', lastName: 'Williams', email: 'carol.williams@example.com' }
        ]
        localStorage.setItem('contacts', JSON.stringify(initialContacts))
      }
      this.contacts = JSON.parse(localStorage.getItem('contacts'))
    },
    goToAdd() {
      this.$router.push('/add')
    }
  },
  mounted() {
    this.loadContacts()
  },
  watch: {
    $route(to, from) {
      if (to.path === '/') this.loadContacts()
    }
  }
}
</script>

<style scoped>
.home-container {
  padding: 30px;
  text-align: center;
}

nav {
  margin-bottom: 20px;
}

.nav-link {
  margin-right: 15px;
  text-decoration: none;
  color: #007bff;
  font-size: 1.2em;
}

.nav-link:hover {
  text-decoration: underline;
}

.search-input {
  margin: 20px 0;
  padding: 10px;
  width: 80%;
  max-width: 400px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.add-button {
  margin: 15px 0;
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #0056b3;
}
</style>
