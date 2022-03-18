<template>
    <div class="l-form">
        <section class="p-card__form">
            <h2 class="">予約フォーム</h2>

            <form>
                
                <Label 
                    title = "お名前"
                />

                <Label 
                    title = "お名前フリガナ"
                />

                <Label 
                    title = "電話番号"
                />

                <Label 
                    title = "メールアドレス"
                />


            </form>
        </section>
    </div>
</template>

<script>
    import Label from "../components/Label.vue";

    export default{
        components : {
            Label
        }    
    }
</script>