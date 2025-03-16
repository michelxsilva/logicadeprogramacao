/*  1.ListadeTarefas
 Crie um programa que gerencia uma lista de tarefas.Ou suário deve ser capaz de:
 ● Adicionarumatarefa
 ● Removerumatarefa
 ● Listartodasastarefas */

let tarefas = []
let inserir = tarefas.push('Estudar', 'Trabalhar', 'Treinar')
console.log(tarefas)
let remover_primeiro = tarefas.shift()
console.log('Removendo o primeiro :' + tarefas)
let remover_ultimo = tarefas.pop()
console.log('Removendo o primeiro :' + tarefas)
