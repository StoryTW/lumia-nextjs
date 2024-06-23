

type IData = {
    photo?: any,
    name: string,
    in: string,
    logo: string
    logoTwo?: any
    hasSecondLogo?: boolean
}

export const data: IData[] = [
    {
        photo: "/contributors/KalAli.png",
        name: 'Kal Ali',
        in: "/contributors/in.png",
        logo: '/contributors/orion.png',
        logoTwo: '/contributors/oblivion.png',
        hasSecondLogo: true
    },
    {
        photo: "/contributors/YanushAli.png",
        name: 'Yanush Ali',
        in: "/contributors/in.png",
        logo: '/contributors/orion.png',
        logoTwo: '/contributors/oblivion.png',
        hasSecondLogo: true
    },
    {
        photo: "/contributors/Alex.png",
        name: 'Alexey Koloskov',
        in: "/contributors/in.png",
        logo: '/contributors/orion.png',
        logoTwo: false,
        hasSecondLogo: false
    },
    {
        photo: '/contributors/Deniz.png',
        name: 'Deniz Dalkilic',
        in: "/contributors/in.png",
        logo: '/contributors/parbius.png',
        logoTwo: '/contributors/buont.png',
        hasSecondLogo: true,
    },
    {
        photo: '/contributors/ULim.png',
        name: 'U-Chyung Lim',
        in: "/contributors/in.png",
        logo: '/contributors/binance.png',
        logoTwo: false,
        hasSecondLogo: false
    },
    {
        photo: '/contributors/Mehmet.png',
        name: 'Mehmet Buyukakarsu',
        in: "/contributors/in.png",
        logo: '/contributors/bnbchain.png',
        logoTwo: '/contributors/tiktok.png',
        hasSecondLogo: true
    },
    {
        photo: '/contributors/Diego.png',
        name: 'Diego Grassano',
        in: "/contributors/in.png",
        logo: '/contributors/orion.png',
        logoTwo: null,
        hasSecondLogo: false
    },
    {
        photo: '/contributors/Martin.png',
        name: 'Martin Penchev',
        in: "/contributors/in.png",
        logo: '/contributors/binance.png',
        logoTwo: null,
        hasSecondLogo: false
    },
];
