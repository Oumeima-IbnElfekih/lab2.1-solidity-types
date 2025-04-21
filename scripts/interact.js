
async function main() {

    const[deployer] = await ethers.getSigners();

    const contractAddress = "0xf6D977eA1601cC9e386D280096a56Ccd20Be5c58"; // Remplacez par l'adresse de votre contrat déployé

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