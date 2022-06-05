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
        <!-- -------------------------------blog section------------------------------------- -->
        <section class="py-5 mt-5 min-vh-100" style="background-color: #0e1217;">
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <div class="card bg-transparent">
                        <div class="card-body">
                                <img :src="postData.image" alt="" class="img-fluid" srcset="" style="border-radius : 15px">
                                <h3 class="text-white my-4">{{ postData.title }}</h3>
                                <p class="text-white-50 long-para">{{ postData.description }}</p>
                        </div>
                        </div>

                    </div>
                    <!-- -------------------------------right container------------------------------------- -->
                <div class="col-12 col-md-4 min-vh-100">
                    <div class="card blog-right-container position-sticky">
                       <div class="card-body">
                         <!-- serach bar  -->
                        <div class="">
                            <div class="d-flex search-bar">
                                <input type="text"  class="form-control  bg-transparent border-0" placeholder="search  ....">
                                <button  class="btn px-1 pe-2"><i class="fas fa-search text-info" style="font-size: 20px ;"></i>
                                </button>
                            </div>
                        </div>
                        <!-- -------------------------------category------------------------------------- -->
                        <div class="category-container mt-4 py-2">
                            <h5 class="text-white">Categories</h5>
                            <div class="mt-3">
                                <button class="btn text-white-50 category w-100 text-start active" >ALL<i class="fas fa-angle-right ms-3"></i></button>
                                <button class="btn text-white-50 category w-100 text-start">
                                    Programming
                                    <i class="fas fa-angle-right ms-3"></i>
                                </button>
                                <button class="btn text-white-50 category w-100 text-start">
                                    Programming
                                    <i class="fas fa-angle-right ms-3"></i>
                                </button>
                                <button class="btn text-white-50 category w-100 text-start">
                                    Programming
                                    <i class="fas fa-angle-right ms-3"></i>
                                </button>

                            </div>
                        </div>
                        <!-- -------------------------------tags------------------------------------- -->
                        <div class="tags-container mt-4">
                            <h5 class="text-white">Tags</h5>
                            <div class="mt-3">
                                <button class="btn btn-dark shadow-lg btn-sm text-start mb-2 ms-2">#Programming</button>
                                <button class="btn btn-dark shadow-lg btn-sm text-start mb-2 ms-2">#economic</button>
                                <button class="btn btn-dark shadow-lg btn-sm text-start mb-2 ms-2">#technology</button>
                                <button class="btn btn-dark shadow-lg btn-sm text-start mb-2 ms-2">#business</button>

                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                </div>
            </div>

        </section>
    </div>
</template>

<script src="../js/newsDetail.js"></script>

