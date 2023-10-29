// pages/gameplay.vue
<template lang="pug">
.gameplay
    .info-row
        .info-column Current Player: {{ currentPlayerName }}
        .info-column Current Turn: {{ currentTurn }} / {{ totalTurns }}
        .info-column Current Iteration: {{ currentIteration }} / {{ totalIterations }}
    .symbol-display
        p(v-if="currentSymbol") {{ currentSymbol }}
    //.story
        textarea(v-model="currentStory" readonly)
    .controls
        button(@click="randomizeSymbol" :disabled="isIterationEnd || isGameFinished") Get Symbol
        button(@click="nextPlayer" :disabled="!isIterationEnd") Next Player
    .player-info
        table
            tr(v-for="(player, index) in players" :key="index" :class="{ 'current-player': currentPlayer === index + 1 }")
                td
                    input(v-if="player.isEditing" v-model="player.name" @blur="player.isEditing = false")
                    span(v-else @click="player.isEditing = true") {{ player.name }}
                    button(@click="player.isEditing = !player.isEditing") Edit
                td(v-for="(symbol, index) in player.symbols" :key="index") {{ symbol }}
    .game-over(v-if="isGameFinished")
        h2 There are no turns left
        button(@click="playAgain") Play Again
</template>
<script>
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
    },
    created() {
        const { playerCount, turnCount, iterationCount } = this.$store.state.gameSettings;
        if (!playerCount || !turnCount || !iterationCount) {
            this.$router.push('/setup');
        }
    },
    methods: {
        randomizeSymbol() {
            const symbols = ['🌟', '🚀', '👑', '🐉', '🎩', '🔮', '🏰', '🌈', '🦄'];
            this.currentSymbol = symbols[Math.floor(Math.random() * symbols.length)];
            this.players[this.currentPlayer - 1].symbols.push(this.currentSymbol);
            this.currentIteration++;
            this.isIterationEnd = this.currentIteration === this.totalIterations;
        },
        nextPlayer() {
            if (this.currentPlayer < this.totalPlayers) {
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
        playAgain() {
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

.current-player {
    background-color: #d1f2eb;
}
</style>
