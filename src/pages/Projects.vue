<script>

</script>

<template>
    <section>
        <div class="nav">
            <hr>
            <h2>PROJECTS</h2>
        </div>
        <ul class="projects">
            <li class="card">
                <img src="../assets/img/fm.jpg" alt="">
                <div class="description"><a href="">Transport Site</a></div>
            </li>
            <li class="card"></li>
            <li class="card"></li>
            <li class="card"></li>
            <li class="card"></li>
            <li class="card"></li>
        </ul>
    </section>
</template>


<style lang="scss" scoped>
@use "../style/partials/variables" as *;

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

section {
    padding: 50px;
    animation: slide-down 1s ease-out;

    .projects {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        list-style-type: none;

        .card {
            width: calc(100% / 3 - 40px);
            background-color: $main;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            position: relative;

            &:hover {
                box-shadow: 0 0 20px rgba($orange, 0.6);
                transition: all .6s ease-out;

                .description {
                    display: block;
                }
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
                
                a {
                    color: black;
                    text-decoration: none;
                }
            }
        }
    }
}
</style>