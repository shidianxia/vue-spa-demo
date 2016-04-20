<template>
    <div class="additem">
        <form class="add" @submit="additem" style="clear:both;">
            <div class="form-item">
                <div class="form-input-tag">
                    <label class="form-label">Tag</label>
                    <input class="form-input" v-model="tag" type="text" placeholder="Beatport, iTunes, etc" />
                </div>
                <button type="submit" class="add-button" :class="{'active': isActive}">&plus;</button>
            </div>

        
        </form>
        <ul class="add-list">
            <li v-for="item in items" class="cf">
                <span class="add-title">{{ item.tag }}</span>
                <div class="modal-close add-remove" @click="remove(item)">
                    <span></span>
                    <span></span>
                </div>
            </li>
        </ul>
    </div>
    <!--<pre>{{ $data | json }}</pre>-->
</template>

<script>
    export default {
        
        props: [
            'items'
        ],

        data() {
            return {
                tags: [],
                tag: ''
            }
        },

        computed: {
            items() {
                return this.tags
            },
            isActive() {
                if(this.tag === '') {
                    return false
                } else {
                    return true
                }
            }
        },

        methods: {
            additem(e) {
                e.preventDefault();
                if (this.tag !== '') {
                    this.tags.push({
                        tag: this.tag
                    });
                }
                this.tag = '';
            },
            remove(item) {
                this.tags.$remove(item);
            }
        }

    };
</script>