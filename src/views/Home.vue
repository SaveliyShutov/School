<template>
  <div class="home">
    <Form/>
    <Mainpage/>
  </div>
</template>

<script>


import Mainpage from '@/components/Mainpage.vue'
import Form from '../components/form.vue'

export default {
  name: 'Home',
  components: {
    Form,
    Mainpage
    
    
  }
}
</script>
