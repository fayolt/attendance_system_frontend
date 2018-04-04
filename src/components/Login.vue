<template>
    <div class="container">
        <div class="row">
            <div class="well col-sm-offset-3 col-sm-6">
                <h2>Please log in</h2>
                <div>
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" class="form-control" id="username" v-model="user.username">
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" class="form-control" id="password" v-model="user.password">
                    </div>
                    <button type="submit" class="btn btn-default" v-on:click="login">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import auth from "../auth";

export default {
    data: function () {
        return {
            user: {}
        }
    },
    methods: {
        login: function() {
            auth.login(this, {username: this.user.username, password: this.user.password}, "/");
        }
    }
}
</script>