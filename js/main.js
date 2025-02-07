let bananas = 0;
let bananasPC = 1;
let bananasPS = 0;
let meditationSpeed = 1;
let meditationSubstract = 4000;
let turboBananaCount = 5;
let thirdEyeCount = 1;
let ultraEgoCount = 5;
let bananaGrow = 10;
let meditationPlusPercent = 2

let bananasCounter = document.querySelector('#bananas-counter')

function updateBananas() {
    bananasCounter.textContent = bananas 
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
}, 500);

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
        bananasPC = bananasPC * turboBananaCount;
        restartMeditation()
    }
}

const thirdEye = () => {
    if(progressMeditation.value >= 90) {
        bananasPS = bananasPS + thirdEyeCount;
        restartMeditation()
    }
}

const ultraEgo = () => {
    if(progressMeditation.value >= 90) {
        meditationSpeed = meditationSpeed + ultraEgoCount;
        restartMeditation()
    }
}

const doubleMind = () => {
    if(progressMeditation.value >= 90) {
        meditationSubstract + 400
        restartMeditation()
    }
}

const megaGrow = () => {
    if(progressMeditation.value >= 90) {
        bananaGrow + 10;
        restartMeditation()
    }
}

const meditationPlus = () => {
    if(progressMeditation.value >= 90) {
        bananas += bananasPC * meditationPlusPercent;
        updateBananas();
        restartMeditation();
    }
}

let lvlTree = document.querySelector('#tree-lvl')
let lvlApe = document.querySelector('#tree-ape')
let treeCost = document.querySelector('#tree-cost')
let apeCost = document.querySelector('#ape-cost')

let treeLevel = 1; // Nivel inicial del árbol
let baseTreeCost = 500; // Costo base para subir de nivel
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
let baseApeCost = 500; // Costo base para subir de nivel
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

let statBananas = document.querySelector('#stat-bananas')
let statBananasPS = document.querySelector('#stat-bananas-ps')
let statBananasPC = document.querySelector('#stat-bananas-pc')
let statMeditationSpeed = document.querySelector('#stat-meditation-speed')
let statBananaGrow = document.querySelector('#stat-banana-grow')

statBananas.textContent = bananas;
statBananasPS.textContent = bananasPS;
statBananasPC.textContent = bananasPC;
statMeditationSpeed.textContent = meditationSpeed;
statBananaGrow.textContent = bananaGrow;
