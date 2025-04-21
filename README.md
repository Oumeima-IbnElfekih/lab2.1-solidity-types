### **Lab 1 : Types solidity - Manipulation et Stockage**

**Description du Lab**

Ce lab vise à vous familiariser avec les types de données de base de solidity, qui sont essentiels pour tout développement de smart contract. Vous apprendrez à manipuler différents types de données tels que uint, int, address, bool, bytes, string, bytes32, enum, struct, et mapping. 

Vous allez créer un contrat simple pour stocker et manipuler ces types de données.

- - -

### **Prérequis**

Avant de commencer ce lab, assurez-vous d'avoir configuré votre environnement comme suit :

*   **Node.js >= 16.x**  
     
*   **Metamask** ou un autre wallet Ethereum installé dans votre navigateur  
     
*   **Compte Ethereum sur Sepolia Testnet**  
     
*   **GitHub Codespaces** ou un IDE local avec **Hardhat** installé  
     
*   **Infura/Alchemy** pour interagir avec Sepolia Testnet  
     

- - -

### **Objectifs du Lab**

1.  Comprendre et utiliser les types de base en solidity : uint, int, address, bool, bytes, string, bytes32, enum, struct, et mapping.  
     
2.  Créer un contrat qui utilise ces types pour stocker et manipuler des données.  
     
3.  Déployer le contrat sur le testnet **Sepolia** à l'aide de Hardhat.  
     
4.  Interagir avec le contrat via Hardhat et Metamask.  
     

- - -

### **Étapes du Lab**

**1. Préparer l'environnement**  
 

1. **Create a new Hardhat project** 

En suivant :  https://hardhat.org/tutorial/creating-a-new-hardhat-project


2.  **Vérifier la configuration de Hardhat** :  
     
    *   Assurez-vous que vous avez le fichier **hardhat.config.js** configuré pour Sepolia comme suit :  
         

```javascript  
require('@nomicfoundation/hardhat-toolbox');

module.exports = {

  solidity: "0.8.20",

  networks: {

    sepolia: {

      url:`https://sepolia.infura.io/v3/YOUR_INFURA_KEY`,

      accounts:[`0x${YOUR_PRIVATE_KEY}`],

    },

  },

};

```

1.  **Vérification de la configuration Metamask** :  
     
    *   Assurez-vous que Metamask est connecté au testnet Sepolia avec un solde suffisant pour déployer un contrat.  
         

- - -

**2. Créer le contrat solidity**

1.  Créez un fichier contracts/Typessolidity.sol dans le répertoire **contracts/**.  
     
2.  Implémentez un contrat qui utilise les types de données suivants :  
     

```solidity

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract Typessolidity {

    uint public uintVar;

    int public intVar;

    address public addressVar;

    bool public boolVar;

    string public stringVar;

    bytes32 public bytes32Var;

    enum Status { Active, Inactive }

    Status public currentStatus;

    struct User {

        string name;

        uint age;

    }

    mapping(address => User) public users;

    // Fonction pour définir les variables

    function setBool(bool_boolVar) public {

        boolVar =_boolVar;

    }

    function setUser(address userAddr, string memory_name, uint_age) public {

        users[userAddr] = User(_name,_age);

    }

    function setEnum(Status_status) public {

        currentStatus =_status;

    }

}

```

1.  Dans ce contrat, nous avons les éléments suivants :  
     
    *   **uint** : Pour les entiers positifs (solde, montants, etc.).  
         
    *   **int** : Pour les entiers signés (peut être positif ou négatif).  
         
    *   **address** : Pour stocker les adresses Ethereum.  
         
    *   **bool** : Pour les valeurs booléennes (true ou false).  
         
    *   **string** : Pour les chaînes de caractères.  
         
    *   **bytes32** : Pour les données binaires de taille fixe.  
         
    *   **enum** : Un type énuméré pour représenter l'état de quelque chose (ex. : actif/inactif).  
         
    *   **struct** : Une structure pour regrouper des données complexes (ex. : un utilisateur avec un nom et un âge).  
         
    *   **mapping** : Pour associer des adresses à des utilisateurs (mapping entre une adresse et un utilisateur).  
         

- - -

**3. Déployer le contrat sur Sepolia**

1.  **Créer un script de déploiement** dans **scripts/deploy.js** :  
     

```javascript
// npx hardhat run scripts/deploy.js

const { ethers} = require("hardhat");
async function main() {

    const[deployer] = await ethers.getSigners();

    console.log("Déployé par : ", deployer.address);

    const Contract = await ethers.getContractFactory("Typessolidity");

    const contract = await Contract.deploy();

    console.log("Contrat déployé à l'adresse : ", contract.address);

}

main()

    .then(() => process.exit(0))

    .catch((error) => {

        console.error(error);

        process.exit(1);

    });

```

1.  **Configurer les informations de testnet Sepolia dans** **hardhat.config.js** comme mentionné précédemment.  
     

**Exécuter le script de déploiement** :  
  
```bash  
npx hardhat run scripts/deploy.js --network sepolia

```

*   Cela déploiera le contrat sur le testnet Sepolia et vous donnera l'adresse du contrat déployé.  
     

- - -

**4. Interagir avec le contrat via Hardhat**

1.  Après le déploiement, créez un fichier **scripts/interact.js** pour interagir avec le contrat déployé :  
     

```javascript

async function main() {

    const[deployer] = await ethers.getSigners();

    const contractAddress = "VOTRE_ADRESSE_DE_CONTRAT"; // Remplacez par l'adresse du contrat déployé

    const contract = await ethers.getContractAt("Typessolidity", contractAddress);

    // Interagir avec le contrat

    await contract.setBool(true);

    console.log("BoolVar après modification : ", await contract.boolVar());

    await contract.setEnum(1); // Mettre à jour le statut à 'Inactive'

    console.log("Status après modification : ", await contract.currentStatus());

}

main()

    .then(() => process.exit(0))

    .catch((error) => {

        console.error(error);

        process.exit(1);

    });

```

**Exécuter le script d'interaction** :  
  
```bash  
npx hardhat run scripts/interact.js --network sepolia

```

Cela interagira avec le contrat déployé, mettra à jour la variable booléenne et changera le statut en **Inactive**.  
 

- - -

**5. Vérification des résultats sur Sepolia via Etherscan**

*   Une fois le contrat déployé et les interactions effectuées, vous pouvez vérifier les résultats sur Sepolia Etherscan.  
     
*   Recherchez l'adresse du contrat déployé et consultez les transactions pour vérifier les modifications effectuées dans les variables publiques.  
     

- - -

### **Ressources supplémentaires**

*   **solidity Documentation** : https://docs.soliditylang.org/en/v0.8.29/  
     
*   **Hardhat Documentation** : ​​https://hardhat.org/docs  
     
*   **Sepolia Testnet** : https://sepolia.etherscan.io/  
     

- - -

### **Fichiers du Projet**

Voici un aperçu des fichiers et dossiers dans le repo pour ce lab :

```pgsql

lab-solidity-types/

│

├── contracts/

│   └── Typessolidity.sol

│

├── scripts/

│   ├── deploy.js

│   └── interact.js

│

├── test/

│   └── types.solidity.test.js (optionnel pour les tests unitaires)

│

├── hardhat.config.js

├── package.json

├── README.md

```

- - -

### **Objectifs de l'étudiant après ce lab**

*   Avoir une bonne compréhension des types de données en solidity et de leur manipulation.  
     
*   Savoir déployer un contrat sur le testnet Sepolia et interagir avec lui via Hardhat.  
     

Avoir acquis des compétences pour vérifier et interagir avec les contrats déployés sur la blockchain.
