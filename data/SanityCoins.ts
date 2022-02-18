export interface Asset {
    _ref: string;
    _type: string;
}

export interface Logo {
    _type: string;
    asset: Asset;
}

export interface Result {
    contractAddress: string;
    logo: Logo;
    name: string;
    symbol: string;
    usdPrice: string;
}

export interface SanityCoinsResponse {
    ms: number;
    query: string;
    result: Result[];
}