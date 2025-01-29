<script>



</script>

<template>
    <main>
        <video autoplay muted loop id="myVideo">
            <source src="../assets/code.mp4" type="video/mp4">
            Your browser does not support HTML5 video.
        </video>

        <nav class="navbar">
            <img src="" alt="logo">
            <a href="">ciao</a>
            <a href="">ciao</a>
            <a href="">ciao</a>
        </nav>
    </main>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

main {
    background-color: black;
    height: 100vh;
    display: flex;
    justify-content: center;


    #myVideo {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
    }

    .navbar {
        width: 60%;
        border-bottom: 5px solid white;
        display: flex;
        justify-content: space-between;
        position: fixed;
        bottom: 50%;
        color: #f1f1f1;
        padding: 20px;

        a {
            text-decoration: none;
            color: white;
            font-size: 1.2rem;
            height: 100%;

            &:hover {
                color: $orange;
            }
        }
    }
}
</style>
