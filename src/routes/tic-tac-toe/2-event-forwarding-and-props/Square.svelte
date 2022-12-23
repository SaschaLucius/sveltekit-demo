<script lang="ts">
	import '../square.css';
	export let value: string;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<td on:click> {value} </td>
