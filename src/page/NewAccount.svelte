<script>
    import { link } from 'svelte-spa-router'
    let letsgo = 'далее'
</script>

<style>
    .formContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 400px;
        padding: 20px 30px;
        border-radius: 16px;
        background-color: #1D334A;
    }

    .formTitle {
        margin: 0;
        padding: 0;
        margin-bottom: 25px;
        color: #fff;
        text-align: center;
    }

    label p {
        margin: 0;
        padding: 0;
        color: #fff;
        margin-bottom: 10px;
    }

    .formLabel {
        width: 100%;
    }

    .formLabel:not(:last-child) {
        margin-bottom: 20px;
    }

    .formInput {
        height: 35px;
        width: 100%;
        border-radius: 10px;
        font-weight: 500;
        font-size: 20px;
        display: flex;
        align-items: center;
        line-height: 200%;
    }
    .formInput:focus {
        outline: none;
    }

    .formBlockReg {
        width: 100%;
        margin-bottom: 30px;
    }

    .formSubmit {
        width: 100%;
        border-radius: 10px;
        background: #BA9D5A;
        border: none;
        padding: 10px 12px;
        color: #1D334A;
        font-weight: 700;
        cursor: pointer;
    }

    .registrationDescription {
        color: #fff;
    }
    .registrationLink {
        text-decoration: underline;
    }
</style>

<form action="" class="formContainer">
    <h1 class="formTitle">Зарегистрировать аккаунт</h1>
    <div class="formBlockReg">
        <label class="formLabel">
            <p>Никнейм</p>
            <input type="email" class="formInput" placeholder="Никнейм">
        </label>
        <label class="formLabel">
            <p>Почта</p>
            <input type="email" class="formInput" placeholder="Введите почту">
        </label>
        <label class="formLabel">
            <p>Пароль</p>
            <input type="password" class="formInput" placeholder="Введите пароль">
        </label>
        <label class="formLabel">
            <p>Повторите пароль</p>
            <input type="password" class="formInput" placeholder="Повторите пароль">
        </label>
    </div>
    <input type="submit" class="formSubmit" value={letsgo.toUpperCase()}>
    <div class="registrationBlock">
        <strong class="registrationDescription">Есть аккаунта?</strong>
        <a href="/registration" class="registrationLink" use:link>Войти</a>
    </div>
</form>
