<script>
// IMPORT VUE
import DisplayMessage from '../Messages/DisplayMessage.vue';
import CreateMessage from '../Messages/CreateMessage.vue';


// Export
export default {
    name: "ProfilPage",
    components: { DisplayMessage, CreateMessage }
}

</script>


<template>

<div class="container">
    <div class="main-body">

          <div class="row gutters-sm">
            <div class="md-4 mb-4">
              <!-- Profil Display -->
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img id="user-profil-picture" src="../img/profil.png" alt="User Profil Picture" class="rounded-circle" width="150">
                    <div class="mt-3">
                      <h3 class="title" id="user-name">John Doe</h3>
                        <table class="table table-sm mt-2 mb-4">
                            <tbody>
                              <tr>
                                <th>Bio</th>
                                <td id="user-description">Full Stack Developer</td>
                              </tr>
                              <tr>
                                <th>Localisation</th>
                                <td id="user-localisation">Paris, France</td>
                              </tr>
                              <tr>
                                <th>Status</th>
                                <td><span id="user-status" class="badge bg-success">Actif</span></td>
                              </tr>
                            </tbody>
                        </table>
                      
                    <!-- TODO Add Check if this is the profil of the logged user > ADD EDIT PROFIL BTN -->
                    <!-- if this is not the profil of the logged user > ADD CONTACT BTN -->
                      <button id="contact-user" class="btn btn-dark rounded-pill">Contact</button>
                      <RouterLink to="/edit-profil">
                        <button id="edit-profil-user" class="btn btn-dark rounded-pill">Edit Profil</button>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Profil Display -->

              <!-- Stats user -->
              <div class="card">
                <div class="card-body text-center">
                    <div class="row">
                        <div class="col-4 border-end border-light">
                            <h5 class="text-muted mt-1 mb-2 fw-normal">Messages</h5>
                            <h2 class="mb-0 fw-bold">116</h2>
                        </div>
                        <div class="col-4 border-end border-light">
                            <h5 class="text-muted mt-1 mb-2 fw-normal">Likes</h5>
                            <h2 class="mb-0 fw-bold">87</h2>
                        </div>
                        <div class="col-4">
                            <h5 class="text-muted mt-1 mb-2 fw-normal">Friends</h5>
                            <h2 class="mb-0 fw-bold">0</h2>
                        </div>
                    </div>
                </div>
              </div>

              <!-- Profil Social -->
              <div class="card mt-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                      Website
                    </h6>
                    <span id="user-website" class="text-secondary">https://xxxxx.com</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      Github
                    </h6>
                    <span id="user-github" class="text-secondary">xxxxx</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                      Twitter
                    </h6>
                    <span id="user-twitter" class="text-secondary">@xxxxx</span>
                  </li>
                </ul>
              </div>
              <!-- Profil Social -->
            </div>
          </div>


          <!-- Not visible if no owner of this page -->
          <!-- Send Message > Only by the owner of this profil -->
          <div class="container mb-4">
            <div class="row">
              <div class="col-md-14">
                <div class="card">
                  <div class="card-header">
                    <h3 class="title">Send Message</h3>
                    <CreateMessage>

                    </CreateMessage>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Send Message -->

          <!-- Last Message of this user -->
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Last Message</h3>
                  </div>
                  <!-- TODO ONLY MESSAGE OF THIS PROFIL USER BY UserID -->
                    <DisplayMessage></DisplayMessage>
                    <DisplayMessage></DisplayMessage>
                    <DisplayMessage></DisplayMessage>
                </div>
              </div>
            </div>
          </div>
          <!-- Last Message of this user -->
        </div>
    </div>
    <!-- End Container -->





</template>



<style scoped>

.main-body {
    padding: 15px;
}
.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}

.gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
}

.gutters-sm>.col, .gutters-sm>[class*=col-] {
    padding-right: 8px;
    padding-left: 8px;
}

</style>