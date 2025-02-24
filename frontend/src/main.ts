import Card from './components/Card';
import CandidatesData from "./data/CandidatesData";
import {Candidate} from "./entities/Candidate";
import DatabaseManager from "./data/DatabaseManager";
import NavigationManager from "./navegation/NavigationManager";

CandidatesData.getInfos().forEach(candidate => {
        const cardComponent = new Card(candidate.params);
        innerHTMLInject(document.querySelector('.container.card-flex-container'), cardComponent.getCard());
    }
)

function innerHTMLInject(tag: HTMLElement | null, output: string): void {
    if (tag) {
        tag.innerHTML += output
    }
}


// localStorage.setItem('data', JSON.stringify(CandidatesData.getInfos()));
// let data: Candidate[] = JSON.parse(localStorage.getItem('data') || '[]')
// data.push(
//     new Candidate(
//         {
//             name: "TESTE",
//             email: "TESTE",
//             country: "TESTE",
//             state: "TESTE",
//             cep: "TESTE",
//             description: "Arquiteto de software com foco em soluções escaláveis e robustas.",
//             age: 35,
//             cpf: "555.666.777-88",
//             skills: ["Docker", "Git", "Spring"]
//         }
//     )
// )

//localStorage.setItem('data', JSON.stringify(data));

let teste = new Candidate(
    {
        name: "TESTE",
        email: "TESTE",
        country: "TESTE",
        state: "TESTE",
        cep: "TESTE",
        description: "Arquiteto de software com foco em soluções escaláveis e robustas.",
        age: 35,
        cpf: "555.666.777-88",
        skills: ["Docker", "Git", "Spring"]
    }
)

const dbManager = new DatabaseManager()

dbManager.addCandidate(teste)

let getTest = dbManager.getCandidate(teste.id)

console.log(getTest)

if (dbManager.candidates != null) dbManager.removeCandidate(dbManager.candidates[0].id)

dbManager.updateCandidate(teste.id, {name: 'Deu Certo'})


const navigationManager = new NavigationManager()
navigationManager.activeCandidateCreateFormListener()