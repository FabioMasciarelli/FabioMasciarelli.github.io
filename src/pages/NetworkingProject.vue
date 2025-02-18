<script>

</script>


<template>
<section>
    <header>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus facere vel officia odio ullam modi voluptatem voluptates ab ipsum, dolor nemo quia officiis ea amet quae placeat tempore vitae. Libero?
        <a href="../assets/Final Project Networking.pkt.zip" download>Download<i class="fa-solid fa-download"></i></a>
    </header>
    <div class="container" id="first">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora possimus consectetur nobis. Nam voluptas nesciunt ratione itaque numquam, nihil quia impedit aperiam. Laboriosam, distinctio repellendus! Quo amet exercitationem doloribus?</p>
        <img src="../assets/img/networking project/Serial.jpeg" alt="">
    </div>
    <div class="container">
        <img src="../assets/img/networking project/s1.jpeg" alt="">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora possimus consectetur nobis. Nam voluptas nesciunt ratione itaque numquam, nihil quia impedit aperiam. Laboriosam, distinctio repellendus! Quo amet exercitationem doloribus?</p>
    </div>
    <div class="container">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora possimus consectetur nobis. Nam voluptas nesciunt ratione itaque numquam, nihil quia impedit aperiam. Laboriosam, distinctio repellendus! Quo amet exercitationem doloribus?</p>
        <img src="../assets/img/networking project/WLANs1.jpeg" alt="">
    </div>
    <div class="container">
        <img src="../assets/img/networking project/s3.jpeg" alt="">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora possimus consectetur nobis. Nam voluptas nesciunt ratione itaque numquam, nihil quia impedit aperiam. Laboriosam, distinctio repellendus! Quo amet exercitationem doloribus?</p>
    </div>
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

    header {
        height: 250px;
        background-color: rgba($main, 0.3);
        border-radius: 16px;
        padding: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        a {
            margin: 0 auto;
            text-align: center;
            text-decoration: none;
            padding: 15px;
            background-color: $orange;
            border-radius: 16px;
            color: white;
            width: 10%;
            display: flex;
            gap: 10px;
            transition: transform .3s linear;

            &:hover {
                transform: scale(1.1);
            }

            i {
                color: white;
                font-size: 1.3rem;
            }
        }
    }

    #first {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .container {
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
            max-width: 100%;
            transition: transform .3s linear;

            &:hover {
                transform: scale(1.1);
            }
        }
    }
}
</style>