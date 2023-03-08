<script>
    import PageHeader from "$lib/base/PageHeader.svelte";
    import ContentWrapper from "$lib/base/ContentWrapper.svelte";
    import { pb } from "$lib/pocketbase"
    import { onMount } from "svelte";

    // const labs = [
    //     {
    //         "title": "Flask API",
    //         "description": "Anim proident in aute dolor Lorem ex culpa consequat elit in ex dolor.",
    //         "img": "https://assets.cdn.prod.twilio.com/original_images/flask-oauth.png",
    //         "github": "https://github.com",
    //         "tags": [
    //             "development",
    //             "api",
    //             "backend"
    //         ]
    //     },
    //     {
    //         "title": "Flask API",
    //         "description": "Anim proident in aute dolor Lorem ex culpa consequat elit in ex dolor.",
    //         "img": "https://assets.cdn.prod.twilio.com/original_images/flask-oauth.png",
    //         "github": "https://github.com",
    //         "tags": [
    //             "development",
    //             "api",
    //             "backend"
    //         ]
    //     },
    //     {
    //         "title": "Flask API",
    //         "description": "Anim proident in aute dolor Lorem ex culpa consequat elit in ex dolor.",
    //         "img": "https://assets.cdn.prod.twilio.com/original_images/flask-oauth.png",
    //         "github": "https://github.com",
    //         "tags": [
    //             "development",
    //             "api",
    //             "backend"
    //         ]
    //     },
    //     {
    //         "title": "Flask API",
    //         "description": "Anim proident in aute dolor Lorem ex culpa consequat elit in ex dolor.",
    //         "img": "https://assets.cdn.prod.twilio.com/original_images/flask-oauth.png",
    //         "github": "https://github.com",
    //         "tags": [
    //             "development",
    //             "api",
    //             "backend"
    //         ]
    //     },
    // ]

    let labs = []

    onMount(async () => {
        const records = await pb.collection('labs').getFullList({
            sort: '-created',
        });

        labs = records
    })

    

</script>

<PageHeader>Labs</PageHeader>

<div class="px-20 py-10 flex flex-wrap jus gap-10">
    {#each labs as lab}
        <div class="card w-[30em] bg-base-100 shadow-xl image-full">
            <figure><img src={lab.img} alt="Lab-item" /></figure>
            <div class="card-body">
            <div class="flex align-middle items-center ">
                <h2 class="card-title w-60">{lab.title}</h2>
                <div class="flex justify-end w-full gap-3 flex-wrap">
                    {#each lab.tags as tag}
                        <div class="badge badge-outline">{tag}</div>                         
                    {/each}
                </div>
            </div>
            <p>{lab.description}</p>
            <div class="card-actions justify-end">                
                <a href={lab.github} class="btn btn-primary">github</a>
            </div>
            </div>
        </div>
    {/each}
</div>