import { ref } from 'vue';

export function useRooms() {
  const rooms = ref([
    {
      id: 1,
      name: 'Sala Principal',
      capacity: 10,
      location: 'Piso 1',
      status: 'Disponible',
      image: 'https://via.placeholder.com/300x200',
      createdBy: 'Admin Empresa A',
    },
    {
      id: 2,
      name: 'Sala Ejecutiva',
      capacity: 6,
      location: 'Piso 2',
      status: 'Reservada',
      image: 'https://via.placeholder.com/300x200',
      createdBy: 'Juan Pérez',
    },
  ]);

  return { rooms };
}
