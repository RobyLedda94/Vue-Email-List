// debug
// alert("Lista E-Mail");


// struttura base vuejs

const { createApp } = Vue;

createApp({
    data(){
       return{
            email: null

       } 
    },
    // created() {
    //     this.generateEmail();
    // },
    methods: {
        generateEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                console.log(response.data);
                console.log(response.data.response);
                this.email = response.data.response
            })
        }
    }
}).mount('#app');