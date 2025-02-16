<script>

</script>


<template>
<section>
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora possimus consectetur nobis. Nam voluptas nesciunt ratione itaque numquam, nihil quia impedit aperiam. Laboriosam, distinctio repellendus! Quo amet exercitationem doloribus?</p>
        <img src="../assets/img/projects/b-doctor.jpeg" alt="">
    </div>
    <div></div>
    <div></div>
    <div></div>
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
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 50px;
    animation: slide-down 1s ease-out;

    div {
        background-color: rgba($main, 0.3);
        height: 500px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 40px;

        img {
            border-radius: 16px;
            max-height: 100%;
            transition: transform .3s linear;

            &:hover {
                transform: scale(1.2);
            }
        }
    }
}
</style>