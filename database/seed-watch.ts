interface IforMe {
    title: string;
    description: string;
    tags: string[];
    videos: string[];
    slug: string;
    inLike: number;
    inSend: number;
    inSave: number;
    inShare: number;
}

interface IFollowing {
    title: string;
    tags: string[];
    videos: string[];
}

interface Props {
    dataFor: IforMe[],
    dataFoll: IFollowing[],
}

export const initialData: Props = {
    dataFoll: [
        {
            title: "Men’s Chill Crew Neck Sweatshirt",
            tags: ['sweatshirt'],
            videos: [
                '/videos/Mujer.mp4',
                '/videos/Rana.mp4',
            ],
        },
        {
            tags: ['jacket'],
            title: "Men's Quilted Shirt Jacket",
            videos: [
                '/videos/Rana.mp4',
                '/videos/Mujer.mp4',
            ],
        },
        {
            tags: ['jacket'],
            title: "Men's Quilted Shirt Jacket",
            videos: [
                '/videos/Rana.mp4',
                '/videos/Mujer.mp4',
            ],
        },
        {
            tags: ['jacket'],
            title: "Men's Quilted Shirt Jacket",
            videos: [
                '/videos/Rana.mp4',
                '/videos/Mujer.mp4',
            ],
        },
        {
            tags: ['jacket'],
            title: "Men's Quilted Shirt Jacket",
            videos: [
                '/videos/Rana.mp4',
                '/videos/Mujer.mp4',
            ],
        },
    ],
    dataFor: [
        {
            title: "Men’s Chill Crew Neck Sweatshirt",
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            videos: [
                '/videos/Mujer.mp4',
                '/videos/Rana.mp4',
            ],
            tags: ['sweatshirt'],
            slug: "mens_chill_crew_neck_sweatshirt",
            inLike: 7,
            inSend: 75,
            inSave: 75,
            inShare: 75,
        },
        {
            title: "Men's Quilted Shirt Jacket",
            description: "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
            videos: [
                '/videos/Rana.mp4',
                '/videos/Mujer.mp4',
            ],
            tags: ['jacket'],
            slug: "men_quilted_shirt_jacket",
            inLike: 5,
            inSend: 200,
            inSave: 200,
            inShare: 200,
        },

        {
            title: "Men's Raven Lightweight Zip Up Bomber Jacket",
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
            videos: [
                '/videos/Mujer.mp4',
                '/videos/Rana.mp4',
            ],
            tags: ['shirt'],
            slug: "men_raven_lightweight_zip_up_bomber_jacket",
            inLike: 10,
            inSend: 130,
            inSave: 130,
            inShare: 130,
        },

        {
            title: "Men's Turbine Long Sleeve Tee",
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
            videos: [
                '/videos/Rana.mp4',
                '/videos/Mujer.mp4',
            ],
            tags: ['shirt'],
            slug: "men_turbine_long_sleeve_tee",
            inLike: 50,
            inSend: 45,
            inSave: 45,
            inShare: 45,
        },
        {
            title: "Men's Turbine Short Sleeve Tee",
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
            videos: [
                '/videos/Mujer.mp4',
                '/videos/Rana.mp4',
            ],
            tags: ['shirt'],
            slug: "men_turbine_short_sleeve_tee",
            inLike: 50,
            inSend: 40,
            inSave: 40,
            inShare: 40,
        },

    ]
}




