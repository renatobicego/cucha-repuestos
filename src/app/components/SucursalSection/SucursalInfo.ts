export enum Sucursal {
  comodoro,
  esquel,
}

export type SucursalInfo = {
  [key in Sucursal]: {
    location: {
      address: string;
      addressName: string;
      lat: number;
      lng: number;
    };
    hor: string;
    tel: string;
    email: string;
    fb?: {
      user: string;
      url: string
    };
    ig: {
      user: string;
      url: string
    };
  };
};

export const sucursalInfo: SucursalInfo = {
  [Sucursal.comodoro]: {
    location: {
      address: "Cucha+Repuestos+(IVECO)",
      addressName: `Av. Hipólito Yrigoyen 2991,\nComodoro Rivadavia, Chubut`,
      lat: -45.8853447,
      lng: -67.5207047,
    },
    hor: "Lunes a Viernes 9hs a 18hs.\nSábado 10hs a 13hs",
    tel: "+5492974344760",
    email: "Jereleoptagoniasrl@gmail.com",
    fb: {
      url: 'https://www.facebook.com/p/Jere-Leo-Patagonia-srl-100063585220601',
      user: 'Jere & Leo Patagonia srl'
    },
    ig: {
      url: 'https://www.instagram.com/jlpatagonia/',
      user: 'jlpatagonia'
    }
  },
  [Sucursal.esquel]: {
    location: {
      address: "Cucha+Repuestos+Esquel",
      addressName: "Roque Sáenz Peña 720,\nEsquel, Chubut",
      lat: -42.9139244,
      lng: -71.3268616,
    },
    hor: "Lunes a Viernes 9hs a 18hs.\nSábado 10hs a 13hs",
    tel: "+5492945595588",
    email: "jlpatagonia.esquel@gmail.com",
    ig: {
      url: 'https://www.instagram.com/cucharepuestos.esq/',
      user: 'cucharepuestos.esq'
    }
  },
};
