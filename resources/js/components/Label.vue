<template>
    <label class="c-card__label u-mb-30">
        <p>{{ title }}</p>
        <input class="p-input__form">
    </label>
</template>

<script>
    export default{
        props:{
            title : String
        }
    }
</script>