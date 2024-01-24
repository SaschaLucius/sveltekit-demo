<div class="box" class:has-content={$$slots.paragraph}>
	<h2>
		<slot name="headline">
			<em>no headline was provided</em>
		</slot>
	</h2>
	{#if $$slots.paragraph}
		<p>
			<slot name="paragraph">
				<em>no content was provided</em>
			</slot>
		</p>
	{/if}
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

	.box.has-content::after {
		content: '';
		background-color: #ff3e00;
		border-radius: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		height: 20px;
		position: absolute;
		right: -10px;
		top: -10px;
		width: 20px;
	}
</style>
