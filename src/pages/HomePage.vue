<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
            name: "Fabio",
            displayText: "",
            isDeleting: false,
            typingSpeed: 150, // Velocità di scrittura
            deletingSpeed: 100, // Velocità di cancellazione
            pauseAfterType: 1000, // Pausa dopo la scrittura
            pauseAfterDelete: 500 // Pausa dopo la cancellazione
        };
    },
    mounted() {
        this.typeText();
    },
    methods: {
        typeText() {
            const fullText = this.name;
            if (this.isDeleting) {
                // Cancella il testo
                this.displayText = fullText.substring(0, this.displayText.length - 1);
            } else {
                // Scrivi il testo
                this.displayText = fullText.substring(0, this.displayText.length + 1);
            }

            // Determina la velocità dell'animazione
            let speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

            // Se il testo è completo, inizia a cancellare dopo una pausa
            if (!this.isDeleting && this.displayText === fullText) {
                speed = this.pauseAfterType;
                this.isDeleting = true;
            } else if (this.isDeleting && this.displayText === "") {
                speed = this.pauseAfterDelete;
                this.isDeleting = false;
            }
            // Richiama la funzione nuovamente
            setTimeout(() => this.typeText(), speed);
        }
    }
};
</script>

<template>
    <section>
        <div id="presentation" v-show="this.$route.name == 'home'">
            <h1>Hi! I'm <span>{{ displayText }}</span><span class="cursor">|</span>.</h1>
            <h3>Full Stack Web Developer</h3>
        </div>
    </section>
</template>

<style scoped lang="scss">
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
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #presentation {
        z-index: 1;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 60%;
        animation: slide-down 1s ease-out;

        h1 {
            font-size: 4rem;

            span {
                color: $orange;
            }
        }

        h3 {
            font-size: 2.3rem;
        }
    }
}
</style>