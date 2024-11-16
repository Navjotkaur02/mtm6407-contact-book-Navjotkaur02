<!-- src/components/AddEditContact.vue -->
<template>
    <div class="form-container">
      <h2>{{ isEdit ? 'Edit Contact' : 'Add New Contact' }}</h2>
      <form @submit.prevent="saveContact">
        <input v-model="contact.firstName" placeholder="First Name" required />
        <input v-model="contact.lastName" placeholder="Last Name" required />
        <input v-model="contact.email" type="email" placeholder="Email" required />
        <button type="submit">{{ isEdit ? 'Save' : 'Add' }}</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        contact: {
          id: null,
          firstName: '',
          lastName: '',
          email: ''
        }
      }
    },
    computed: {
      isEdit() {
        return !!this.id
      }
    },
    mounted() {
      if (this.isEdit) {
        this.loadContact()
      }
    },
    methods: {
      loadContact() {
        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]')
        this.contact = contacts.find(contact => contact.id === this.id) || this.contact
      },
      saveContact() {
        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]')
        if (this.isEdit) {
          const index = contacts.findIndex(contact => contact.id === this.contact.id)
          if (index !== -1) {
            contacts[index] = this.contact
          }
        } else {
          this.contact.id = Date.now().toString()
          contacts.push(this.contact)
        }
        localStorage.setItem('contacts', JSON.stringify(contacts))
        this.$router.push('/')
      }
    }
  }
  </script>
  
  <style scoped>
  .form-container {
    padding: 20px;
  }
  input {
    display: block;
    margin: 10px 0;
    padding: 8px;
    width: 100%;
  }
  button {
    padding: 8px 12px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  