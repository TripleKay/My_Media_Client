<template>
    <div>
         <!-- -------------------------------nav bar------------------------------------- -->
        <div class="container-fluid shadow-sm my-nav-bar" style="background-color: #9D4EDD">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav class="navbar navbar-expand-lg navbar-dark">
                            
                                <a class="navbar-brand d-flex align-items-center" href="#">
                                    <img src="assets/resources/img/image2.png" class="img-fluid" alt="" srcset="" style="width: 50px ;">

                                    <h3 class="mb-0 ms-2 fw-bolder ">MY MEDIA</h3>
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
                                    
                                </ul>
                                </div>
                            </nav>
                    </div>
                </div>
            </div>
        </div>
         <!-- -------------------------------login section------------------------------------- -->
        <section class="py-5 mt-5 min-vh-100">
            <div class="container">
                <div class="col-6 offset-3">
                    <div class="card bg-white shadow overflow-hidden"  style="border-radius: 15px">
                        <div class="card-header bg-white py-3">
                            <h3 class="mb-0 ms-2">LOGIN FORM</h3>
                        </div>
                        <div class="card-body">
                            <div>
                                <div v-if="userValidation" class="alert alert-danger alert-dismissible fade show" role="alert">
                                    <strong>User Credentials do not match !</strong>
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                                <div class="mb-4">
                                    <label for="" class=" mb-2"><i class="fas fa-envelope mx-2"></i>Email</label>
                                    <input v-model="userData.email" type="text" class="form-control form-control-lg" placeholder="enter your email .....">
                                </div>
                                <div class="mb-4">
                                    <label for="" class=" mb-2"><i class="fas fa-lock mx-2"></i>Password</label>
                                    <input v-model="userData.password" type="password" class="form-control form-control-lg" placeholder="enter your password .....">
                                </div>
                                <div class="my-2 d-flex align-items-center">
                                    <button @click="accountLogin()" class="shadow btn btn-danger btn-lg text-white">Login</button>
                                    <div class="ms-3 text-secondary">You don't have an account!<span class="text-danger ms-1">Register Here</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script src="../js/loginPage.js"></script>

