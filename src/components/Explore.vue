<template>
    <div class="vector-list">
        <div v-for="item in gistList" class="vector-item">
            <img :src="item.raw">
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            gistList: []
        }
    },
    asyncData () {
        this.$progress.start()
        var gists = this.$resource('gists?access_token=58f3091138ecac414310a786412f182282a9b119')
        return gists.get().then(function (response) {
            var io = []
            for (var i=0;i<response.data.length;i++){
                this.$http.get(response.data[i].files.test_svg.raw_url).then(function (response) {
                    io.push({raw: 'data:image/svg+xml;base64,' + btoa(response.data)})
                    this.$progress.increase(1)
                })
            }
            return {
                gistList: io
            }
        },function () {
            this.$progress.failed()
        })
    },
    watch: {
        'gistList': function () {
            this.$progress.finish()
        }
    },
    ready () {
        
    }
}
</script>

<style>
.vector-list {
    width: 100%;
}

.vector-item {
    float: left;
    width: 20%;
    margin: 0 10px;
    height: 200px;
    border: 1px solid #EEE;
    border-radius: 2px;
}
</style>
