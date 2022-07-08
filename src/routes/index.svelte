<script lang="ts">
    import type Planet from "src/models/Planet";
    //@ts-ignore
    import PlanetView from "$lib/components/Planet.svelte";
    //@ts-ignore
    import Planets from "$lib/data/planets.json";

    let planetIndex = 0;
    let planet: Planet = Planets[planetIndex] as unknown as Planet;

    const previousPlanet = () => {
        planetIndex--;
        if (planetIndex < 0) {
            planetIndex = Planets.length - 1;
        }
        planet = Planets[planetIndex] as unknown as Planet;
    };

    const nextPlanet = () => {
        planetIndex = (planetIndex + 1) % Planets.length;
        planet = Planets[planetIndex] as unknown as Planet;
    };
</script>

<section>
    <header>
        <h1>The Solar System</h1>
        <h4>By <a target="_blank" href="https://github.com/wwessel01">Wessel van Tilburg</a></h4>
    </header>
    <div class="planet-info">
        <div class="head">
            <div class="content">
                <button on:click={previousPlanet}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </button>
                <h2>{planet.name}</h2>
                <button on:click={nextPlanet}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
            </div>
            <hr>
        </div>
        <p>
            {planet.description}
        </p>
        <div class="bottom">
            <h3>Orbital Velocity</h3>
            <p>
                {planet.velocity} km/s
            </p>
            <h3>Distance From Sun</h3>
            <p>
                {planet.distance} million km
            </p>
        </div>
    </div>
    <div class="planets">
    {#key planet}
        <PlanetView planet={planet} />
    {/key}
    </div>
</section>

<style>
    section{
        width: 100%;
        height: 100vh;

        background-color: black;
        color: white;
        display: flex;
        flex-direction: column;
        font-family: 'Inconsolata', monospace;
    }

    header{
        box-sizing: border-box;
        width: 100%;
        padding: 1em;
    }

    header > h1{
        text-align: center;
        font-size: 2em;
        margin: 0;
    }

    header > h4{
        text-align: center;
        font-size: 1em;
        font-style: italic;
        margin-top: .2em;
        margin-bottom: 0;
    }

    header > h4 > a {
        color: lightblue;
    }

    button{
        background-color: transparent;
        border: none;
        color: white;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .planet-info{
        box-sizing: border-box;
        padding: 2em;
        border: 2px solid white;
        border-radius: 0.5em;
        background-color: rgba(0, 0, 0, 0.5);

        position: absolute;
        width: 40vw;
        height: 60vh;
        top: 20vh;
        left: 50vw;
        z-index: 10;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .planet-info > .head > hr {
        margin-left: 0;
        margin-right: 0;
    }

    .planet-info > p, .planet-info > .bottom > p{
        margin: 0;
    }
    .planet-info > .bottom > h3 {
        margin-bottom: 0;
    }

    .planet-info > .head > .content{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .planets{
        flex: 1;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    @media only screen and (max-width: 768px) {
        .planet-info{
            padding: 1em;
            width: 80vw;
            height: 65vh;
            top: 6em;
            left: 10vw;
        }
        .planets{
            align-items: flex-end;
        }
    }
</style>
