<template>
  <div id="app">
    <div class="container">
      <div class="header clearfix">
      <Input></Input>
      </div>
      <div class="container theme-showcase">
      <List></List>
      </div>
    </div>
  </div>
</template>
<script>
  import List from  './list.vue'
  import Input from './input.vue'
  export default {
	  components : { 
		List,
		Input 
	  },// 注册组件
	  name: 'app',
	  data () {
		  return {
			
		  }
	  },
	  
}
</script>