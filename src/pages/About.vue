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

        <!-- From Uiverse.io by david-mohseni -->
        <ul class="wrapper code">
            <li class="icon code">
                <span class="tooltip">HTML5</span>
                <i class="fa-brands fa-html5"></i>
            </li>
            <li class="icon code">
                <span class="tooltip">CSS3</span>
                <i class="fa-brands fa-css3-alt"></i>
            </li>
            <li class="icon code">
                <span class="tooltip">Bootstrap</span>
                <i class="fa-brands fa-bootstrap"></i>
            </li>
            <li class="icon code">
                <span class="tooltip">JavaScript</span>
                <i class="fa-brands fa-js"></i>
            </li>
            <li class="icon code">
                <span class="tooltip">Vue.js</span>
                <i class="fa-brands fa-vuejs"></i>
            </li>
            <li class="icon code">
                <span class="tooltip">PHP</span>
                <i class="fa-brands fa-php"></i>
            </li>
            <li class="icon code">
                <span class="tooltip">Laravel</span>
                <i class="fa-brands fa-laravel"></i>
            </li>
            <li class="icon code">
                <span class="tooltip">MySQL</span>
                <i class="fa-solid fa-database"></i>
            </li>
        </ul>

    </section>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

/* From Uiverse.io by david-mohseni */
.wrapper {
    display: inline-flex;
    list-style: none;
    width: 100%;
    padding-top: 40px;
    justify-content: center;
}

.wrapper .icon {
    position: relative;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    margin: 10px;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
}

.wrapper .tooltip {
    position: absolute;
    top: 0;
    padding: 5px 8px;
    border-radius: 5px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #fff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .code:hover,
.wrapper .code:hover .tooltip,
.wrapper .code:hover .tooltip::before {
    background: $orange;
}


section {
    width: 100%;
    color: white;
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
