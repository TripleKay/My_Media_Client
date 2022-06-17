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
                                    <li class="nav-item">
                                        <div class="dropdown">
                                        <button class="btn btn-outline-light text-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            User Name
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><button class="dropdown-item" @click="logout()" >Logout</button></li>
                                        </ul>
                                        </div>
                                    </li>
                                </ul>
                                </div>
                            </nav>
                    </div>
                </div>
            </div>
        </div>
        <section class="py-5" style="background-color: #9D4EDD; height: 40vh">
            <div class="container">
                <div class="col-12">
                    <h1 class="text-white mt-5 font-weight-bold" style="font-size: 120px">NEWS</h1>
                </div>
            </div>
        </section>
        <!-- -------------------------------blog section------------------------------------- -->
        <section class="py-5  min-vh-100">
            <div class="container">
                <div class="row">
                    <div class="col-7">
                        <div class="card bg-white shadow" style="border-radius: 15px">
                        <div class="card-body">
                                <img :src="postData.image" alt="" class="img-fluid" srcset="" style="border-radius : 15px">
                                <h3 class="my-4">{{ postData.title }}</h3>
                                <p class="text-secondary long-para">{{ postData.description }}</p>
                        </div>
                        <div class="card-footer">
                            <div class="">
                                <i class="fas fa-eye me-2 text-info"></i>
                                <span>{{ viewCount }}</span>
                            </div>
                        </div>
                        </div>

                    </div>
                    <!-- -------------------------------right container------------------------------------- -->
                    <div class="col-5 col-md-5 min-vh-100">
                        <h3 class="mb-4">Related Posts</h3>
                        <div class="row">
                            <div class="col-12" v-for="(post , index) in relatedPost" :key="index">
                                <div class="mb-3 d-flex align-items-center bg-white rounded p-2">
                                    <img v-bind:src="post.image" class="" alt="" srcset="" style="width: 150px ; height: 180px">
                                    <div class="ms-3">
                                        <h5>{{ post.title }}</h5>
                                        <p class="mb-0 text-black-50">{{post.description.substring(0,80)+"....." }}</p>
                                        <button class="btn btn-outline-primary btn-sm mt-2" @click="newsDetail(post.post_id)">read more</button>
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

