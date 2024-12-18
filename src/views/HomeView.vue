<!-- eslint-disable prettier/prettier -->
<template>
    <section>
        <div class="home">
            <Home />
        </div>
    </section>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";

export default {
    name: "HomeView",
    components: {
        Home,
    },
};
</script>
<!-- eslint-disable prettier/prettier -->

<style>
section {
    margin-bottom: -48px;
}
</style>
