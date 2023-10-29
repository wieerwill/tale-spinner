<template lang="pug">
.layout
    header
        .logo(@click="$router.push('/')")
            img(src="/talespinner.png" alt="Tale Spinner Logo")
            h1 Tale Spinner
        a.about-link(href="/about") About
    main
        nuxt
</template>
<style scoped>
.layout {
    min-height: 90vh;
    margin: 0;
    padding: 0;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
    padding: 2rem;
    background-color: #3498db8e;
    color: #fff;
    border-radius: 1rem;
}

.logo {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.logo img {
    width: 5rem;
    max-width: 100px;
    margin-right: 1rem;
}

.about-link {
    font-size: 1.2rem;
    text-decoration: none;
    color: #fff;
}

main {
    flex-grow: 1;
    padding: 1rem;
}
</style>
