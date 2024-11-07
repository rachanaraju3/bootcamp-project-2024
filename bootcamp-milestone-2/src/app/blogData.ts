export type Blog = {
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
        image: "/rainbowrate.png",
        imageAlt: "it's an image of rainbowrate",
        slug: "rainbow-rate-post",
    },
    {
        title: "About PurelyYou",
        date: "8/21/23",
        description: "This is the next blog about purelyyou",
        image: "/purelyyou.png",
        imageAlt: "description of new image",
        slug: "purely-you-post",
    },
    {
        title: "UFO Data",
        date: "10/21/29",
        description: "This is the final blog",
        image: "/ufo.png",
        imageAlt: "description of last image",
        slug: "ufo-post",
    }
]
export default blogs;