<template>
    <label class="c-card__label u-mb-30">
        
        <p class="u-mb-10 p-text__label">
            {{ title }}
        </p>

        <input class="p-input__form" type="text">
    </label>
</template>

<script>
    export default{
        props:{
            title : String
        }
    }
</script>