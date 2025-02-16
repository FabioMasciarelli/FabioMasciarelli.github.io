<script>



</script>

<template>
    <section>
        <div class="nav">
            <hr>
            <h2>CONTACT</h2>
        </div>
        <h3>Let's get in touch!</h3>
        <!-- From Uiverse.io by david-mohseni -->
        <ul class="wrapper contacts">
            <li class="icon contact">
                <span class="tooltip">Linkedin</span>
                <a href="https://www.linkedin.com/in/fabio-masciarelli-1605b7304/"><i
                        class="fa-brands fa-linkedin"></i></a>
            </li>
            <li class="icon contact">
                <span class="tooltip">Github</span>
                <a href="https://github.com/FabioMasciarelli"><i class="fa-brands fa-square-github"></i></a>
            </li>
            <li class="icon contact">
                <span class="tooltip">Email</span>
                <a href="mailto:fabiomasciarelliwd@gmail.com"><i class="fa-solid fa-envelope"></i></a>
            </li>
        </ul>

        <footer>
            <i class="fa-regular fa-copyright"></i> 2025 | Fabio Masciarelli | All rights are reserved
        </footer>
    </section>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

.wrapper {
    display: inline-flex;
    list-style: none;
    width: 100%;
    padding-top: 40px;
    justify-content: center;
}

.wrapper .icon {
    position: relative;
    background-color: rgba($main, 0.3);
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

.wrapper .contact:hover,
.wrapper .contact:hover .tooltip,
.wrapper .contact:hover .tooltip::before {
    background: $orange;
    color: white;
}

@keyframes slide-down {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

section {
    width: 100%;
    color: white;
    padding: 50px;
    animation: slide-down 1s ease-out;

    h3 {
        text-align: center;
    }

    .contacts {
        margin: 100px auto;
        width: 60%;
        display: flex;
        justify-content: space-between;

        li {
            background-color: rgba($main, 0.3);
            padding: 10px;
            border-radius: 50%;
            width: 100px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;

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

                    &:hover {
                        color: white;
                    }
                }
            }
        }
    }
}

footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
</style>
