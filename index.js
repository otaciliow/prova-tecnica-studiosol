window.onload = getNumber();

document.querySelector('#restart-button').addEventListener('click', () => location.reload())

let colorOn = '#262a34';
let colorOff = '#dddddd';

// Recebe um número aleatório entre 1 e 300 da API
function getNumber() {
    fetch('https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300', {method: 'GET', mode:'cors', cache:'default'})
    .then(res => res.json())
    .then((data) => {

        // Verifica se o resultado foi positivo ou não, de acordo com o conteúdo do callback da promise
        if (data.value) {
            let responseNumber = data.value
            console.log(responseNumber)
            document.querySelector('#randomized-number-container').value = responseNumber;
        } else {
            let errorDesc = data.Error;
            let statusCode = data.StatusCode;
            showHundredCase();
            colorOn = '#CC3300';
            setDisplayedNumbers(statusCode);
            document.querySelector('.is-failed').classList.add('visible');
            document.querySelector('.restart-wrapper').classList.add('visible');
            handleDisabledInput();
            console.log(`Erro: ${errorDesc}`);
        }
    })
}

// Compara o número aleatório com o número digitado pelo usuário
function compareNumbers() {
    const randomizedNumber = parseInt(document.querySelector('#randomized-number-container').value);
    const playerNumber = parseInt(document.querySelector('#player-number').value);

    // Define quais casas decimais devem ser exibidas no formato de LED
    if (playerNumber < 10) {
        document.querySelector('.tenth').classList.remove('visible');
        document.querySelector('.hundred').classList.remove('visible');
        setDisplayedNumbers(playerNumber);
    } else if (playerNumber >= 10 && playerNumber < 100) {
        showTenCase();
        setDisplayedNumbers(playerNumber);
    } else if (playerNumber >= 100) {
        showHundredCase();
        setDisplayedNumbers(playerNumber);
    }
    
    // Compara os valores dos números
    if (randomizedNumber === playerNumber) {
        resetVisibleTips();
        document.querySelector('.is-right').classList.add('visible');
        document.querySelector('.restart-wrapper').classList.add('visible');
        handleMatchedNumbers(playerNumber);
    } else if (randomizedNumber < playerNumber){
        resetVisibleTips();
        document.querySelector('.is-lower').classList.add('visible');
        
    } else if (randomizedNumber > playerNumber) {
        resetVisibleTips();
        document.querySelector('.is-higher').classList.add('visible');
    }
    document.querySelector('#player-number').value = '';
}

function handleMatchedNumbers(playerNumber) {
    // Define a cor dos números como verde, caso o jogador acerte o valor do número aleatório
    colorOn = '#32bf00';
    setDisplayedNumbers(playerNumber)
    handleDisabledInput();
}

// Desativa o input e o botão de enviar
function handleDisabledInput() {
    document.querySelector('#player-number').setAttribute('disabled', 'true');
    document.querySelector('#send-button').setAttribute('disabled', 'true');
    document.querySelector('#send-button').classList.add('disabled');
}

// Exibe a casa das dezenas
function showTenCase() {
    document.querySelector('.tenth').classList.add('visible');
    document.querySelector('.hundred').classList.remove('visible');
}

// Exibe a casa das centenas
function showHundredCase() {
    document.querySelector('.tenth').classList.add('visible');
    document.querySelector('.hundred').classList.add('visible');
}

// Remove todos os textos de callback da tentativa
function resetVisibleTips() {
    document.querySelector('.is-right').classList.remove('visible');
    document.querySelector('.is-lower').classList.remove('visible');
    document.querySelector('.is-higher').classList.remove('visible');
}

// Define o formato em LED correspondente com o número da casa primária
function setPrimaryDisplayedNumber(primaryNumber) {

    let borders = {
        topBox: document.querySelector('.top-box-primary'),
        bottomBox: document.querySelector('.bottom-box-primary')
    }

    switch (primaryNumber) {
        case 0:
            borders.topBox.style.borderColor = `${colorOn} ${colorOn} ${colorOff} ${colorOn}`;
            borders.bottomBox.style.borderColor = `${colorOff} ${colorOn} ${colorOn} ${colorOn}`;
            break;
        case 1:
            borders.topBox.style.borderColor = `${colorOff} ${colorOn} ${colorOff} ${colorOff}`;
            borders.bottomBox.style.borderColor = `${colorOff} ${colorOn} ${colorOff} ${colorOff}`;
            break;
        case 2:
            borders.topBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOff}`;
            borders.bottomBox.style.borderColor = `${colorOn} ${colorOff} ${colorOn} ${colorOn}`;
            break;
        case 3:
            borders.topBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOff}`;
            borders.bottomBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOff}`;
            break;
        case 4:
            borders.topBox.style.borderColor = `${colorOff} ${colorOn} ${colorOn} ${colorOn}`;
            borders.bottomBox.style.borderColor = `${colorOn} ${colorOn} ${colorOff} ${colorOff}`;
            break;
        case 5:
            borders.topBox.style.borderColor = `${colorOn} ${colorOff} ${colorOn} ${colorOn}`;
            borders.bottomBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOff}`;
            break;
        case 6:
            borders.topBox.style.borderColor = `${colorOn} ${colorOff} ${colorOn} ${colorOn}`;
            borders.bottomBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOn}`;
            break;
        case 7:
            borders.topBox.style.borderColor = `${colorOn} ${colorOn} ${colorOff} ${colorOff}`;
            borders.bottomBox.style.borderColor = `${colorOff} ${colorOn} ${colorOff} ${colorOff}`;
            break;
        case 8:
            borders.topBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOn}`;
            borders.bottomBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOn}`;
            break;
        case 9:
            borders.topBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOn}`;
            borders.bottomBox.style.borderColor = `${colorOn} ${colorOn} ${colorOff} ${colorOff}`;
            break;
    }
}

