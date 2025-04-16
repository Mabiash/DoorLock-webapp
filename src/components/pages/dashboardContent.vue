<script setup>

</script>

<template>
    <section class="content-container">
        <div class="boxes"></div>
        <div class="boxes"></div>
        <div class="boxes"></div>
       
    
    </section>
</template>

<style scoped>
.content-container{
    flex: 1;
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    overflow-y: scroll;
    padding: 1rem 1.5rem;
 
}

.boxes{
    flex: 1;
    height: fit-content;
    min-height: 15rem;
    background-color: rgba(144, 51, 153, 0.233);
    min-width: 300px;
    border-radius: 20px;
}
.boxes:nth-child(1){
    background-color: rgba(144, 51, 153, 0.212);
}
.boxes:nth-child(2){
    background-color: rgba(0, 183, 255, 0.26);
}
.boxes:nth-child(3){
    min-width: 300px;
    background-color: rgba(48, 49, 2, 0.479);
}
</style>