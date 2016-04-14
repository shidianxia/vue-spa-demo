<template>
    <div class="col-xs-6">
        <form @submit.prevent="submitSearch">
            <input v-model="searchText" class="home-search" type="text" placeholder="Search for vectors">
        </form>
        {{ searchText }} {{ msg | json }}
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
          this.$http.get('/api/test_suite_db/_all_docs').then(function (response) {
              this.$set('msg',response.data)
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
