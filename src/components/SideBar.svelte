<script>
    import { stratify } from 'd3-hierarchy'
    import App from '../App.svelte';
    import Item from './Item.svelte';
    export let data
    $: items = data
    $: tree = stratify().parentId((d) => d.parent)(items)



    function addItem(e) {
        console.log('SideBar: Add Child', e)
        items = [
            ...items, 
            {
                id: e.detail.id,
                name: e.detail.name,
                parent: e.detail.parent,
            }
        ]

    }
    function deleteItem(e) {
        console.log('Sidebar: Delete Item', e)
        items = items.filter((d) => d.id !== e.detail.id)
    }
</script>




<div class="container sidebar h-100">
    <h4 class="border">SideBar</h4>

    <Item
        node={tree}
        lastChild={!tree.children}
        on:addItem={addItem}
        on:deleteItem={deleteItem} 
    />

    <!-- <ul>
        {#each trees as branch}
            <li>
                {JSON.stringify(branch)}

            </li>
        {/each}
    </ul> -->
    <ul>
        {#each items as item }
            <div class="row border">
                <li>{item.id}</li>
                <li>{item.name}</li>
                <li>{item.parent}</li>


            </div>
        {/each}
    </ul>

    <!-- {JSON.stringify(tree)} -->

    
    <!-- {#each nodes as node }
    <div class="row border p-3 m-3">
        <p>{node.name}</p>
        {#if !node.children}
            <button on:click={addItem}>Add</button>
        {/if}
    </div>
    {/each} -->

        <!-- <p>{JSON.stringify(data.nodes)}</p> -->
</div>


<style>
    
    .sidebar {
        width: 100%;
        background-color: dark;
        height: 100%;
        border: 1px solid black;
    }
</style>