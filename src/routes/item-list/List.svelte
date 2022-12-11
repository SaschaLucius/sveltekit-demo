<script lang="ts">
    import Item from "./Item.svelte";
    export let items: { id: number; name: string; isFemale: boolean }[] = [];
</script>

{#each items as item (item.id)}
    <Item
        value="{item.name} is a {item.isFemale
            ? 'woman'
            : 'man'} and has id {item.id}"
    />
{/each}
