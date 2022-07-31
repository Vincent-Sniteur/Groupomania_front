<script>
import Profil from '../Users/Profil.vue';
import DisplayMessage from '../Messages/DisplayMessage.vue';
import CreateMessage from '../Messages/CreateMessage.vue';

// Export Home component
export default {
    name: "Home",
    components: { Profil, DisplayMessage, CreateMessage }
}

</script>


<template>
<div class="section">
    <div class="container-fluid">
        <div class="row">
                    
            <!-- Import Profil -->
            <Profil />


            <!-- WALL -->
            <div class="col-md-6">
                <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                    <li class="nav-item">
                        <router-link  to="/home" class="nav-link active" data-toggle="tab" role="tab" aria-controls="home" aria-expanded="true">
                            Last Message
                        </router-link>
                    </li>
                </ul>
          
                <!-- POST MESSAGE & NAVBAR WALL x LIKES -->
                <div class="tab-content">
                    <!-- POST MESSAGE -->
                    <CreateMessage />
                    
                    <!-- Menu Last Message Posted + img -->  
                    <DisplayMessage />
                </div>
            </div>
        </div>
    </div>
</div>



</template>



<style scoped>


</style>