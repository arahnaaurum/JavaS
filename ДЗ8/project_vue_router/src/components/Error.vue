<template>
    <div class="error-block" v-if="isVisible"> 
        <p class="error-msg">
            <button class="close-btn" @click="setError('')">&times;</button>
            {{ text }}
        </p>
    </div>
</template>

<script>

export default {
  name: "Error",

      data(){
        return {
            text: ''
        }
    },
    methods: {
      setError(error){
          this.text = error
      }
    },
    computed: {
      isVisible(){
          return this.text !== ''
      }
    },
};
</script>

