let bananas = 0;
let bananasPC = 100;
let bananasPS = 0;
let meditationSpeed = 2;
let meditationSubstract = 4000;
let turboBananaCount = 5;
let thirdEyeCount = 10;
let ultraEgoCount = 5;
let bananaGrow = 10;
let meditationPlusPercent = 2

let bananasCounter = document.querySelector('#bananas-counter')

let turboBananaDesc = document.querySelector('#turbo-banana-desc')
let thirdEyeDesc = document.querySelector('#third-eye-desc')
let ultraEgoDesc = document.querySelector('#ultra-ego-desc')
let doubleMindDesc = document.querySelector('#double-mind-desc')
let megaGrowDesc = document.querySelector('#mega-grow-desc')
let meditationPlusDesc = document.querySelector('#meditation-plus-desc')



function updateBananas() {
    bananasCounter.textContent = bananas.toLocaleString("es-ES");
    checkBananas()
}

function restartMeditation() {
    progressMeditation.value = 50;
    updateMeditation();
    skillIcons.forEach(icon => {
        icon.style.opacity = '.2';
    });
}   

let progressBananas = document.querySelector('#progress-bananas');
let progressMeditation = document.querySelector('#progress-meditation');
let treeImg = document.querySelector('#tree')
let apeImg = document.querySelector('#ape')
let bananaIcon = document.querySelector('#banana')
let eyeIcon = document.querySelector('#eye')

let skillIcons = document.querySelectorAll('.skill-icon')
skillIcons.forEach(icon => {
    icon.style.opacity = '.2';
});

bananaIcon.style.filter = 'saturate(0%)';
bananaIcon.style.opacity = '.5';

function bananaIconTrigger() {
    bananaIcon.style.filter = 'saturate(100%)';
    bananaIcon.style.opacity = '1';
}

function bananaIconRestart() {
    bananaIcon.style.filter = 'saturate(0%)';
    bananaIcon.style.opacity = '.5';
}

setInterval(() => {
    bananaIconRestart()
    progressBananas.value = progressBananas.value + bananaGrow
    if (progressBananas.value == 100) {
        bananaIconTrigger();
    }
}, 4000);

setInterval(() => {
    progressMeditation.value = progressMeditation.value - 5
}, meditationSubstract);

setInterval(() => {
    bananas = bananas + bananasPS
    updateBananas()
}, 1000);

const updateMeditation = () => {
    if (progressMeditation.value === 0) {
        apeImg.style.filter = 'saturate(0%)';
        apeImg.style.opacity = '50%';
        skillIcons.forEach(icon => {
            icon.style.opacity = '.2';
        });
    } else if (progressMeditation.value > 0 && progressMeditation.value <= 50) {
        apeImg.style.filter = 'saturate(20%)';
        apeImg.style.opacity = '60%';
        skillIcons.forEach(icon => {
            icon.style.opacity = '.2';
        });
    } else if (progressMeditation.value > 50 && progressMeditation.value <= 90) {
        apeImg.style.filter = 'saturate(50%)';
        apeImg.style.opacity = '70%';
        skillIcons.forEach(icon => {
            icon.style.opacity = '.2';
        });
    } else {
        apeImg.style.filter = 'saturate(100%)'; 
        apeImg.style.filter = 'drop-shadow(5px 5px 10px white)'       
        apeImg.style.opacity = '100%';
        
        skillIcons.forEach(icon => {
            icon.style.opacity = '1';
        });
    }
}
updateMeditation();

const getBananas = () => {
    if(progressBananas.value == 100) {
        progressBananas.value = 0;
        bananas = bananas + bananasPC
        updateBananas()
    }
}

const meditar = () => {
    progressMeditation.value = progressMeditation.value + meditationSpeed;
    updateMeditation();
}

const turboBanana = () => {
    if(progressMeditation.value >= 90) {
        turboBananaDesc.innerText = 'x2 tree harvest'
        bananasPC = bananasPC * turboBananaCount;
        restartMeditation()
    }
}

const thirdEye = () => {
    if(progressMeditation.value >= 90) {
        thirdEyeDesc.innerText = 'More bananas p/s'
        bananasPS = bananasPS + thirdEyeCount;
        restartMeditation()
    }
}

