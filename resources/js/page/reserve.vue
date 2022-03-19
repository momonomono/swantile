<template>
    <div class="l-form">
        <section class="p-card__form">

            <h2 class="p-text__title">予約フォーム</h2>

                <form>
            <div class="u-mt-50">
                    <Label 
                        title = "お名前"
                    />

                    <Label 
                        title = "お名前(フリガナ)"
                    />

                    <Label 
                        title = "電話番号"
                    />

                    <Label 
                        title = "メールアドレス"
                    />

            </div>    
                    <button class="p-input__button c-input__form_button">
                        予約
                    </button>
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