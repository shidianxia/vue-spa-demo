<template>
  <div id="app">
    <div class="container">
        <div class="row center-xs">
            <div class="logo"></div>
        </div>
        <div class="row center-xs">
            <search></search>
        </div>
    </div>
  </div>
</template>

<script>
import Search from './components/Search'

export default {
    data: function () {
        return { isHome: 'home' }
    },
    components: {
        Search
    }
}
</script>

<style src="assets/flexboxgrid.css"></style>

<style>
html {
    height: 100%;
}
.home {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
input:focus {
    outline: none;
}
.container {
    width: 1190px;
    margin: 0 auto;
}
.logo {
    width: 171px;
    height: 46px;
    margin-bottom: 40px;
    background: url(assets/logo.svg) no-repeat;
    background-size: contain;
}
</style>
