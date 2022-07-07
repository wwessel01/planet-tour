<script lang="ts">
    import type Planet from "src/models/Planet";
    import { fly } from "svelte/transition";
    export let planet: Planet;
</script>

<img
    in:fly={{ x: window.innerWidth, duration: 800 }}
    out:fly={{ x: -window.innerWidth, duration: 800 }}
    src={planet.image}
    alt={planet.name}
/>

<style>
    img {
        box-sizing: border-box;
        width: 50vw;
        position: absolute;
        padding: 2em;
    }

    @media only screen and (max-width: 768px) {
        img{
            width: 100vw;
        }
    }
</style>
