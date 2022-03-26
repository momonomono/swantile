<template>
    <li class="p-header__nav_list">
        <a>{{ title }}</a>
    </li>
</template>

<script>
    export default{
        props :{
            title : String,
        },
    }
</script>