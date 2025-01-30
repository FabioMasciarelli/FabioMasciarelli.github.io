<script>



</script>

<template>
    <main>
        <div id="presentation">
            <h1>Hi! I'm <span>Fabio</span>,</h1>
            <h3>Full Stack Web Developer</h3>
        </div>
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
    background-color: transparent;
    display: flex;
    justify-content: center;

    #presentation {
        position: fixed;
        color: white;
        top: 30%;
        left: 25%;

        h1 {
            font-size: 4rem;

            span {
                color: $orange;
            }
        }

        h3 {
            font-size: 2rem;
        }
    }

    .navbar {
        width: 60%;
        border-bottom: 5px solid white;
        display: flex;
        justify-content: space-between;
        position: fixed;
        bottom: 35%;
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
