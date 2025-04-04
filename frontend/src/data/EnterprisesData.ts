import {Enterprise} from "../entities/Enterprise";

export default class EnterprisesData {
    static getInfos(): Enterprise[] {
        return [
            new Enterprise(
                {
                    name: "TechCorp Solutions",
                    email: "contato@techcorp.com",
                    country: "Brasil",
                    state: "SP",
                    cep: "01000-000",
                    description: "Empresa especializada em tecnologia e soluções digitais.",
                    cnpj: "12.345.678/0001-99",
                }
            ),
            new Enterprise(
                {
                    name: "InnovaTech",
                    email: "contato@innovatech.com",
                    country: "Brasil",
                    state: "RJ",
                    cep: "20000-000",
                    description: "Desenvolvimento de software inovador para o mercado.",
                    cnpj: "23.456.789/0001-88",
                }
            ),
            new Enterprise(
                {
                    name: "DataMasters",
                    email: "contato@datamasters.com",
                    country: "Brasil",
                    state: "MG",
                    cep: "30000-000",
                    description: "Especializada em soluções de análise de dados e big data.",
                    cnpj: "34.567.890/0001-77",
                }
            ),
            new Enterprise(
                {
                    name: "WebSolutions",
                    email: "contato@websolutions.com",
                    country: "Brasil",
                    state: "RS",
                    cep: "40000-000",
                    description: "Desenvolvimento de aplicações web e mobile.",
                    cnpj: "45.678.901/0001-66",
                }
            ),
            new Enterprise(
                {
                    name: "CloudNet",
                    email: "contato@cloudnet.com",
                    country: "Brasil",
                    state: "BA",
                    cep: "50000-000",
                    description: "Soluções em computação em nuvem e infraestrutura.",
                    cnpj: "56.789.012/0001-55",
                }
            ),
        ];
    }
}
