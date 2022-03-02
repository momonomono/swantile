<template>
    <section class="c-card__todo u-mt-50">
        <h1 class="c-text__title">Todo List</h1>

        <section class="c-card__todo_container u-mt-20">
            <List />
        </section>
    </section>
</template>

<script>
    import List from "../components/todo/List.vue";

    export default{
        components:{
            List
        }
    }
</script>