<template>
    <div id="app">
        <abzHome></abzHome>
    </div>
</template>

<script>
    import abzHome from './components/abz_home.vue'

    export default {
        name: 'app',
        components: {
            abzHome
        }
    }
</script>

<style lang="scss">
    /*#app {*/
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
    /*}*/
    @import "assets/sass/index";
</style>
