<script lang="ts">
	let content = 'no content was provided';
	$: console.log(content);
</script>

<div class="box">
	<slot>
		{content}
	</slot>
</div>

<style>
	.box {
		width: 300px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
		padding: 1em;
		margin: 0 0 1em 0;
	}
</style>
