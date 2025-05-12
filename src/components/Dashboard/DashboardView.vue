<template>
  <section>
    <h1>Dashboard</h1>
    <p>Bienvenido a la plataforma de reservas.</p>
    <FullCalendar :options="calendarOptions" />
  </section>
</template>

<script setup>
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const calendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: '',
  },
  events: [
    {
      title: 'Project Meeting',
      start: '2024-04-02T10:00:00',
    },
    {
      title: 'Client Presentation',
      start: '2024-04-09T13:00:00',
    },
  ],
};
</script>
