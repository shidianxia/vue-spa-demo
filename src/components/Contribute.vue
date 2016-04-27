<template>
    <div class="contribute row">
        <div class="upload-field col-xs">
            <upload-image :file.sync="formData.file"></upload-image>
        </div>
        <div class="col-xs">
            <div class="box">
                <div id="form">
                    <h3>Vector Details</h3>
                    <form-input
                    type="text"
                    label="Title"
                    error="false"
                    :value.sync="formData.title"
                    message=""
                    placeholder="Name of the Vector">
                    </form-input>
                    <form-input
                    type="text"
                    label="Library"
                    error="false"
                    :value.sync="formData.library"
                    message=""
                    placeholder="Library of the Vector">
                    </form-input>
                    <add-item :items.sync="formData.tags"></add-item>
                    <div class="selector-group row">
                        <div class="col-xs">
                            <div class="box">
                                <form-select label="Color" :options="colorFamily" :selected.sync="formData.colorFamily"></form-select>
                            </div>
                        </div>
                        <div class="col-xs">
                            <div class="box">
                                <form-select label="Style" :options="style" :selected.sync="formData.style"></form-select>
                            </div>
                        </div>
                        <div class="col-xs">
                            <div class="box">
                                <form-select label="Stroke" :options="stroke" :selected.sync="formData.stroke"></form-select>
                            </div>
                        </div>
                    </div>
                    <click type="general" @click="submitSVG">Done</click>
                </div>
            </div>
        </div>
        <modal-alert :show.sync="showModalAlert" title="Attention" button="OK">
            <p slot="content">Make sure you have all blanks filled.</p>
        </modal-alert>
    </div>
</template>

<script>
import UploadImage from '../lib/UploadImage'
import FormInput from '../lib/FormInput'
import AddItem from '../lib/Additem'
import FormSelect from '../lib/FormSelect'
import Click from '../lib/Button'
import ModalAlert from '../lib/ModalAlert'

export default {
    data () {
        return {
            showModalAlert: false,
            formData: {
                uuid: '',
                title: '',
                library: '',
                tags: [],
                colorFamily: 'B/W',
                style: 'Mixed',
                stroke: 'Mixed',
                file: ''
            },
            colorFamily: [
                {name:'B/W',value:'B/W'},
                {name:'Blue',value:'Blue'},
                {name:'Red',value:'Red'},
                {name:'Yellow',value:'Yellow'},
                {name:'Green',value:'Green'}
            ],
            style: [
                {name:'Mixed',value:'Mixed'},
                {name:'Google',value:'Google'},
                {name:'3D',value:'3D'},
                {name:'Flat',value:'Flat'},
                {name:'Handmade',value:'Handmade'}
            ],
            stroke: [
                {name:'Mixed',value:'Mixed'},
                {name:'Filled',value:'Filled'},
                {name:'Outline',value:'Outline'}
            ]
        }
    },
    components: {
        UploadImage,
        FormInput,
        AddItem,
        FormSelect,
        Click,
        ModalAlert
    },
    methods: {
        submitSVG () {
            if (this.formData.title && this.formData.library && this.formData.tags && this.formData.file) {
                this.$progress.start()
                this.$http.get(this.$options.config.databaseUrl + '/_uuids').then(function (response) {
                    this.$http.put(this.$options.config.databaseUrl + '/' + this.$options.config.databaseName + '/' + response.data.uuids[0], this.formData).then(function () {
                        this.$progress.finish()
                        console.log('upload success')
                    },
                    function () {
                        this.$progress.failed()
                        console.log('database put item error')
                    }
                    )
                },
                function () {
                    this.$progress.failed()
                    console.log('couchdb state error')
                }
                )
            }else {
                this.$set('showModalAlert', true)
            }
        }
    }
}
</script>

<style>
.upload-field {
    position: relative;
}
.dropzone-wrapper {
    position: absolute;
    height: 100%;
    width: 100%;
    left: -0.5rem;
}
.dropzone-preview {
    position: absolute;
    height: 100%;
    width: 100%;
    left: -0.5rem;
    display: flex;
    justify-content:center;
    align-items: center;
}
.selector-group {
    margin-top: 1rem;
}
</style>