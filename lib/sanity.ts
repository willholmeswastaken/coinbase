import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId: 'yo5ayrdx',
    dataset: 'production',
    apiVersion: '2021-10-21',
    token: 'sk47a2EKbIQ1gNzjWO54YhqosU6Ew42qrGL6Kph4iueGx61Br5T82kMhx6HttD5DGU00vodCaNrN4tUPtUqnM66cMs0dwy30jYt7ewLLlytCGH4UdBeOkGtwpBuVTSoe2AZOCKG6NeW2LAoOu8pNrOrbQdvhNQnf6glxxlKH4FPRPN5EtAlJ',
    useCdn: false
})