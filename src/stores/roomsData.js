
import { defineStore } from "pinia";

export const roomsData = defineStore("counter", {
  state: () => ({
    data: [
      {
        roomName: "BIST 2F111111",
        isOpen: false,
        reponsible: "Kieth Mendizabal",
        date: new Date(),
        id: 1,
      },
      {
        roomName: "BIST 3F1",
        isOpen: false,
        reponsible: "Kieth Mendizabal",
        date: new Date(),
        id: 12,
      },
      {
        roomName: "BIST 2F111111",
        isOpen: false,
        reponsible: "Kieth Mendizabal",
        date: new Date(),
        id: 10,
      },
      {
        roomName: "BIST 2F1",
        isOpen: false ,
        reponsible: "Kieth Mendizabal",
        date: new Date(),
        id: 2,
      },
      {
        roomName: "BIST 2F1",
        isOpen: true,
        reponsible: "Kieth Mendizabal",
        date: new Date(),
        id: 3,
      },
      {
        roomName: "BIST 2F2",
        isOpen: true,
        reponsible: "Dayl Bacongco",
        date: new Date(),
        id: 4,
      },
      {
        roomName: "BIST 2F3",
        isOpen: false,
        reponsible: "Trecia Mae",
        date: new Date(),
        id: 5,
      },
    ]
  }),

  getters: {
    openRooms(state) {
      return state.data.filter(room => room.isOpen);
    },
    closedRooms(state) {
      return state.data.filter(room => !room.isOpen);
    },
    hasRoomClosed(state){
      return state.data.some(room => room.isOpen === false)
    },
    hasRoomOpen(state){
      return state.data.some(room => room.isOpen)
    },
    isAllRoomsClosed(state){
      return state.data.every(rooms => !rooms.isOpen)
    },
    isAllRoomsOpen(state){
      return state.data.every(rooms => rooms.isOpen)
    }
  },

  actions: {

  }
});
