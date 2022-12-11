<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { fade } from "svelte/transition";
    export let index: number;
    export let value = "";
    export function setValue(val: string) {
        value = val;
    }

    export function getValue() {
        return value;
    }

    const dispatch = createEventDispatcher();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<td
    on:click={() => {
        dispatch("squareClicked", {
            index,
        });
    }}
>
    <div transition:fade={{ duration: 5000 }}>{value}</div>
</td>

<style type="text/css">
    td {
        border-color: black;
        border-style: solid;
        border-width: 1px;
        padding: 0;
        background-color: white;
        font-size: 14px;
        font-weight: bold;
        width: 25px;
        height: 25px;
        overflow: hidden;
    }
    td:hover {
        background-color: lightgray;
    }
</style>
