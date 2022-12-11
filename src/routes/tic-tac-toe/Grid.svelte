<script lang="ts">
    import Square from "./Square.svelte";
    let squares = [];
    let players = ["X", "O"];
    let count = 0;
    let isFinished = false;

    function handleMessage(event) {
        if (squares[event.detail.index].getValue() == "" && !isFinished) {
            squares[event.detail.index].setValue(players[count % 2]);
            count += 1;
            let result = calculateWinner();
            if (result != null) {
                alert(result);
            }
        }
    }

    const reset = () => {
        squares.forEach((element) => element.setValue(""));
        count = 0;
        isFinished = false;
    };

    export function calculateWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                squares[a].getValue() &&
                squares[a].getValue() === squares[b].getValue() &&
                squares[a].getValue() === squares[c].getValue()
            ) {
                isFinished = true;
                return squares[a].getValue();
            }
        }
        return null;
    }
</script>

<table>
    <tbody>
        {#each Array(3) as _, row}
            <tr>
                {#each Array(3) as _, column}
                    <Square
                        index={row * 3 + column}
                        on:squareClicked={handleMessage}
                        bind:this={squares[row * 3 + column]}
                    />
                {/each}
            </tr>
        {/each}
    </tbody>
</table>

{#if isFinished}
    <button on:click={reset}> Restart </button>
{:else}
    <button on:click={reset}> Reset </button>
{/if}

<style type="text/css">
    table {
        table-layout: fixed;
        border-collapse: collapse;
        border-spacing: 0;
    }
</style>
