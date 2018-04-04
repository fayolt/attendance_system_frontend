<template>
  <div class="home">
    <employee msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Employee from '@/components/Employee.vue'
import Manager from '@/components/Manager.vue'


export default {
  name: 'home',
  components: {
    Employee,
    Manager
  }
}
</script>
