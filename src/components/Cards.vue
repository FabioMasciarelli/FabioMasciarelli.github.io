<script>


</script>


<template>
    <li class="card">
        <img src="../assets/img/projects/logisticSite.jpeg" alt="logistic-site">
        <a class="description" href="https://transportsite.netlify.app">Logistic Site</a>
    </li>
    <li class="card">
        <img src="../assets/img/projects/networking.jpg" alt="networking-project">
        <router-link :to="{ name: 'networking' }" class="description">Networking</router-link>
    </li>
    <li class="card"></li>
    <li class="card"></li>
    <li class="card"></li>
    <li class="card"></li>

</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;


@keyframes slide-up {
    from {
        bottom: -20px;
        opacity: 0;
    }

    to {
        bottom: 0;
        opacity: 1;
    }
}

.card {
    width: calc(100% / 3 - 40px);
    background-color: $main;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;

    &:hover {
        box-shadow: 0 0 6px 6px rgba($main, 0.8);
        transition: all .6s ease-out;

        .description {
            display: block;
        }
    }

    img {
        height: 100%;
    }

    .description {
        display: none;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 80px;
        padding: 10px;
        background-color: $main;
        animation: slide-up .6s ease-out;
        color: black;
        text-decoration: none;
        text-align: center;
    }
}
</style>