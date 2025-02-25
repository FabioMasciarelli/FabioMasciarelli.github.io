<script>
</script>


<template>
    <section>
        <header>
            <h1></h1>
            <h3>Progetto che ha come scopo principale quello di collegare tre sedi tramite tre router, uno per ogni sede
                attraverso le porte seriali.</h3>
            <img src="../assets/img/networking project/project.jpeg" alt="">
        </header>
        <div class="container" id="first">
            <p>Il primo passo è quello di andare a collegare con un routign statico i router delle sedi tramite porte
                seriali. Per fare ciò basterà andare sul router di partenza e nella sezione Routing Dinamico andremo a
                riempire i seguenti campi: Network (indirizzo IP della rete di destinazione), Subnet Mask e Next Hop
                (Indirizzo IP configurato tra le porte seriali collegate dei due router).</p>
            <img src="../assets/img/networking project/Serial.jpeg" alt="">
        </div>
        <div class="container">
            <img src="../assets/img/networking project/s1.jpeg" alt="">
            <p>Dopo aver effettuato il collegamento tra router andremo ad inserire uno switch a cui andremo a collegare
                prima di tutto un Server con DHCP(Dynamic Host Configuration Protocol), in modo che la configurazione di rete (default gateway, indirizzo IP) venga fornita in modo automatico
                a tutti i dispositivi della rete. Dovremo impostare anche i dispositivi
                su DHCP. Dopodichè potremo andare ad inserire anche un Access Point impostando un SSID che verrà poi
                anche riportato sui pc nella sezione 'wireless'.</p>
        </div>
        <div class="container">
            <p>Tra le sedi possiamo anche andare ad impostare delle VLAN(Virtual Local Area Network). In questo esempio
                vediamo una sede divisa su due piani, in cui ogni piano ha una VLAN dedicata. Per fare ciò avremo
                bisogno di tre switch. Uno switch centrale che andrà a collegarsi agli switch di ogni piano tramite il
                collegamento 'Copper Cross Over'. Dopodichè dal router principale andremo and inserire nel VLAN Database
                il numero di VLAN per ogni switch e il rispettivo nome(es. VLAN Number:90, VLAN name: piano1). Una volta
                aggiunte le VLAN al database basterà impostare ad ogni switch alla relativa porta che li collega la VLAN
                dedicata.</p>
            <img src="../assets/img/networking project/WLANs1.jpeg" alt="">
        </div>
        <div class="container">
            <img src="../assets/img/networking project/esempio VLAN.jpeg" alt="">
            <p>Per accertarsi del corretto funzionamento delle VLAN basterà provare a effettuare una simulazione in cui proveremo a mandare un pacchetto da una VLAN ad un'altra. Se tutto è stato settato correttamente possiamo vedere come il pacchetto non partirà affatto dato che non troverà la rete dell'altra VLAN.</p>
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
        background-color: rgba($main, 0.3);
        border-radius: 16px;
        padding: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 30px;

        img {
            max-height: 60%;
            border-radius: 16px;
        }

        button {
            cursor: pointer;
            border: 0;
            margin: 0 auto;
            text-align: center;
            text-decoration: none;
            padding: 15px;
            background-color: $orange;
            border-radius: 16px;
            color: white;
            width: 15%;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: transform .3s linear;
            font-size: 1.5rem;

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
            max-height: 60%;
            max-width: 60%;
            transition: transform .3s linear;

            &:hover {
                transform: scale(1.2);
            }
        }
    }
}
</style>