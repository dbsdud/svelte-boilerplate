<script>
    import { link } from 'svelte-spa-router';
    import active from 'svelte-spa-router/active';
</script>

<header>
    <a href="/"
       use:link
       use:active>
        Home
    </a>
    <a href="/about"
       use:link
       use:active>
        About
    </a>
    <a href="/dashboard"
       use:link
       use:active>
        Dashboard
    </a>
</header>