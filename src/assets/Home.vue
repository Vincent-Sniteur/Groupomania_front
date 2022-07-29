<script>
import Profil from './Profil.vue';
import LastMessage from './LastMessage.vue';
import Likes from './Likes.vue';
import Message from './Message.vue';

// Export Home component
export default {
    name: "Home",
    components: { Profil, LastMessage, Likes, Message }
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
                    <li class="nav-item">
                        <router-link to="#likes" class="nav-link" data-toggle="tab" role="tab" aria-controls="likes">
                            Likes
                        </router-link>
                    </li>
                </ul>
          
                <!-- POST MESSAGE & NAVBAR WALL x LIKES -->
                <div class="tab-content">
                    <!-- POST MESSAGE -->
                    <Message />
                    
                    <!-- Menu Last Message Posted + img -->  
                    <LastMessage />

                    <!-- Menu Message Liked -->
                    <Likes />
                </div>
            </div>
        </div>
    </div>
</div>



</template>



<style scoped>


</style>