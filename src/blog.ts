type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const blogs: Blog[] = [
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
]

const blogContainer = document.getElementById("blog-list");

blogs.forEach((blog) => {
    const linkContainer = document.createElement('a');
    const link = linkContainer.setAttribute('href', 'blogs/'+blog.slug+".html");
    const container = document.createElement('div');
    const heading = document.createElement('h1');
    const titleDesc = heading.innerHTML = blog.title;
    const image = document.createElement('img');
    const imagePath = image.src = blog.image;
    const imageDesc = image.alt = blog.imageAlt;
    const description = document.createElement('p');
    const blogDesc = description.innerHTML = blog.description;
    container.appendChild(heading);
    container.appendChild(image);
    container.appendChild(description);
    linkContainer.appendChild(container)

    blogContainer?.appendChild(linkContainer);
})