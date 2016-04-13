<template>
    <div class="col-xs-6">
        <input class="home-search" tyoe="text" placeholder="Search for vectors">
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style scoped>
.home-search {
    width: 100%;
    padding: 0 10px;
    font-size: 16px;
    height: 44px;
    line-height: 44px;
    border: 1px #e0e0e0 solid;
    border-radius: 2px;
}
</style>
