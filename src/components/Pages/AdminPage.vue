<script>

// Export AdminPage
export default {
  name: 'AdminPage',
}

</script>

<template>

<section class="section admin-section gray-bg" id="admin">
            <div class="container">
                <!-- Header -->
                <div class="row align-items-center flex-row-reverse">
                  <div class="admin-text go-to">
                      <h3 class="dark-color">Admin Panel</h3>
                  </div>
                </div>
                <!-- Header -->

                <!-- Panel -->
                <div class="counter">
                    <div class="row">
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                <h6 id="user-count" class="count h2">500</h6>
                                <p class="m-0px font-w-600">Nombre d'utilisateurs</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                <h6 id="message-count" class="count h2">1500</h6>
                                <p class="m-0px font-w-600">Nombre de messages</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                <h6 id="banned-count" class="count h2">80</h6>
                                <p class="m-0px font-w-600">Banned Users</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                <h6 id="like-count" class="count h2">2900</h6>
                                <p class="m-0px font-w-600">Nombre de Likes</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Panel -->

                <!-- Commande Panel -->
                <h2>Add panel option</h2>
            </div>
        </section>


</template>



<style scoped>

.section {
    padding: 100px 0;
    position: relative;
}
.gray-bg {
    background-color: #f5f5f5;
}
/* Admin Me 
---------------------*/
.admin-text h3 {
  font-size: 45px;
  font-weight: 700;
  margin: 0 0 6px;
}
@media (max-width: 767px) {
  .admin-text h3 {
    font-size: 35px;
  }
}
.admin-text h6 {
  font-weight: 600;
  margin-bottom: 15px;
}
@media (max-width: 767px) {
  .admin-text h6 {
    font-size: 18px;
  }
}
.admin-text p {
  font-size: 18px;
  max-width: 450px;
}
.admin-text p mark {
  font-weight: 600;
  color: #20247b;
}

.admin-section .counter {
  padding: 22px 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(31, 45, 61, 0.125);
}
.admin-section .counter .count-data {
  margin-top: 10px;
  margin-bottom: 10px;
}
.admin-section .counter .count {
  font-weight: 700;
  color: #20247b;
  margin: 0 0 5px;
}
.admin-section .counter p {
  font-weight: 600;
  margin: 0;
}

.dark-color {
    color: #20247b;
}


</style>