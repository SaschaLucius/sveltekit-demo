<script>
	import Box from './Slot.svelte';
	import BoxContentDiv from './SlotContentDiv.svelte';
	import BoxContentNamed from './SlotContentNamed.svelte';
	import BoxContentSpan from './SlotContentSpan.svelte';
	import BoxFallback from './SlotFallback.svelte';
	import BoxNamed from './SlotNamed.svelte';
	import BoxNamedCheckContent from './SlotNamedCheckContent.svelte';
	import BoxNamedFallback from './SlotNamedCheckContent.svelte';

	let newData = ' new content';
</script>

<svelte:head>
	<title>Tic-Tac-Toe</title>
	<meta name="description" content="Tic-Tac-Toe game" />
</svelte:head>

<h1>Tic-Tac-Toe game</h1>

<Box>
	<h2>Hello!</h2>
	<p>This is a box. It can contain anything.</p>
</Box>

<BoxFallback>
	<h2>Hello!</h2>
	<p>This is a box. It can contain anything.</p>
</BoxFallback>

<BoxFallback />

<BoxNamed>
	<span slot="headline"> Hello! </span>
	<span slot="paragraph"> This is a box. It can contain anything. </span>
</BoxNamed>

<BoxNamedFallback>
	<span slot="headline"> Hello! </span>
	<span slot="paragraph"> This is a box. It can contain anything. </span>
</BoxNamedFallback>

<BoxNamedFallback />

<BoxNamedCheckContent>
	<span slot="headline"> Hello! </span>
	<span slot="paragraph"> This is a box. It can contain anything. </span>
</BoxNamedCheckContent>

<BoxNamedCheckContent>
	<span slot="headline"> Hello! </span>
</BoxNamedCheckContent>

<BoxContentSpan>This text goes in the slot</BoxContentSpan>

<BoxContentNamed>
	<svelte:fragment slot="named-slot" let:content={newData}>
		{newData}
	</svelte:fragment>
</BoxContentNamed>

<BoxContentDiv>
	<h2>Hello!</h2>
	<p>This is a box. It can contain anything.</p>
</BoxContentDiv>