// Define o formato em LED correspondente com o número da casa das dezenas
function setTenDisplayedNumber(tenthNumber) {

    let borders = {
        topBox: document.querySelector('.top-box-tenth'),
        bottomBox: document.querySelector('.bottom-box-tenth')
    }

    switch (tenthNumber) {
        case 0:
            borders.topBox.style.borderColor = `${colorOn} ${colorOn} ${colorOff} ${colorOn}`;
            borders.bottomBox.style.borderColor = `${colorOff} ${colorOn} ${colorOn} ${colorOn}`;
            break;
        case 1:
            borders.topBox.style.borderColor = `${colorOff} ${colorOn} ${colorOff} ${colorOff}`;
            borders.bottomBox.style.borderColor = `${colorOff} ${colorOn} ${colorOff} ${colorOff}`;
            break;
        case 2:
            borders.topBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOff}`;
            borders.bottomBox.style.borderColor = `${colorOn} ${colorOff} ${colorOn} ${colorOn}`;
            break;
        case 3:
            borders.topBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOff}`;
            borders.bottomBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOff}`;
            break;
        case 4:
            borders.topBox.style.borderColor = `${colorOff} ${colorOn} ${colorOn} ${colorOn}`;
            borders.bottomBox.style.borderColor = `${colorOn} ${colorOn} ${colorOff} ${colorOff}`;
            break;
        case 5:
            borders.topBox.style.borderColor = `${colorOn} ${colorOff} ${colorOn} ${colorOn}`;
            borders.bottomBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOff}`;
            break;
        case 6:
            borders.topBox.style.borderColor = `${colorOn} ${colorOff} ${colorOn} ${colorOn}`;
            borders.bottomBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOn}`;
            break;
        case 7:
            borders.topBox.style.borderColor = `${colorOn} ${colorOn} ${colorOff} ${colorOff}`;
            borders.bottomBox.style.borderColor = `${colorOff} ${colorOn} ${colorOff} ${colorOff}`;
            break;
        case 8:
            borders.topBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOn}`;
            borders.bottomBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOn}`;
            break;
        case 9:
            borders.topBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOn}`;
            borders.bottomBox.style.borderColor = `${colorOn} ${colorOn} ${colorOff} ${colorOff}`;
            break;
    }
}

// Define o formato em LED correspondente com o número da casa das centenas
function setHundredDisplayedNumber(hundredNumber) {

    let borders = {
        topBox: document.querySelector('.top-box-hundred'),
        bottomBox: document.querySelector('.bottom-box-hundred')
    }

    switch (hundredNumber) {
        case 0:
            borders.topBox.style.borderColor = `${colorOn} ${colorOn} ${colorOff} ${colorOn}`;
            borders.bottomBox.style.borderColor = `${colorOff} ${colorOn} ${colorOn} ${colorOn}`;
            break;
        case 1:
            borders.topBox.style.borderColor = `${colorOff} ${colorOn} ${colorOff} ${colorOff}`;
            borders.bottomBox.style.borderColor = `${colorOff} ${colorOn} ${colorOff} ${colorOff}`;
            break;
        case 2:
            borders.topBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOff}`;
            borders.bottomBox.style.borderColor = `${colorOn} ${colorOff} ${colorOn} ${colorOn}`;
            break;
        case 3:
            borders.topBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOff}`;
            borders.bottomBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOff}`;
            break;
        case 4:
            borders.topBox.style.borderColor = `${colorOff} ${colorOn} ${colorOn} ${colorOn}`;
            borders.bottomBox.style.borderColor = `${colorOn} ${colorOn} ${colorOff} ${colorOff}`;
            break;
        case 5:
            borders.topBox.style.borderColor = `${colorOn} ${colorOff} ${colorOn} ${colorOn}`;
            borders.bottomBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOff}`;
            break;
        case 6:
            borders.topBox.style.borderColor = `${colorOn} ${colorOff} ${colorOn} ${colorOn}`;
            borders.bottomBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOn}`;
            break;
        case 7:
            borders.topBox.style.borderColor = `${colorOn} ${colorOn} ${colorOff} ${colorOff}`;
            borders.bottomBox.style.borderColor = `${colorOff} ${colorOn} ${colorOff} ${colorOff}`;
            break;
        case 8:
            borders.topBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOn}`;
            borders.bottomBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOn}`;
            break;
        case 9:
            borders.topBox.style.borderColor = `${colorOn} ${colorOn} ${colorOn} ${colorOn}`;
            borders.bottomBox.style.borderColor = `${colorOn} ${colorOn} ${colorOff} ${colorOff}`;
            break;
    }
}

// Avalia o número enviado pelo usuário para definir quantas casas decimais devem aparecer em formato LED
function setDisplayedNumbers(playerNumber) {
    let num = playerNumber;
    let splitNumber = [...num + ''].map(n => + n);

    switch (splitNumber.length) {
        case 1:
            setPrimaryDisplayedNumber(splitNumber[0])
            break;
        case 2:
            setPrimaryDisplayedNumber(splitNumber[1]);
            setTenDisplayedNumber(splitNumber[0]);
            break;
        case 3:
            setPrimaryDisplayedNumber(splitNumber[2]);
            setTenDisplayedNumber(splitNumber[1]);
            setHundredDisplayedNumber(splitNumber[0]);
            break;
    }
}