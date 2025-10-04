const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const postElement = document.getElementById("post-list")
console.log(postElement.textContent)

for (let i=0; i< posts.length; i++) {
    postElement.innerHTML += `
            <div id="post${i}">
                <section class="details">
                    <img class="avatar" src="${posts[i]["avatar"]}" alt="profie picture of ${posts[i]["name"]}">
                    <div class="info">
                        <p class="full-name">${posts[i]["name"]}</p>
                        <p class="location">${posts[i]["location"]}</p>
                    </div>
                </section>
                
                <section class="picture">
                    <img class="post" src="${posts[i]["post"]}" alt="self potrait of ${posts[i]["name"]}">
                </section>
                    
                <section class="interactions">
                    <div class="icon-container">
                        <img class="icon" src="images/icon-heart.png" alt="like button">
                        <img class="icon" src="images/icon-comment.png" alt="comment button">
                        <img class="icon dm" src="images/icon-dm.png" alt="share button">
                    </div>
                    <p class="likes">${posts[i]["likes"]} likes</p>
                    <p class="comments"><span class="username">${posts[i]["username"]}</span> ${posts[i]["comment"]}</p>
                </section>
            </div>
    `
}
