<template>
    
    <section class="py-5 mt-5 min-vh-100" style="background-color: #0e1217;">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h4 class="mb-0 mt-4 text-white-50 blog-section-title">Blogs And News <div class="badge badge-info">{{ postLists.length }}</div> </h4>
                </div>
            </div>
            <div class="row">
                <!-- -------------------------------right container------------------------------------- -->
                <div class="col-12 col-md-8">
                    
                    <div class="row mt-5">
                        <!-- -------------------------------no data found------------------------------------- -->
                        <div v-if="postLists.length == 0"  class="col-12 d-flex align-items-center justify-content-center" style="height: 50vh">
                            <div class="card bg-transparent">
                                <div class="card-body text-center">
                                    <h1 class="text-danger">404</h1>
                                    <h5 class="text-white-50">There is no data !</h5>
                                </div>
                            </div>
                        </div>
                        <!-- -------------------------------blog card------------------------------------- -->
                        <div v-else-if="postLists.length != 0" class="col-6 col-md-12" v-for="(post , index) in postLists" :key="index">
                            <div class="card mb-4 d-flex shadow blog-card">
                                <div class="overflow-hidden img-container">
                                    <img v-bind:src="post.image" class="h-100" alt="" srcset="">
                                </div>
                                <div class="card-body">
                                    <div class="badge py-2 rounded-0 shadow  bg-info">prgramming</div>
                                    <h5 class="text-white my-3">{{ post.title }}</h5>
                                    <p class="text-secondary"> {{ post.description.substring(0,100)+"....." }} </p>
                                    <div class="text-danger text-decoration-underline" @click="newsDetail(post.post_id)">Read More <i class="fas fa-arrow-right ms-3"></i></div>
                                </div>
                                </div>
                        </div>
                        <!-- blog card  -->
                        
                    </div>

                </div>
                <!-- -------------------------------left container------------------------------------- -->
                <div class="col-12 col-md-4 min-vh-100">
                    <div class="card blog-right-container position-sticky">
                       <div class="card-body">
                         <!-- serach bar  -->
                        <div class="">
                            <div class="d-flex search-bar">
                                <input v-model="searchKey" v-on:keyup.enter="search()" type="text"  class="form-control  bg-transparent border-0" placeholder="search  ....">
                                <button @click="search()" class="btn px-1 pe-2"><i class="fas fa-search text-info" style="font-size: 20px ;"></i>
                                </button>
                            </div>
                        </div>
                        <!-- -------------------------------category------------------------------------- -->
                        <div class="category-container mt-4 py-2">
                            <h5 class="text-white">Categories</h5>
                            <div class="mt-3">
                                <button class="btn text-white-50 category w-100 text-start active" @click="searchCategory('')">ALL<i class="fas fa-angle-right ms-3"></i></button>
                                <button class="btn text-white-50 category w-100 text-start" v-for="( category , index) in categoryLists" :key="index" @click="searchCategory(category.category_id)">
                                    {{ category.title }}
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
    
</template>

<script src="../js/homePage.js"></script>


