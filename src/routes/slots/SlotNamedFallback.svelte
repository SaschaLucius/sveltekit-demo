<div class="box">
	<h2>
		<slot name="headline">
			<em>no headline was provided</em>
		</slot>
	</h2>
	<p>
		<slot name="paragraph">
			<em>no content was provided</em>
		</slot>
	</p>
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
