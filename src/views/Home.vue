<script setup>
import {ref} from "vue"
import Header from "../components/pages/header.vue";
import SideNav from "../components/pages/lappyNav.vue";
import DashboardContent from "../components/pages/dashboardContent.vue";
import RoomsContent from "../components/pages/roomsContent.vue"
const isDashboard = ref(true)
const isRoom = ref(false)
const headerTitle = ref('Dashboard')
function roomsEvent(){
    isDashboard.value = false;
    isRoom.value = true;
    headerTitle.value = 'Rooms'
}

function dashboardEvent(){
    isRoom.value = false;
    isDashboard.value = true;
    headerTitle.value = 'Dashboard'
}
</script>

<template >
   
    <SideNav @goToRooms="roomsEvent" @goToDashboard="dashboardEvent"/>
    <section class="main-content">
         <Header :headerTitle="headerTitle"/>
        <DashboardContent :isDashboard="isDashboard"/>
        <RoomsContent v-if="isRoom"/>
        <div class="curve-t">

        </div>
        <div class="curve-b">

        </div>
    </section>
</template>

<style scoped>
.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    overflow: hidden;
    border: 4px solid var(--primary-color);
    border-left: none;
    
}

.curve-b,
.curve-t {
    position: absolute;
    height: 4rem;
    aspect-ratio: 1;
    left: 0;
}
.curve-t {
    top: 0;
    border-radius: 30px 0 0;
    box-shadow: -15px -15px 0px var(--primary-color);
}

.curve-b {
    bottom: 0;
    border-radius:0 0 0 30px ;
    box-shadow: -15px 15px 0px  var(--primary-color);
}

@media screen and (max-width: 650px) {
    .curve-t, .curve-b{
        display: none;
    }

    .main-content{
        border: none;
    }
}
</style>