<template>
    <div class="">
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
                                    <li v-if="!tokenStatus" class="nav-item">
                                        <button @click="login()" class=" btn text-white me-2">Login</button>
                                        <a href="" class=" btn btn-light">Register</a>
                                    </li>
                                    <li v-if="tokenStatus" class="nav-item">
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
        <section class="py-5 min-vh-100">
            <div class="container px-5">
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex justify-content-between align-items-center mb-5">
                            <h4 class="mb-0 mt-4 blog-section-title">Blogs And News <div class="badge badge-info">{{ postLists.length }}</div> </h4>
                        </div>
                    </div>
                </div>
                <div v-if="!tokenStatus" class="row">
                    <div class="col-12 d-flex align-items-center justify-content-center" style="height: 50vh">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="text-danger mb-0">to see data,You need to login first !</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="tokenStatus" class="row">
                    <!-- -------------------------------left container------------------------------------- -->
                    <div class="col-12 col-md-8">
                        
                        <div class="row">
                            <!-- -------------------------------no data found------------------------------------- -->
                            <div v-if="postLists.length == 0"  class="col-12 d-flex align-items-center justify-content-center" style="height: 50vh">
                                <div class="card bg-transparent border-0">
                                    <div class="card-body text-center">
                                        <h1 class="text-danger">404</h1>
                                        <h5 class="text-black-50">There is no data !</h5>
                                    </div>
                                </div>
                            </div>
                            <!-- -------------------------------blog card------------------------------------- -->
                            <div v-else-if="postLists.length != 0" class="col-6 col-md-6" v-for="(post , index) in postLists" :key="index">
                                <div class="card mb-4 d-flex blog-card">
                                    
                                    <div class="card-body">
                                        <!-- <div class="badge py-2 rounded-0 shadow  bg-info">prgramming</div> -->
                                        <h5 class=" mb-3">{{ post.title }}</h5>
                                        <div class="overflow-hidden img-container">
                                            <img v-bind:src="post.image" class="h-100" alt="" srcset="">
                                        </div>
                                        <p class="text-secondary my-3"> {{ post.description.substring(0,80)+"....." }} </p>
                                        <div class="text-danger text-decoration-underline" @click="newsDetail(post.post_id)">Read More <i class="fas fa-arrow-right ms-3"></i></div>
                                    </div>
                                </div>
                            </div>
                            <!-- blog card  -->
                            
                        </div>

                    </div>
                    <!-- -------------------------------right container------------------------------------- -->
                    <div class="col-12 col-md-4 min-vh-100">
                        <div class="card blog-right-container position-sticky">
                        <div class="card-body">
                            <!-- serach bar  -->
                            <div class="">
                                <div class="d-flex search-bar">
                                    <input v-model="searchKey" v-on:keyup.enter="search()" type="search"  class="form-control  bg-transparent border-0" placeholder="search  ....">
                                    <button @click="search()" class="btn px-1 pe-2"><i class="fas fa-search text-info" style="font-size: 20px ;"></i>
                                    </button>
                                </div>
                            </div>
                            <!-- -------------------------------category------------------------------------- -->
                            <div class="category-container mt-3 py-2">
                                <h5 class="">Categories</h5>
                                <div class="mt-3">
                                    <button class="btn text-black-50 category w-100 text-start active" @click="searchCategory('')">ALL<i class="fas fa-angle-right ms-3"></i></button>
                                    <button class="btn text-black-50 category w-100 text-start" v-for="( category , index) in categoryLists" :key="index" @click="searchCategory(category.category_id)">
                                        {{ category.title }}
                                        <i class="fas fa-angle-right ms-3"></i>
                                    </button>

                                </div>
                            </div>
                            <!-- -------------------------------tags------------------------------------- -->
                            <div class="tags-container mt-4">
                                <h5 class="">Tags</h5>
                                <div class="mt-3">
                                    <button class="btn btn-light shadow-lg btn-sm text-start mb-2 ms-2">#Programming</button>
                                    <button class="btn btn-light shadow-lg btn-sm text-start mb-2 ms-2">#economic</button>
                                    <button class="btn btn-light shadow-lg btn-sm text-start mb-2 ms-2">#technology</button>
                                    <button class="btn btn-light shadow-lg btn-sm text-start mb-2 ms-2">#business</button>

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

<script src="../js/homePage.js"></script>


