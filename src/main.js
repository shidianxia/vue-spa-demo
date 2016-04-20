import Vue from 'vue'
import VueResource from 'vue-resource'
import VueAsyncData from 'vue-async-data'
import VueRouter from 'vue-router'
import Progress from 'vue-progressbar'
import Nav from './Nav'
import Explore from './components/Explore'
import Contribute from './components/Contribute'

Vue.use(VueResource)
Vue.use(VueAsyncData)
Vue.use(VueRouter)
Vue.use(Progress)

Vue.http.options.root = 'https://api.github.com'

Vue.mixin({
    config: require('./config.json')
})

/* eslint-disable no-new */
var App = Vue.extend({
    components: {
        'v-nav': Nav
    }
})

var router = new VueRouter()

router.map({
    '/explore': {
        component: Explore
    },

    '/contribute': {
        component: Contribute
    }
})

//开始路由
router.start(App, 'body')

router.go('/contribute')
