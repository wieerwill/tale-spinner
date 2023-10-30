<template lang="pug">
.container
  h1 Tale Spinner: The Game of Imaginative Storytelling!
  .section
    p Welcome, aspiring storytellers, to the whimsical world of Tale Spinner! Are you ready to embark on a narrative adventure filled with endless creativity, laughter, and camaraderie? Gather your fellow tale spinners, fuel your imagination, and let's begin the storytelling journey!
    img.biglogo(src="/talespinner.png" alt="Tale Spinner Logo")
  .section
    p The objective of Tale Spinner is to collaboratively create a captivating tale that not only entertains but also challenges your imaginative boundaries. Through a series of turns and iterations, each player will contribute to the unfolding story by narrating a part of it based on a random symbol they receive.
  .section
    h2 Setting Up The Game
    ol 
      li 
        strong Starting Up: 
        | Begin by navigating to the game setup page. Here, you'll set the number of players, turns, and iterations for the game.
      li 
        strong Player Count: 
        | Decide how many imaginative minds will be partaking in the storytelling extravaganza.
      li 
        strong Turn Count: 
        | Set the number of turns each player gets to add a twist to the tale.
      li 
        strong Iteration Count: 
        | Determine the number of times a player will receive a new symbol during their turn.
      li 
        strong Choose Categories:
        | Sometimes you don't want all from everything so you can choose which specific categories you want in your game. If non choosen, all are selected automatically.
      li 
        strong Hit Start: 
        | Once you've set your preferences, hit the "Start Game" button to venture into the storytelling realm!
  .section
    h2 Playing The Game
    ol 
      li 
        strong Your Turn: 
        | When it's your turn, you'll click the "Get Symbol" button to receive a random symbol.
      li 
        strong Spin Your Tale: 
        | Use the symbol as inspiration to narrate a part of the story. Your narrative could be funny, suspenseful, whimsical, or dramatic – the sky's the limit! There are no wrong stories or imaginations. Be creative.
      li 
        strong Pass The Baton: 
        | Once you've completed your iterations, pass the storytelling baton to the next player.
      li 
        strong Continue the Cycle: 
        | The game continues with each player adding to the story, inspired by their unique symbols, until all turns are completed.
    h3 Variations 
    ul 
      li You can spin your whole iterations at once an tell a story by using all your symbols at once.
      li Imagine a story for each iteration and draw a new symbol after you used your current up.
      li Create an epic story with your whole party. The first start with the intro, the next player continues the story and so on till the last player finishes your groups story with an end.
      li Be creative and play with your own rules.
  .section
    h2 Ending The Game
    ul 
      li 
        strong The Grand Finale: 
        | When the final turn and iteration are done, relish in the fantastical tale you've crafted together!
      li 
        strong Play Again: 
        | Enjoyed your storytelling adventure? Click the "Play Again" button to start afresh with a new set of creative challenges!
  .section
    p Unleash your inner bard, let the symbols guide your imagination, and create a tale that echoes through the annals of Tale Spinner! Every symbol is a doorway to endless possibilities, and every narrative a journey. So, gather around, let the symbols roll, and may your tales be as boundless as your imagination!
  div.link
    a(href="/setup")
      button Start Game
</template>
<script>
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #2c3e50;
  margin: 2rem auto;
  padding: 2rem;
  max-width: 800px;
  min-height: 100vh;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.section {
  margin-bottom: 2rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #3498db;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #e74c3c;
  text-align: center;
}

h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #3fe73c;
  text-align: center;
}

p,
li {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.biglogo{
  display:block;
  max-width: 500px;
  margin: auto;
}

.link {
  display: block;
  text-align: center;
  align-items: center;
  margin: auto;
  width: 100%;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #3498db;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2980b9;
}

@media (max-width: 768px) {
  .content {
    padding: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>
