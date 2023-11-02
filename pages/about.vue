<template lang="pug">
.aboutpage 
    h1 About 
    p Hi, my name is Wieerwill. <br/> This project is a little hobby i realized on a fun weekend. I do not tend to make money from it in any way, so it stays free of ads or anything else. So have fun and let your creativity flow.
    p If you have any suggestions, just write me a mail to 
        a(href="mailto:jeutter@wieerwill.de") jeutter[at]wieerwill.de 
    p You can find more projects and infos about me at 
        a(href="https://wieerwill.de") wieerwill.de
    hr 
    p All Icons on the page and some of the symbols are from 
        a(href="https://fontawesome.com/") FontAwesome
    p All other symbols for the game were generated with StableDiffusion
</template>
<style scoped>
.aboutpage {
    margin: 4rem;
    margin-bottom: 1rem;
}

h1 {
    font-size: 3rem;
    text-align: center;
}

p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    line-height: 1.5;
}

@media (max-width: 768px) {
    .aboutpage {
        margin: 1rem;
    }
    h1{
        font-size: 1.5rem;
    }
    p{
        font-size: 1rem;
    }
}
</style>