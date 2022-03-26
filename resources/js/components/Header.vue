<template>
    <header class="l-header p-header">

        <div class="l-header__container">

            <section class="p-header__main">
                <img :src="'img/swanstyle.png'" class="c-image__logo">

                <nav class="p-header__nav">
                    <ul class="p-header__nav_main">
                        <List title="トップページ" />
                        <List title="メニュー" />
                        <List title="よくある質問" />
                    </ul>
                </nav>
            </section>

        </div>


    </header>
</template>

<script>
    import List from "./Header/List.vue";

    export default{
        methods:{
            hello(){
                alert('Hello');
            }
        },
        props :{
            pageNumber : String
        },
        components :{
            List
        }
    }
</script>