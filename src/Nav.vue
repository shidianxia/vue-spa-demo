<template>
    <header class="layout-header">
        <h1>everui</h1>
        <a v-link="{ path: '/explore' }" class="header-link">Explore</a></li>
        <a v-link="{ path: '/contribute' }" class="header-link">Contribute</a>
    </header>
    <progress :percent.sync="myProgress.percent" :options="myProgress.options"></progress>
</template>

<script>
import progress from 'vue-progressbar/vue-progressbar.vue'

export default {
    data () {
        return {
            myProgress: {
                percent: 0,
                options: {
                show: true,
                canSuccess: false,
                color: 'rgb(143, 255, 199)',
                failedColor: 'red',
                height: '2px'
                }
            }
        }
    },
    ready: function () {
        this.$progress.setHolder(this.myProgress)
    },
    components: {
        progress
    }
    
}
</script>

<style src="assets/flexboxgrid.css"></style>
<style lang="sass" src="assets/sass/app.scss"></style>

<style>
.header-link.v-link-active {
    color: #42A5F5;
    font-weight: bold;
    box-shadow: 0px -2px 0px #42A5F5 inset;
}
</style>
