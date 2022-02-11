<script lang="ts">
    import {onMount} from "svelte";
    import {doTest} from '@/api/test';

    import Header from "@/components/common/Header.svelte";

    export let title = 'Home';

    let welcome:string = '';

    onMount(async () => {
        welcome = await doTest();
    })
</script>

<main>
    <Header />
    <h1>{title}</h1>
    <h3>Welcome to {title}</h3>
    <h5>{welcome}</h5>
</main>

<style lang="scss">

</style>