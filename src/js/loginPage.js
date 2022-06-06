import axios from "axios"
import { mapGetters } from "vuex"
export default {
        name: "LoginPage",
        data () {
            return {
                userData: {
                    email: '',
                    password: '',
                },
                userValidation: false,
            }
        },
        computed: {
            ...mapGetters(["getToken","getUserData"]),
        },
        methods: {
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
            accountLogin(){
                axios.post("http://127.0.0.1:8000/api/login",this.userData).then((response) => {
                    if(response.data.token == null){
                        this.userValidation = true;
                    }else{
                        //sent token to store.state.token from setToken getter function
                        this.storeUserInfo(response);
                        this.home();
                    }
                }).catch((error) => {
                    console.log(error);
                });
            },
            storeUserInfo(response){
                this.$store.dispatch("setToken",response.data.token);
                this.$store.dispatch("setUserData",response.data.user);
            },
            check(){
                console.log(this.getToken);
                console.log(this.getUserData);
            }
        },
        mounted () {
            this.userData = {};
        }
}