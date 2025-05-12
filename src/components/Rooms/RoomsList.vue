<template>
  <section>
    <h1>Salas de Reunión</h1>
    <button @click="showForm = !showForm">Agregar Sala</button>
    <div v-if="showForm" class="room-form">
      <input v-model="newRoom.name" placeholder="Nombre de la sala" />
      <input v-model="newRoom.capacity" type="number" placeholder="Capacidad" />
      <input v-model="newRoom.location" placeholder="Ubicación" />
      <select v-model="newRoom.status">
        <option value="Disponible">Disponible</option>
        <option value="Reservada">Reservada</option>
        <option value="Ocupada">Ocupada</option>
      </select>
      <input v-model="newRoom.image" placeholder="URL de la imagen" />
      <input v-model="newRoom.createdBy" placeholder="Agregado por" />
      <button @click="addRoom">Guardar</button>
    </div>
    <div class="rooms-grid">
      <div class="room-card" v-for="room in rooms" :key="room.id">
        <img :src="room.image" alt="Foto de la sala" />
        <div class="info">
          <h3>{{ room.name }}</h3>
          <p><strong>Ubicación:</strong> {{ room.location }}</p>
          <p><strong>Capacidad:</strong> {{ room.capacity }} personas</p>
          <p><strong>Estado:</strong> <span :class="room.status.toLowerCase()">{{ room.status }}</span></p>
          <p><small>Agregada por: {{ room.createdBy }}</small></p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
import { useRooms } from '../../composables/useRooms';

const { rooms } = useRooms();
const showForm = ref(false);
const newRoom = ref({
  name: '',
  capacity: '',
  location: '',
  status: 'Disponible',
  image: '',
  createdBy: '',
});

function addRoom() {
  rooms.value.push({
    id: Date.now(),
    ...newRoom.value,
  });
  newRoom.value = {
    name: '',
    capacity: '',
    location: '',
    status: 'Disponible',
    image: '',
    createdBy: '',
  };
  showForm.value = false;
}
</script>
<style scoped>
.rooms-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-top: 1rem;
}
.room-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}
.room-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.info {
  padding: 1rem;
}
.disponible {
  color: green;
}
.reservada {
  color: orange;
}
.ocupada {
  color: red;
}
.room-form {
  background: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.room-form input,
.room-form select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
