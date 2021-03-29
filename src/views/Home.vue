<template>
  <div class="home">
    <AnswerForm/>
    <QuestionForm/>
    <Reg/>
    <Log/>
    <Answers/>
  </div>
</template>

<script>


import AnswerForm from '@/components/Mainpage.vue'
import QuestionForm from '../components/form.vue'
import Reg from '../components/reg.vue'
import Log from '../components/log.vue'
import Answers from '../components/about.vue'


export default {
  name: 'Home',
  components: {
    QuestionForm,
    AnswerForm,
    Reg,
    Log,
    Answers
    
    
  }
}
</script>
