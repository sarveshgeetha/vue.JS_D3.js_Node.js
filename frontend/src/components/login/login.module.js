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
        }
      };
    },
    methods: {
      auth() {
        this.loading = true;
        axios
          .get('http://localhost:4000/login')
          .then(response => {
            if(response.data == 'success')
            {
              this.loading = false;
              this.$router.push('shipping');
            }
          });
      }
    }
  }
