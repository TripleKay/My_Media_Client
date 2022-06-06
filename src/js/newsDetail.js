import axios from "axios";
import { mapGetters } from "vuex";
export default {
    name: 'NewsDetail',
    data () {
        return {
            postId: 0,
            postData: {},
            viewCount : 0
        }
    },
    computed: {
        ...mapGetters(["getToken","getUserData"]),
    },
    methods: {
        loadPost (id) {
            let post = {
                postId : id,
            };
            axios.post("http://127.0.0.1:8000/api/post/detail",post).then((response) => {
                
                    if(response.data.post.image != null){
                        response.data.post.image = "http://127.0.0.1:8000/postImage/"+response.data.post.image;
                    }else{
                        response.data.post.image = "http://127.0.0.1:8000/defaultImage/default_post.png";
                    }
              
                this.postData = response.data.post;
                // console.log(this.postData);
            }).catch((error) => {
                console.log(error);
            });
        },
        home(){
            this.$router.push({
                name: "home",
            })
        },
        login(){
            this.$router.push({
                name: "login",
            })
        },
        logout(){
            this.$store.dispatch("setToken",null);
            this.login();
        },
        viewCountLoad(){
            // for view count
            let data = {
                user_id: this.getUserData.id,
                post_id : this.$route.params.newsId,
            };
            axios.post("http://127.0.0.1:8000/api/post/actionLog",data).then((response) => {
                this.viewCount = response.data.post.length;
            });
        }
    },
    mounted(){
        // for view count
        this.viewCountLoad();
        //load post detail
        this.postId = this.$route.params.newsId;
        this.loadPost(this.postId);
    }
}