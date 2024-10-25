var blogs = [
    {
        title: "First Blog",
        date: "10/21/24",
        description: "This is the first blog",
        image: "./rainbowrate.png",
        imageAlt: "it's an image of rainbowrate",
        slug: "rainbow-rate-post",
    },
    {
        title: "About PurelyYOu",
        date: "8/21/23",
        description: "This is the next blog about purelyyou",
        image: "./purelyyou.png",
        imageAlt: "description of new image",
        slug: "purely-you-post",
    },
    {
        title: "UFO Data",
        date: "10/21/29",
        description: "This is the final blog",
        image: "./ufo.png",
        imageAlt: "description of last image",
        slug: "ufo-post",
    }
];
var blogContainer = document.getElementById("blog-list");
blogs.forEach(function (blog) {
    var linkContainer = document.createElement('a');
    var link = linkContainer.setAttribute('href', 'blogs/' + blog.slug + ".html");
    var container = document.createElement('div');
    var heading = document.createElement('h1');
    var titleDesc = heading.innerHTML = blog.title;
    var image = document.createElement('img');
    var imagePath = image.src = blog.image;
    var imageDesc = image.alt = blog.imageAlt;
    var description = document.createElement('p');
    var blogDesc = description.innerHTML = blog.description;
    container.appendChild(heading);
    container.appendChild(image);
    container.appendChild(description);
    linkContainer.appendChild(container);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(linkContainer);
});
