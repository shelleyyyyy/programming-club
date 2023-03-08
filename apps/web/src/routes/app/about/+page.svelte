

<script>

    import PageHeader from "$lib/base/PageHeader.svelte";
    import { pb } from "$lib/pocketbase"
    import { onMount } from "svelte";


    const about = `The club offers a variety of activities and resources to help members grow their skills. From hands-on coding challenges to educational workshops, members are encouraged to explore different programming languages and techniques. In addition, the club provides access to a network of like-minded students and industry professionals, providing opportunities for networking and mentorship.

The Virginia Military Institute Programming Club also places a strong emphasis on teaching programming skills to students who are new to the field. The club offers introductory courses in programming languages such as Python and Java, providing a solid foundation for students who are just starting out. These courses are led by experienced club members and are designed to be accessible and engaging for students of all skill levels.

Beyond its educational activities, the Virginia Military Institute Programming Club also provides opportunities for members to participate in programming competitions and hackathons. These events provide a chance for members to showcase their skills and compete against other programming enthusiasts from around the world. They also offer a chance to network with industry professionals and gain exposure to the latest trends and technologies in the field.

Overall, the Virginia Military Institute Programming Club is an excellent resource for students who are passionate about programming and want to develop their skills in a supportive and engaging environment. Through its diverse range of activities and resources, the club helps students build the knowledge and experience they need to succeed in this exciting and rapidly-evolving field.
`

    // const posts = [
    //     {
    //         "title": "Joe is possibly gay",
    //         "body": "Sunt consequat cillum mollit dolor magna nulla sit.",
    //         "img": "https://assets.cdn.prod.twilio.com/original_images/flask-oauth.png"
    //     },
    //     {
    //         "title": "Joe is possibly gay",
    //         "body": "Sunt consequat cillum mollit dolor magna nulla sit.",
    //         "img": "https://assets.cdn.prod.twilio.com/original_images/flask-oauth.png"
    //     },
    //     {
    //         "title": "Joe is possibly gay",
    //         "body": "Sunt consequat cillum mollit dolor magna nulla sit.",
    //         "img": "https://assets.cdn.prod.twilio.com/original_images/flask-oauth.png"
    //     },
    //     {
    //         "title": "Joe is possibly gay",
    //         "body": "Sunt consequat cillum mollit dolor magna nulla sit.",
    //         "img": "https://assets.cdn.prod.twilio.com/original_images/flask-oauth.png"
    //     },
    //     {
    //         "title": "Joe is possibly gay",
    //         "body": "Sunt consequat cillum mollit dolor magna nulla sit.",
    //         "img": "https://assets.cdn.prod.twilio.com/original_images/flask-oauth.png"
    //     },
    //     {
    //         "title": "Joe is possibly gay",
    //         "body": "Sunt consequat cillum mollit dolor magna nulla sit.",
    //         "img": "https://assets.cdn.prod.twilio.com/original_images/flask-oauth.png"
    //     },
    //     {
    //         "title": "Joe is possibly gay",
    //         "body": "Sunt consequat cillum mollit dolor magna nulla sit.",
    //         "img": "https://assets.cdn.prod.twilio.com/original_images/flask-oauth.png"
    //     },
    //     {
    //         "title": "Joe is possibly gay",
    //         "body": "Sunt consequat cillum mollit dolor magna nulla sit.",
    //         "img": "https://assets.cdn.prod.twilio.com/original_images/flask-oauth.png"
    //     },
    //     {
    //         "title": "Joe is possibly gay",
    //         "body": "Sunt consequat cillum mollit dolor magna nulla sit.",
    //         "img": "https://assets.cdn.prod.twilio.com/original_images/flask-oauth.png"
    //     },
        
    // ]
    let posts = []

    onMount(async () => {
        const records = await pb.collection('posts').getFullList({
            sort: '-created',
        });

        posts = records
    })
</script>

<PageHeader>About</PageHeader>

<div class="mx-20 my-10 card bg-base-300 shadow-xl">
    <div class="card-body">
        <p>The Virginia Military Institute Programming Club is a dynamic organization dedicated to fostering the development of programming skills among its members. As president, William Shelley leads the club in its mission to provide a supportive environment for students to learn and practice computer programming.</p>
        <p>The club offers a variety of activities and resources to help members grow their skills. From hands-on coding challenges to educational workshops, members are encouraged to explore different programming languages and techniques. In addition, the club provides access to a network of like-minded students and industry professionals, providing opportunities for networking and mentorship.</p>
        <p>The Virginia Military Institute Programming Club also places a strong emphasis on teaching programming skills to students who are new to the field. The club offers introductory courses in programming languages such as Python and Java, providing a solid foundation for students who are just starting out. These courses are led by experienced club members and are designed to be accessible and engaging for students of all skill levels.</p>
        <p>Beyond its educational activities, the Virginia Military Institute Programming Club also provides opportunities for members to participate in programming competitions and hackathons. These events provide a chance for members to showcase their skills and compete against other programming enthusiasts from around the world. They also offer a chance to network with industry professionals and gain exposure to the latest trends and technologies in the field.</p>
        <p>Overall, the Virginia Military Institute Programming Club is an excellent resource for students who are passionate about programming and want to develop their skills in a supportive and engaging environment. Through its diverse range of activities and resources, the club helps students build the knowledge and experience they need to succeed in this exciting and rapidly-evolving field.</p>
    </div>
</div>

<PageHeader>Posts</PageHeader>

<div class="grid justify-center px-20 py-10">
    {#each posts as post}
        <div class="card w-full bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src={post.img}/>
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    {/each}
</div>

<style>
    p {
        /* text-indent: 30px; */
        line-height: 30px;
        margin-bottom: 20px;
    }
</style>