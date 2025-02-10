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
                <span><i class="fa-regular fa-heart"></i> 297</span>
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
            border-radius: 16px;
            height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 20px;

            img {
                border-radius: 16px;
            }

            span {
                font-size: 1.2rem;
                color: black;

                i {
                    color: $orange;
                }
            }
        }
    }
}
</style>