<script setup>
import { ref } from 'vue'

const rooms = ref([
    {
        roomName: "BIST 2F111111",
        reponsible: "Kieth Mendizabal",
        date: new Date(),
        action: "Open",
        stdId: "MMC2023-00457",
        section: "BSIT 2F3"
    },
    {
        roomName: "BIST 2F111111",
        reponsible: "Kieth Mendizabal",
        date: new Date(),
        action: "Open",
        stdId: "MMC2023-00457",
        section: "BSIT 2F3"
    },
    {
        roomName: "BIST 2F111111",
        reponsible: "Kieth Mendizabal",
        date: new Date(),
        action: "Open",
        stdId: "MMC2023-00457",
        section: "BSIT 2F3"
    },
    {
        roomName: "BIST 2F111111",
        reponsible: "Kieth Mendizabal",
        date: new Date(),
        action: "Open",
        stdId: "MMC2023-00457",
        section: "BSIT 2F3"
    },

])
</script>

<template>
    <section>
        <div class="filter-history-container">
            <div class="filter-method">
                <select name="" id="">
                        <option value="All">All</option>
                        <option value="All">BSIT 2F3</option>
                        <option value="All">BSIT 2F2</option>
                </select>
                
            </div>
            <div class="filter-date">
                <select name="" id="">
                        <option :value="new Date().toLocaleDateString()">{{new Date().toLocaleDateString()}}</option>
                        <option value="All">BSIT 2F3</option>
                        <option value="All">BSIT 2F2</option>
                </select>
                
            </div>
        </div>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Room Name</th>
                        <th>Responsible</th>
                        <th>Student ID</th>
                        <th>Section</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="rooms in rooms">
                        <td>{{ rooms.roomName }}</td>
                        <td>{{ rooms.reponsible }}</td>
                        <td>{{ rooms.stdId }}</td>
                        <td>{{ rooms.section }}</td>
                        <td>{{ rooms.date.toLocaleString() }}</td>
                        <td>{{ rooms.action }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0px 2.5rem;
    gap: 5px;
}


.filter-history-container {
    width: fit-content;
    height: fit-content;
    display: flex;
    gap: 10px;
}

.filter-method, .filter-date{
    background-color: var(--primary-color);
    padding: 0px 5px 0 0;
    border-radius: 5px;
}

option{
    background-color: #fff !important;
    color: black;

   
}
select {
    padding: 10px 1.7rem;
    background-color: transparent;
    color: white;
    border: 0;
    outline: 0;
}

.table-container {
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(33, 0, 3, 0.56) 0%, rgba(0, 9, 26, 0.6) 100%);
    padding: 10px;
    border-radius: 10px;
    overflow: auto;
    scrollbar-width: thin;
    min-width: 45rem;
    min-height: 28.8rem;
    max-height: 28.8rem;
}

table {
    width: 100%;
}

thead {
    font-size: 14px;
    border: 1px solid black;
    text-align: justify;
}

thead tr {
    background-color: rgba(0, 0, 0, 0.555);
}

tbody {
    text-align: justify;
}

th {
    color: rgb(255, 255, 255);
}

td {
    color: rgb(230, 230, 230);
    font-size: clamp(12px, 2vw, 14px);
    width: fit-content;
}

tr:not(thead tr):hover {
    background-color: rgba(0, 0, 0, 0.356);
    cursor: pointer;
}

td,
th {
    padding: 10px 10px;
    cursor: pointer;
}

td:not(:last-child),
th:not(:last-child) {

    border-right: 1px solid white;
}

td {}


@media screen and (max-width: 520px) {
    .table-container {
        min-height: 0;
        height: fit-content;
    }
}
</style>