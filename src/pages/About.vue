<script>



</script>

<template>
    <section>
        <div class="nav">
            <hr>
            <h2>ABOUT ME</h2>
        </div>
        <div class="description">
            <p>Hi, my name is Fabio Masciarelli, i'm from Italy and i have 21 y.o.</p>
        </div>
        <div class="nav">
            <hr>
            <h2>CODE</h2>
        </div>
        <div class="code">

        </div>

    </section>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

section {
    width: 100%;
    z-index: 2;
    position: fixed;
    color: white;
    top: 10%;
    padding: 50px;

    .description {
        margin-bottom: 100px;
        p {
            a {
                color: $orange;
            }
        }
    }
}
</style>
