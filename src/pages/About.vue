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
        <ul class="code">
            <li>
                <i class="fa-brands fa-html5"></i>
            </li>
            <li>
                <i class="fa-brands fa-css3-alt"></i>
            </li>
            <li>
                <i class="fa-brands fa-bootstrap"></i>
            </li>
            <li>
                <i class="fa-brands fa-js"></i>
            </li>
            <li>
                <i class="fa-brands fa-vuejs"></i>
            </li>
            <li>
                <i class="fa-brands fa-php"></i>
            </li>
            <li>
                <i class="fa-brands fa-laravel"></i>
            </li>
            <li>
                <i class="fa-solid fa-database"></i>
            </li>
        </ul>
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

    .code {
        display: flex;

        li {
            padding: 10px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.3);
            margin-right: 30px;
            width: 100px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                background-color: $orange;
                transition: background-color .4s linear;
            }

            i {
                font-size: 2.7rem;
            }
        }
    }
}
</style>
