export interface IOption {
  codigo: string;
  nome: string;
}

export interface IFipe {
  TipoVeiculo: number;
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  SiglaCombustivel: string;
}

export interface IFipeState {
  brand: IOption;
  model: IOption;
  year: IOption;
}
