<template>
  <section class="calendar-wrapper">
    <h1>Calendario de Reservas</h1>

    <!-- KPI Cards -->
    <div class="kpi-grid">
      <div class="kpi-card disponible">
        <h3>Salas Disponibles</h3>
        <p>{{ disponibles }}</p>
      </div>
      <div class="kpi-card reservada">
        <h3>Salas Reservadas</h3>
        <p>{{ reservadas }}</p>
      </div>
      <div class="kpi-card ocupada">
        <h3>Salas Ocupadas</h3>
        <p>{{ ocupadas }}</p>
      </div>
    </div>

    <!-- FullCalendar -->
    <FullCalendar :options="calendarOptions" class="fullcalendar" />
  </section>
</template>

<script setup>
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { computed } from 'vue';
import { useRooms } from '../../composables/useRooms';

const { rooms } = useRooms();

const disponibles = computed(() => rooms.value.filter(r => r.status === 'Disponible').length);
const reservadas = computed(() => rooms.value.filter(r => r.status === 'Reservada').length);
const ocupadas = computed(() => rooms.value.filter(r => r.status === 'Ocupada').length);

// Eventos dinámicos basados en las reservas
const roomEvents = computed(() =>
  rooms.value
    .filter(r => r.status !== 'Disponible' && r.reservationDate)
    .map(r => ({
      title: `${r.name} (${r.status})`,
      start: r.reservationDate,
    }))
);

const calendarOptions = computed(() => ({
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,dayGridWeek,dayGridDay'
  },
  events: roomEvents.value
}));
</script>

<style scoped>
.calendar-wrapper {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.kpi-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-bottom: 1.5rem;
}
.kpi-card {
  padding: 1rem;
  border-radius: 8px;
  color: white;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.kpi-card h3 {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}
.kpi-card p {
  font-size: 1.5rem;
  font-weight: bold;
}
.kpi-card.disponible {
  background-color: #2ecc71;
}
.kpi-card.reservada {
  background-color: #f39c12;
}
.kpi-card.ocupada {
  background-color: #e74c3c;
}

.fullcalendar :deep(.fc) {
  font-family: 'Segoe UI', sans-serif;
}
.fullcalendar :deep(.fc-toolbar) {
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-between;
}
.fullcalendar :deep(.fc-daygrid-event) {
  font-size: 0.9rem;
  padding: 2px 4px;
  border-radius: 4px;
  background-color: var(--color-accent);
  color: white;
}
</style>
