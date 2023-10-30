<template lang="pug">
.game-setup
    h1 Setup Your Game
    div
        .input-group
            label(for="playerCount") Players
            .counter
                button.minus(tabindex='-1' @click="playerCount > 1 ? playerCount-- : null") -
                input(type="number" id="playerCount" v-model.number="playerCount" min="1" readonly)
                button.plus(tabindex='-1' @click="playerCount++") +
            small Number of players participating in the game.
        .input-group
            label(for="turnCount") Turns
            .counter
                button.minus(@click="turnCount > 1 ? turnCount-- : null") -
                input(type="number" id="turnCount" v-model.number="turnCount" min="1" readonly)
                button.plus(@click="turnCount++") +
            small Number of turns each player gets to narrate a part of the story.
        .input-group
            label(for="iterationCount") Iterations
            .counter
                button.minus(@click="iterationCount > 1 ? iterationCount-- : null") -
                input(type="number" id="iterationCount" v-model.number="iterationCount" min="1" readonly)
                button.plus(@click="iterationCount++") +
            small Number of iterations in a single turn for each player.
        .input-group
            label Categories
            br
            small Choose which categories you want to use in your game.
            div.category(v-for="(category, index) in availableCategories" :key="index")
                input(type="checkbox" :value="category" v-model="selectedCategories" :id="category")
                label(:for="category") {{ category }}
        button.submit(type="submit" @click="startGame") Start Game
</template>
<script>
import symbols from '~/assets/symbols.json';
export default {
    data() {
        const availableCategories = Array.from(new Set(symbols.map(symbol => {
            if (symbol.category) {
                return symbol.category
            } else {
                return "Standard"
            }
        })));
        return {
            playerCount: 2,
            turnCount: 2,
            iterationCount: 3,
            availableCategories,
            selectedCategories: [],
        }
    },
    watch: {
        selectedCategories(newVal) {
            this.$store.commit('setSelectedCategories', newVal);
        },
    },
    methods: {
        startGame() {
            const gameSettings = {
                playerCount: this.playerCount,
                turnCount: this.turnCount,
                iterationCount: this.iterationCount,
            };
            this.$store.dispatch('initializeGame', gameSettings);
            this.$router.push('/gameplay');  // Assuming the gameplay page is at this route
        }
    },
}
</script>
<style scoped>
.game-setup {
    display: block;
    width: 80%;
    margin: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
}

h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.input-group {
    display: block;
    width: 80%;
    max-width: 300px;
    margin: auto;
    margin-bottom: 2rem;
    width: 100%;
}

label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    font-size: 2rem;
    color: #3498db;
}

.category {
    margin-bottom: 3rem;
}

.category label {
    font-size: 1rem;
    margin: initial;
    font-weight: normal;
    color: black;
}

.counter {
    display: block;
    max-width: 100%;
    margin: 0 1rem;
}

.counter>button {
    display: inline-block;
    background-color: #fff;
    border: 0;
    font-size: 2rem;
    width: 24%;
    min-height: 2rem;
    margin: 0;
    padding: 0;
}

.counter>button:hover {
    background-color: #3498db;
    border-radius: 1rem;
    color: #fff;
}

.counter>input {
    display: inline-block;
    background-color: #fff;
    border: 1px solid #a1a1a1;
    font-size: 1.25rem;
    width: 50%;
    min-height: 2rem;
    margin: 0;
    padding: 0;
    text-align: center;
}

.counter>input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.counter>input[type=number] {
    appearance: textfield;
    -moz-appearance: textfield;
}

button.submit {
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #3498db;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s;
}

button.submit:hover {
    background-color: #2980b9;
}
</style>
