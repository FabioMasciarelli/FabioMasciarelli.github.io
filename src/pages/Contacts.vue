<script>



</script>

<template>
    <section>
        <div class="nav">
            <hr>
            <h2>CONTACTS</h2>
        </div>
        <h3>Let's stay in touch!</h3>
        <div class="contacts">
            <h4><a href="https://www.linkedin.com/in/fabio-masciarelli-1605b7304/"><i
                        class="fa-brands fa-linkedin"></i></a></h4>
            <h4><a href="https://github.com/FabioMasciarelli"><i class="fa-brands fa-square-github"></i></a></h4>
            <h4><a href="mailto:fabiomasciarelliwd@gmail.com"><i class="fa-solid fa-envelope"></i></a></h4>
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

    h3 {
        text-align: center;
    }

    .contacts {
        margin: 100px auto;
        width: 60%;
        display: flex;
        justify-content: space-between;

        h4 {
            background-color: rgba(255, 255, 255, 0.3);
            padding: 10px;
            border-radius: 50%;

            &:hover {
                background-color: $orange;
                transition: background-color .4s linear;
            }

            &:active {
                transform: scale(1.4);
                transition: transform .3s linear;
            }

            a {
                color: white;

                i {
                    font-size: 2.7rem;
                }
            }
        }
    }
}
</style>
