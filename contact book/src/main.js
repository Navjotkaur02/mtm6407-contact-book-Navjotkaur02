// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ContactView from './views/ContactView.vue'
import AddEditContact from './components/AddEditContact.vue'
import AboutUs from './views/AboutUs.vue'  // Import AboutUs.vue
import './style.css'

// Define routes for the application
const routes = [
  { path: '/', component: HomeView },
  { path: '/contact/:id', component: ContactView, props: true },
  { path: '/add', component: AddEditContact },
  { path: '/edit/:id', component: AddEditContact, props: true },
  { path: '/about', component: AboutUs }  // New About Us route
]

// Create and configure the router
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Create and mount the Vue app
createApp(App).use(router).mount('#app')
