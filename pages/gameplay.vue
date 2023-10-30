// pages/gameplay.vue
<template lang="pug">
.gameplay
    .info-row
        .info-column Current Player: {{ currentPlayerName }}
        .info-column Current Turn: {{ currentTurn }} / {{ totalTurns }}
        .info-column Current Iteration: {{ currentIteration }} / {{ totalIterations }}
    .symbol-frame
        img(v-if="currentSymbol" :src="currentSymbol.path" :alt="currentSymbol.name")
        p(v-if="!currentSymbol") ?
    .controls
        button(@click="randomizeSymbol" :disabled="(isIterationEnd || isGameFinished)") Get Symbol
        button(@click="nextPlayer" :disabled="!isIterationEnd || isGameFinished") Next Player
    .player-info
        table
            tr(v-for="(player, index) in players" :key="index" :class="{ 'current-player': currentPlayer === index + 1 }")
                td.player
                    button.edit(@click="player.isEditing = !player.isEditing")
                        img.edit(v-if="!player.isEditing" src="~/assets/icons/pen.svg" alt="Edit" width="16" height="8")
                        img.edit(v-if="player.isEditing" src="~/assets/icons/floppy.svg" alt="Edit" width="16" height="8")
                    input.edit(v-if="player.isEditing" v-model="player.name" @blur="player.isEditing = false")
                    span(v-else @click="player.isEditing = true") {{ player.name }}
                td.symbols-cell
                    img(v-for="(symbol, index) in player.symbols" :key="index" :src="symbol.path" :alt="symbol.name")
    .game-over(v-if="isGameFinished")
        h2 There are no turns left
        button(@click="exitGame") Play Again
    .exit-game(v-else)
        button(@click="exitGame") Exit Game
</template>
<script>
import symbols from '~/assets/symbols.json';

export default {
    data() {
        return {
            currentSymbol: '',
            currentStory: '',
            currentPlayer: 1,
            currentTurn: 1,
            currentIteration: 0,
            isIterationEnd: false,
            isGameFinished: false,
            players: Array.from({ length: this.$store.state.gameSettings.playerCount }, (_, index) => ({
                name: `Player ${index + 1}`,
                symbols: [],
                isEditing: false,
            })),
            symbols,
        }
    },
    computed: {
        totalPlayers() {
            return this.$store.state.gameSettings.playerCount;
        },
        totalTurns() {
            return this.$store.state.gameSettings.turnCount;
        },
        totalIterations() {
            return this.$store.state.gameSettings.iterationCount;
        },
        currentPlayerName() {
            return this.players[this.currentPlayer - 1]?.name || '';
        },
        filteredSymbols() {
            const selectedCategories = this.$store.state.selectedCategories;
            if (selectedCategories.length === 0) {
                return symbols
            } else {
                return symbols.filter(symbol => selectedCategories.includes(symbol.category));
            }
        },
    },
    created() {
        const { playerCount, turnCount, iterationCount } = this.$store.state.gameSettings;
        if (!playerCount || !turnCount || !iterationCount) {
            this.$router.push('/setup');
        }
    },
    methods: {
        randomizeSymbol() {
            if (this.filteredSymbols.length === 0) {
                alert('No categories selected. Please go back and select categories.');
                return;
            }
            if (this.isGameFinished) {
                return
            }
            const symbolIndex = Math.floor(Math.random() * this.filteredSymbols.length);
            this.currentSymbol = this.filteredSymbols[symbolIndex];
            this.players[this.currentPlayer - 1].symbols.push(this.currentSymbol);
            this.currentIteration++;
            this.isIterationEnd = this.currentIteration === this.totalIterations;
        },
        nextPlayer() {
            if (this.isGameFinished) {
                return
            } else if (this.currentPlayer < this.totalPlayers) {
                this.currentPlayer++;
            } else if (this.currentTurn < this.totalTurns) {
                this.currentTurn++;
                this.currentPlayer = 1;
            } else {
                this.isGameFinished = true;
            }
            this.currentIteration = 0;
            this.isIterationEnd = false;
        },
        exitGame() {
            this.$store.commit('resetGame');  // reset Vuex store
            // reset local data
            this.currentSymbol = '';
            this.currentStory = '';
            this.currentPlayer = 1;
            this.currentTurn = 1;
            this.currentIteration = 0;
            this.isGameFinished = false;
            this.isIterationEnd = false;
            this.$router.push('/setup');
        },
    },
}
</script>

<style scoped>
.info-row {
    display: flex;
    justify-content: space-around;
    margin-bottom: 2rem;
}

.info-column {
    flex: 1;
    text-align: center;
    padding: 1rem;
    background-color: #ecf0f1;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.controls {
    margin-bottom: 2rem;
    text-align: center;
}

.player-info {
    margin-top: 2rem;
    width: 100%;
}

button.edit {
    background-color: rgba(65, 220, 65, 0.5);
    color: #fff;
    border-radius: 5px;
    margin: .1rem .8rem .1rem .1rem;
    padding: .1rem;
}

img.edit {
    padding: .1rem;
    margin: 0;
    min-width: 1rem;
    max-width: 1rem;
    width: 1rem;
    min-height: 1rem;
    height: 1rem;
    max-height: 1rem;
}

input.edit {
    font-size: 1.5rem;
    line-height: 2rem;
    min-height: 1.5rem;
}

.symbol-frame {
    display:block;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
    margin: 1rem auto;
    background-color: #fafcfc;
    border: 2px solid #bdc3c7;
    border-radius: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    min-width: 4rem;
    max-width: 90%;
    max-width: 10rem;
    min-height: 4rem;
    max-height: 100%;
    max-height: 10rem;
    align-items: center;
}

.symbol-frame img {
    min-height: 4rem;
    max-width: 100%;
    max-width: 10rem;
    min-height: 4rem;
    max-height: 100%;
    max-height: 10rem;
}

.symbol-frame p {
    font-size: 3rem;
    margin: 0;
    padding: 0;
}

.current-player {
    background-color: #29cca93b;
}

table {
    width: 100%;
}

tr {
    border-bottom: 2px solid #d1f2eb;
    font-size: 1.5rem;
}

td {
    padding: 1rem;
    text-align: left;
}

.symbols-cell img {
    max-width: 2rem;
    max-height: 2rem;
    padding: 0 .2rem;
}

button {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    background-color: #3498db;
    border: none;
    border-radius: 5%;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #2980b9;
}

button:disabled,
button[disabled],
button[disabled]:hover {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: initial;
}


.game-over,
.exit-game {
    display: block;
    text-align: center;
    margin: 3rem auto;
}

.game-over h2 {
    margin-bottom: 0;
}

.game-over button {
    font-size: 2.5rem;
    font-weight: bold;
    border-radius: 5%;
    padding: 1rem 2rem;
}

.exit-game button {
    background-color: #ff6f4f9c;
    border: none;
    margin: 5rem auto;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: bold;
    color: black;
    cursor: pointer;
    border-radius: 0.5rem;
    transition: background-color 0.3s;
}

.exit-game button:hover {
    background-color: #d23c16;
    color: white;
}
</style>
