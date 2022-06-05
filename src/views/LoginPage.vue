<template>
    <div>
        <!-- -------------------------------nav bar------------------------------------- -->
        <div class="container-fluid shadow-sm my-nav-bar bg-dark">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav class="navbar navbar-expand-lg navbar-dark">
                            
                                <a class="navbar-brand d-flex align-items-center" href="#">
                                    <img src="assets/resources/img/image2.png" class="img-fluid" alt="" srcset="" style="width: 50px ;">

                                    <h3 class="mb-0 ms-2 fw-bolder text-primary">MY MEDIA</h3>
                                </a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-end me-2" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                    <div @click="home()" class="nav-link text-uppercase active" aria-current="page" >Home</div>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link text-uppercase" href="#">Blog</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link text-uppercase" href="#">Contact Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <button @click="login()" class=" btn text-white me-2">Login</button>
                                        <a href="" class=" btn btn-danger text-white">Register</a>
                                    </li>
                                </ul>
                                </div>
                            </nav>
                    </div>
                </div>
            </div>
        </div>
         <!-- -------------------------------login section------------------------------------- -->
        <section class="py-5 mt-5 min-vh-100" style="background-color: #0e1217;">
            <div class="container">
                <div class="col-6 offset-3">
                    <div class="card bg-transparent"  style="border: 1px solid #fff">
                        <div class="card-header">
                            <h3 class="mb-0 text-white text-center">Login Form</h3>
                        </div>
                        <div class="card-body">
                            <div>
                                <div class="mb-3">
                                    <label for="" class="text-white mb-2">Email</label>
                                    <input v-model="userData.email" type="text" class="form-control" placeholder="enter your email .....">
                                </div>
                                <div class="mb-3">
                                    <label for="" class="text-white mb-2">Password</label>
                                    <input v-model="userData.password" type="password" class="form-control" placeholder="enter your password .....">
                                </div>
                                <button @click="accountLogin()" class="mt-3 btn btn-danger text-white">Login</button>
                                <button @click="check()" class="mt-3 btn btn-pimary text-white">Check</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script src="../js/loginPage.js"></script>