const ultraEgo = () => {
    if(progressMeditation.value >= 90) {
        ultraEgoDesc.innerText = 'Increase meditation'
        meditationSpeed = meditationSpeed + ultraEgoCount;
        restartMeditation()
    }
}

const doubleMind = () => {
    if(progressMeditation.value >= 90) {
        doubleMindDesc.innerText = 'Less meditation stress'
        meditationSubstract + 400
        restartMeditation()
    }
}

const megaGrow = () => {
    if(progressMeditation.value >= 90) {
        megaGrowDesc.innerText = 'Increase tree speed'
        bananaGrow + 10;
        restartMeditation()
    }
}

const meditationPlus = () => {
    if(progressMeditation.value >= 90) {
        meditationPlusDesc.innerText = 'Banana bonification'
        bananas += (bananasPC * meditationPlusPercent) / 2;
        updateBananas();
        restartMeditation();
    }
}

let lvlTree = document.querySelector('#tree-lvl')
let lvlApe = document.querySelector('#ape-lvl')
let treeCost = document.querySelector('#tree-cost')
let apeCost = document.querySelector('#ape-cost')

let treeLevel = 1; // Nivel inicial del árbol
let baseTreeCost = 5000; // Costo base para subir de nivel
treeCost.textContent = baseTreeCost;
let treeCostMultiplier = 2; // Multiplicador del costo

const getTreeUpgradeCost = () => {
    const result = baseTreeCost * Math.pow(treeCostMultiplier, treeLevel - 1);
    treeCost.textContent = result
    return result
};

const canLevelUpTree = () => {
    return bananas >= getTreeUpgradeCost();
};

const levelUpTree = () => {
    if (canLevelUpTree()) {
        // Deduct the cost of upgrading the tree
        bananas -= getTreeUpgradeCost(); // Deduce the bananas based on the upgrade cost

        // Update stats after leveling up
        bananasPC *= 2;
        bananasPS *= 2;
        bananaGrow *= 2;

        treeLevel++; // Increment tree level
        lvlTree.textContent = treeLevel; // Display new level
        treeCost.textContent = getTreeUpgradeCost(); // Update the cost for the next level
    }
};



let apeLevel = 1; // Nivel inicial del mono
let baseApeCost = 5000; // Costo base para subir de nivel
apeCost.textContent = baseApeCost;
let apeCostMultiplier = 2; // Multiplicador del costo

const getApeUpgradeCost = () => {
    const result = baseApeCost * Math.pow(apeCostMultiplier, apeLevel - 1);
    apeCost.textContent = result;
    return result;
};

const canLevelUpApe = () => {
    return bananas >= getApeUpgradeCost();
};

const levelUpApe = () => {
    if (canLevelUpApe()) {
        // Deduct the cost of upgrading the ape
        bananas -= getApeUpgradeCost(); // Deduce the bananas based on the upgrade cost

        // Update stats after leveling up
        turboBananaCount *= 2;
        thirdEyeCount *= 2;
        ultraEgoCount *= 2;
        meditationPlusPercent *= 2;

        apeLevel++; // Increment ape level
        lvlApe.textContent = apeLevel; // Display new level
        apeCost.textContent = getApeUpgradeCost(); // Update the cost for the next level
    }
};


const cheat = () => {
    bananas = parseInt(prompt('cantidad de bananas'))
    updateBananas()
}

// Obtener los elementos del modal y del icono de cierre
let modal = document.querySelector('.modal');
let closeModalIcon = document.querySelector('#close-modal-icon');

const openModal = () => {
    document.querySelector('.modal').style.display = 'block'; // Muestra el modal
}

const closeModal = () => {
    document.querySelector('.modal').style.display = 'none'; // Oculta el modal
}
// Asignar la función de cierre al ícono del SVG
closeModalIcon.addEventListener('click', closeModal);

function checkBananas() {
    if (bananas > 1000000000000000) {
        bananasCounter.style.fontSize = "1rem";
        bananasCounter.style.marginBottom = "1rem";
    } else {
        bananasCounter.style.fontSize = "3rem"; // Tamaño original
    }
}