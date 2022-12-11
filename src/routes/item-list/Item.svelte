<script lang="ts">
	export let value = '';
</script>

<button
	on:click={(a) => {
		console.log(a.target);
	}}
>
	{value}
</button>
