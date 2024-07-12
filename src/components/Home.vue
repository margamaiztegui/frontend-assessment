<template>
  <div class="main-container">
    <div class="align-center">
      <div class="greetings">
        <p>Welcome! Please click a link to see the exercises</p>
      </div>
      <div class="link-container">
        <router-link to="/first-exercise" class="black-link">First Exercise</router-link>
        <router-link to="/second-exercise" class="black-link">Second Exercise</router-link>
      </div>
    </div>
    </div>
</template>

<script>

export default {
  name: 'HomePage'
}
</script>

<style lang="scss" scoped>
.main-container {
  height: 100vh;
  display: flex;
  justify-content: center; 
  align-items: center;

  .align-center {
    width: 100%;
    max-width: 400px; 
    padding: 20px; 
    text-align: center; 
    border-radius: 8px; 

    p {
      font-size: 30px;
    }

    .link-container {
    display: flex;
    flex-direction: column;

    .black-link {
      color: black;
      font-size: 40px;
    }
  }
  }

  
}
</style>