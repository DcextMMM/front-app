export interface Login {
  id: string;
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  telefone: string;
  rua: string;
  numero: string;
  cep: string;
};

export interface LoginResp {
    token: string;
}
