<template>
    <div class="col-xs-6">
        <form @submit.prevent="submitSearch">
            <input v-model="searchText" class="home-search" type="text" placeholder="Search for vectors">
        </form>
        {{ searchText }}
        <img :src="msg">
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '',
      searchText: ''
    }
  },
  methods: {
      submitSearch: function () {
          this.$http.get('https://gist.githubusercontent.com/anonymous/3c145d6419277b247e770fe3a24d0550/raw/5fc9c4d58663784698de45c0730dbfdea2b7d4de/logo.svg').then(function (response) {
              this.$set('msg','data:image/svg+xml;base64,' + response.data)
          },
          function (response) {
              this.$set('msg',response.data)
          }
          )
          
          console.log(this.searchText)
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
    border: 1px #e0e0e0 solid;
    border-radius: 2px;
}
</style>
