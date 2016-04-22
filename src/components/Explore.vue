<template>
    <div class="vector-list">
        <div v-for="item in gistList" class="vector-item">
            <img v-lazy="item.doc.file">
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
        return this.$http.get(this.$options.config.databaseUrl + '/' + this.$options.config.databaseName + '/_all_docs?include_docs=true').then(function (response) {
            return {
                gistList: response.data.rows
            }
            this.$progress.finish()
        },
        function () {
            this.$progress.failed()
        }
        )
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
