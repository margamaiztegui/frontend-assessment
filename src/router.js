
import { createWebHistory, createRouter } from "vue-router" 
import Home from './components/Home.vue';
import FirstExcercise from './components/FirstExercise.vue';
import SecondExcercise from './components/SecondExercise.vue';

const links = [
  { path: '/', name: "Home", component: Home },
  { path: '/first-exercise', name: "First Exercise", component: FirstExcercise },
  { path: '/second-exercise', name: "Second Exercise", component: SecondExcercise }
];

const router = createRouter({   
  history: createWebHistory(),  
   routes: links, 
  })  
  
  export default router
