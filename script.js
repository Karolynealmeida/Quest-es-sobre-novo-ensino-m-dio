const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "COMO OS ESTUDANTES REAGIRAM AO NOVO ENSINO MÉDIO?",
        alternativas: [
            {
                texto: "De forma positiva",
                afirmacao: "A grande maioria aceitou e acharam uma ideia interessante e inovadora.  "
            },
            {
                texto: "De forma negativa",
                afirmacao: "A grande maioria não aceitou a ideia, pois acharam desnecessário a inclusão de tantas matérias que não seram utilizadas por muitos futuramente."
            }
        ]
    },
    {
        enunciado: "COMO ESTA MUDANÇA AFETOU NO DESENVOLVIMENTO DOS ALUNOS?",
        alternativas: [
            {
                texto: "De forma positiva",
                afirmacao: "Pela variação de plataformas as notas aumentaram mais, pois as plataformas vem sendo uma ferramenta para os estudantes e para o aprendizado."
            },
            {
                texto: "De forma negativa",
                afirmacao: "As frequências cairam bastante por conta da dificuldade das matérias adicionais, e também pelo fato de que o horário escolar aumento um pouco."
            }
        ]
    },
    {
        enunciado: "COMO ANDA A RELAÇÃO DOS ALUNOS EM RELAÇÃO AS EXPLICAÇÕES FEITAS PELOS PROFESSORES?",
        alternativas: [
            {
                texto: "Boa compreensão.",
                afirmacao: "Com o auxílio das tecnologias os professores tem mais ferramentas que auxiliam no aprendizado, como o leia parana que auxilia na leitura, dentre outras plataformas."
            },
            {
                texto: "Má compreensão",
                afirmacao: "Por conta dessas tecnologias implantadas os professores leem somente os conteúdos mandados prontos, sem ter muita liberdade para aplicar a matéria em algumas vezes de maneira mas fácil de se compreender."
            }
        ]
    },
    {
        enunciado: "COMO FOI A ENTREGA DO BOLETIM APÓS TODAS ESTAS MUDANÇAS?",
        alternativas: [
            {
                texto: "Aumento de notas.",
                afirmacao: "As notas veem aumentando pois os alunos tem mais chances e maneiras de conseguir notas, fazendo trabalhos, provas, quizz, e outras plataformas que tem em matérias específicas."
            },
            {
                texto: "Decaimento de notas.",
                afirmacao: "Grande parte dos alunos tiveram um decaimento de nota pois perdem o prazo dos quizz, o prazo do khan, e estas plataformas valem boa parte da nota trimestral"
            }
        ]
    },
    {
        enunciado: " VOCÊS ACHAM QUE DEVERIA SER RETIRADO O NOVO ENSINO MÉDIO",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "os alunos acham que deveria ser retirado por que acham bobagem o aumento de matérias. "
            },
            {
                texto: "Não",
                afirmacao: "Muitos apoiam pois tem matérias que foram implementadas que auxiliam alguns alunos em profissões futuras que irão seguir. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
