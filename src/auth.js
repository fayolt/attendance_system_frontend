/*jshint esversion: 6*/
import axios from "axios";

export default {
    user: { role: '', username: '' },
    login: function (context, creds, redirect) {
      axios.post('http://localhost:4000/api/sessions', creds)
        .then(response => {
            this.username = creds.username;
            this.user.role = response.data.role;
            window.localStorage.setItem('token-'+this.username, response.data.token);

            if (redirect)
              context.$router.push({path: redirect});
        })
        .catch( error => {
            console.log(error);
        });
    },
    logout: function(context, options) {
        axios.delete('localhost:4000/api/sessions/1', options)
          .then(response => {
            window.localStorage.removeItem('token-'+this.username);
            this.user.authenticated = false;
            this.user.username = "";
            context.$router.push({path: '/login'});
          }).catch(error => {
            console.log(error);
          });
    },
    authenticated: function() {
        const jwt = window.localStorage.getItem('token-'+this.username);
        return !!jwt;
    },
    getAuthHeader: function() {
        return {
          'Authorization': window.localStorage.getItem('token-'+this.username)
        };
    }
};