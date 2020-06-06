
function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then((res) => { return res.json() }) // pode tirar o 1 parenteses, as chaves e o return para simplificar
        .then(states => {

            for (const state of states) { // aloca um dos estados na variavel estado
                ufSelect.innerHTML += `<option value="${state.id}"> ${state.nome} </option>`
            }
        })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value // aonde o evento foi executado

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text // saber qual option está selecionado para pegar seu texto e exibi-lo na url ao invés do id

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true

    fetch(url)
        .then(res => res.json())
        .then(cities => {

            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}"> ${city.nome} </option>`
            }

            citySelect.disabled = false
        })
}

document
    .querySelector("select[name=uf]") // busca elemento
    .addEventListener("change", getCities)


    //itens de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

//atualizar o campo escondido com os itens selecionados
const collectedItems = document.querySelector("input[name=items]")

let SelectedItems = []

function handleSelectedItem(event) {

    const itemLi = event.target
    // adicionar ou remover uma classe com js
    itemLi.classList.toggle("selected") // add para adicionar, remove para remover e toggle para ambos, se não existir adiciona e se existir remove 

    const itemId = event.target.dataset.id // dataset.id pega apenas o nº do id
    console.log('ITEM ID: ', itemId)

    //verificar se existem itens selecionados, se simpegar os itens selecionados
    const alreadySelected = SelectedItems.findIndex( (item) => {
        const itemFound = item == itemId //true ou false
        return itemFound
    })

    //se já estiver selecionado
    if(alreadySelected >= 0) {
        //tirar da seleção
        const filteredItems = SelectedItems.filter( item => {
            const itemIsDifferent = item != itemId // false
            return itemIsDifferent
        })

        SelectedItems = filteredItems
    } else { //se não estiver, adicionar à seleção
        SelectedItems.push(itemId) //push coloca elemento no array
    }

    console.log('Itens selecionados: ', SelectedItems)

    //atualizar o campo escondido com os itens selecionados
    collectedItems.value = SelectedItems
}