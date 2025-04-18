<script setup>
import {defineProps} from "vue";

const props = defineProps({
    isRooms: String
})
</script>

<template>
    <section class="rooms">
        Rooms
    </section>
</template>

<style scoped>
.rooms{
    flex: 1;
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1.4rem;
    overflow-y: scroll;
    padding: 1rem 2.5rem;
    scrollbar-width: none;
    
}
</style>