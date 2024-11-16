<template>
  <div class="contact-details" v-if="contact">
    <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
    <p>Email: {{ contact.email }}</p>
    <button @click="editContact" class="edit-button">Edit</button>
    <button @click="deleteContact" class="delete-button">Delete</button>
  </div>
  <div v-else>
    <p>Contact not found.</p>
  </div>
</template>

<script>
export default {
  props: ['id'],  // Receive the id from the route
  data() {
    return {
      contact: null
    };
  },
  mounted() {
    this.loadContact();
  },
  methods: {
    loadContact() {
      const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      this.contact = contacts.find(contact => contact.id === this.id);
    },
    editContact() {
      this.$router.push(`/edit/${this.contact.id}`);  // Navigate to the edit view
    },
    deleteContact() {
      const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      const index = contacts.findIndex(contact => contact.id === this.contact.id);
      if (index !== -1) {
        contacts.splice(index, 1);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        this.$router.push('/');  // Navigate back to the home page after deletion
      }
    }
  }
};
</script>
