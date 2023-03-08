<script>
    import PageHeader from "$lib/base/PageHeader.svelte";
    import ContentWrapper from "$lib/base/ContentWrapper.svelte";
    import { pb } from "$lib/pocketbase"
    import { onMount } from "svelte";

    let schedule = []
    
    onMount(async () => {
        const records = await pb.collection('schedule').getFullList({
            sort: '-created',
        });

        schedule = records
    })

    // const schedule = [
    //     {
    //         "topic": "Linux Fendementals",
    //         "leader": "Joff Giligan",
    //         "date": "March 21, 8pm",
    //         "loc": "Mallory 314"
    //     },
    //     {
    //         "topic": "Linux Fendementals",
    //         "leader": "Joff Giligan",
    //         "date": "March 21, 8pm",
    //         "loc": "Mallory 314"
    //     },
    //     {
    //         "topic": "Linux Fendementals",
    //         "leader": "Joff Giligan",
    //         "date": "March 21, 8pm",
    //         "loc": "Mallory 314"
    //     },
    //     {
    //         "topic": "Linux Fendementals",
    //         "leader": "Joff Giligan",
    //         "date": "March 21, 8pm",
    //         "loc": "Mallory 314"
    //     },
    //     {
    //         "topic": "Linux Fendementals",
    //         "leader": "Joff Giligan",
    //         "date": "March 21, 8pm",
    //         "loc": "Mallory 314"
    //     },

        
    // ]




</script>

<PageHeader>Schedule</PageHeader>


<div class="px-20 py-10">
    <div class="overflow-x-auto">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th>Topic</th>
              <th>Leader</th>
              <th>Date/Time</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            {#each schedule as s}
                <tr>
                    <td>{s.topic}</td>
                    <td>{s.leader}</td>
                    <td>{s.date}</td>
                    <td>{s.location}</td>
                </tr>
            {/each}
          </tbody>
        </table>
      </div>
</div>