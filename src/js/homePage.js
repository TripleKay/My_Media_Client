import axios from "axios";
    export default {
        name: "HomePage",
        data () {
            return {
                postLists: {},
                categoryLists: {},
                searchKey: '',
            }
        },
        methods: {
            getAllPost () {
                axios.get("http://127.0.0.1:8000/api/post").then((response) => {
                    for(let i=0; i < response.data.post.length ; i++){
                        if(response.data.post[i].image != null){
                            response.data.post[i].image = "http://127.0.0.1:8000/postImage/"+response.data.post[i].image;
                        }else{
                            response.data.post[i].image = "http://127.0.0.1:8000/defaultImage/default_post.png";
                        }
                    }
                    this.postLists = response.data.post;
                }).catch((error) => {
                    console.log(error);
                });
            },
            loadCategory () {
                axios.get("http://127.0.0.1:8000/api/category").then((response) => {
                    this.categoryLists = response.data.category;
                }).catch((error) => {
                    console.log(error);
                });
            },
            search(){
                let search = {
                    key: this.searchKey,
                };
                axios.post("http://127.0.0.1:8000/api/post/search",search).then((response) => {
                    for(let i=0; i < response.data.post.length ; i++){
                        if(response.data.post[i].image != null){
                            response.data.post[i].image = "http://127.0.0.1:8000/postImage/"+response.data.post[i].image;
                        }else{
                            response.data.post[i].image = "http://127.0.0.1:8000/defaultImage/default_post.png";
                        }
                    }
                    this.postLists = response.data.post;
                }).catch((error) => {
                    console.log(error);
                });
            },
            searchCategory(id){
                let search = {
                    key: id,
                };
                axios.post("http://127.0.0.1:8000/api/category/search",search).then((response) => {
                    for(let i=0; i < response.data.post.length ; i++){
                        if(response.data.post[i].image != null){
                            response.data.post[i].image = "http://127.0.0.1:8000/postImage/"+response.data.post[i].image;
                        }else{
                            response.data.post[i].image = "http://127.0.0.1:8000/defaultImage/default_post.png";
                        }
                    }
                    this.postLists = response.data.post;
                }).catch((error) => {
                    console.log(error);
                });
            },
            newsDetail(id){
                // console.log(id);
                this.$router.push({
                    name: 'newsDetail',
                    params: {
                        newsId: id,
                    },
                });
            },

        },
        mounted(){
            this.getAllPost();
            this.loadCategory();
        }
    }