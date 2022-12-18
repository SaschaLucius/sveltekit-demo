<script lang="ts">
	export let label: string;
	// need to include name,
	// this will be the key in your json
	export let name: string;
	export let type: string;
</script>

<label for={name}>{label}</label>
<input id={name} {name} {type} />
