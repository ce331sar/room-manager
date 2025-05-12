import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../components/Dashboard/DashboardView.vue';
import CalendarView from '../components/Calendar/CalendarView.vue';
import RoomsList from '../components/Rooms/RoomsList.vue';

const routes = [
  { path: '/', name: 'Dashboard', component: DashboardView },
  { path: '/calendar', name: 'Calendar', component: CalendarView },
  { path: '/rooms', name: 'Rooms', component: RoomsList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
