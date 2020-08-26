export interface Filial {
    cdFilial: number;
    nmFilial: string;
    nrCnpj: string;
    nrTelefone: string;
}

//GET Filial
export interface ResponseFilial {
    filial: Filial[];
}