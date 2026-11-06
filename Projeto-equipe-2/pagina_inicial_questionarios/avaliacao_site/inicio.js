// Progresso inicial: nenhum questionário foi concluído.
// Quando você integrar o resultado dos questionários, atualize este valor.
const totalQuestionarios = 6;

const questionariosConcluidos = 0;

const porcentagem = Math.round((questionariosConcluidos / totalQuestionarios) * 100);

document.querySelector('#total').textContent = totalQuestionarios;

document.querySelector('#concluidos').textContent = questionariosConcluidos;

document.querySelector('#porcentagem').textContent = porcentagem + '%';

document.querySelector('#preenchimento').style.width = porcentagem + '%';
