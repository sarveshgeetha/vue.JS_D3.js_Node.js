import  axios  from 'axios';
export default {
    name: 'Login',
    props: {
      msg: String
    },
    data() {
      return {
        loading: false,
        user: {
          email: "",
          password: ""
        },
        errMsg:"",
        showSnackbar: false,
        position: 'center',
        duration: 2000,
        isInfinity: false
      };
    },
    methods: {
      auth() {
        if(this.user.email=="" || this.user.password=="")
        {
          this.errMsg = "Invalid Email Id / Password."
          this.showSnackbar = true;
        }
        else{
          this.loading = true;
          axios
            .get('http://localhost:4000/login')
            .then(response => {
              if(response.data == 'success')
              {
                this.loading = false;
                this.$router.push('shipping');
              }
            }).catch(() => {
              this.errMsg = "Connection Error. Please Try Again After Sometime."
              this.showSnackbar = true;
                this.loading = false;
            });
        }  
      }
    }
  }
