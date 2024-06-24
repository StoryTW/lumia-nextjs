type IData = {
  photo?: any;
  name: string;
  in: string;
  logo: string;
  logoTwo?: any;
  hasSecondLogo?: boolean;
  gridName?: string;
};

export const data: IData[] = [
  {
    photo: '/contributors/KalAli.png',
    name: 'Kal Ali',
    in: '/contributors/in.png',
    logo: '/contributors/orion.png',
    logoTwo: '/contributors/oblivion.png',
    hasSecondLogo: true,
    gridName: 'a',
  },
  {
    photo: '/contributors/YanushAli.png',
    name: 'Yanush Ali',
    in: '/contributors/in.png',
    logo: '/contributors/orion.png',
    logoTwo: '/contributors/oblivion.png',
    hasSecondLogo: true,
    gridName: 'b',
  },
  {
    photo: '/contributors/Alex.png',
    name: 'Alexey Koloskov',
    in: '/contributors/in.png',
    logo: '/contributors/orion.png',
    logoTwo: false,
    hasSecondLogo: false,
    gridName: 'c',
  },
  {
    photo: '/contributors/Deniz.png',
    name: 'Deniz Dalkilic',
    in: '/contributors/in.png',
    logo: '/contributors/parbius.png',
    logoTwo: '/contributors/buont.png',
    hasSecondLogo: true,
    gridName: 'd',
  },
  {
    photo: '/contributors/ULim.png',
    name: 'U-Chyung Lim',
    in: '/contributors/in.png',
    logo: '/contributors/binance.png',
    logoTwo: false,
    hasSecondLogo: false,
    gridName: 'e',
  },
  {
    photo: '/contributors/Mehmet.png',
    name: 'Mehmet Buyukakarsu',
    in: '/contributors/in.png',
    logo: '/contributors/bnbchain.png',
    logoTwo: '/contributors/tiktok.png',
    hasSecondLogo: true,
    gridName: 'f',
  },
  {
    photo: '/contributors/Diego.png',
    name: 'Diego Grassano',
    in: '/contributors/in.png',
    logo: '/contributors/orion.png',
    logoTwo: null,
    hasSecondLogo: false,
    gridName: 'g',
  },
  {
    photo: '/contributors/Martin.png',
    name: 'Martin Penchev',
    in: '/contributors/in.png',
    logo: '/contributors/binance.png',
    logoTwo: null,
    hasSecondLogo: false,
    gridName: 'h',
  },
];
