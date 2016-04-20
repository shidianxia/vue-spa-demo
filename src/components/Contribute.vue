<template>
    <div class="contribute row">
        <div class="upload-field col-xs">
            <upload-image></upload-image>
        </div>
        <div class="col-xs">
            <div class="box">
                <div id="form">
                    <h3>Vector Details</h3>
                    <form-input
                    type="text"
                    label="Title"
                    error="false"
                    value=""
                    message=""
                    placeholder="Name of the Vector">
                    </form-input>
                    <form-input
                    type="text"
                    label="Library"
                    error="false"
                    value=""
                    message=""
                    placeholder="Library of the Vector">
                    </form-input>
                    <add-item></add-item>
                    <div class="selector-group row">
                        <div class="col-xs">
                            <div class="box">
                                <form-select label="Color" :options="colorFamily" :selected="colorFamily[0].name"></form-select>
                            </div>
                        </div>
                        <div class="col-xs">
                            <div class="box">
                                <form-select label="Style" :options="style" :selected="style[0].name"></form-select>
                            </div>
                        </div>
                        <div class="col-xs">
                            <div class="box">
                                <form-select label="Stroke" :options="Stroke" :selected="Stroke[0].name"></form-select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UploadImage from '../lib/UploadImage'
import FormInput from '../lib/FormInput'
import AddItem from '../lib/Additem'
import FormSelect from '../lib/FormSelect'

export default {
    data () {
        return {
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
            Stroke: [
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
        FormSelect
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