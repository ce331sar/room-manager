<template>
  <FullCalendar :options="calendarOptions" />
</template>

<script setup>
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ref } from 'vue';

const calendarOptions = ref({
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth',
  events: [
    { title: 'Reunión A', date: '2025-05-15' },
    { title: 'Reservada Sala B', date: '2025-05-18' },
  ],
});
</script>

<style>
@import "@fullcalendar/common/main.css";
@import "@fullcalendar/daygrid/main.css";
</style>
