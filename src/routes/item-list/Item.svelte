<script lang="ts">
    export let value: string = "";
</script>

<button
    on:click={(a) => {
        console.log(a.target);
    }}
>
    {value}
</button>
