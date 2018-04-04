<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-tabs type="is-toggle" expanded v-model="activeTab">
        <b-tab-item label="Attendance">
            <attendance></attendance>
        </b-tab-item>
        <!-- <b-tab-item label="Select Plant">
            <query-result :plants="plants" @selectPlant="handleSelectPlant"></query-result>
        </b-tab-item>
        <b-tab-item label="Review Order">
        </b-tab-item> -->
    </b-tabs>
  </div>
</template>

<script>
import Attendance from './employees/Attendance'
export default {
  name: 'Employee',
  components: {
    Attendance
  },
  props: {
    msg: String
  },
  data: function(){
    return {
      activeTab: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
