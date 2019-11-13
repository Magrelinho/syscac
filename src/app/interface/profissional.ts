export interface Profissional {
    id?: number;
    nome?: string;
    numero?: number; //crm crp
    categoria_profissional_id?: number; //medico ou pisic
    email?: string;
    cpf?: string;
    entidade_id?: number; //estabelecimento
    address?: string;
    addressNumber?: number;
    province?: string;
    postalCode?: string;
    phone?: number;
    mobilePhone?: number;
    walletId?: string;
    asaas_id?: string;
}
