<script>

</script>


<template>
    <section>
        <div class="nav">
            <hr>
            <h2>CERTIFICATIONS</h2>
        </div>
        <div class="container">
            <div class="certification" @mouseover="">
                <img src="../assets/certifications/Boolean.jpg" alt="">
            </div>
        </div>
    </section>

</template>


<style scoped lang="scss">

section {
    width: 100%;
    z-index: 2;
    position: fixed;
    color: white;
    top: 10%;
    padding: 50px;

    .container {
        display: flex;

        .certification {
            width: 500px;
            aspect-ratio: 1;

            img {
                max-height: 100%;
                max-width: 100%;
                display: block;
                object-fit: contain;
            }
        }
    }
}
</style>