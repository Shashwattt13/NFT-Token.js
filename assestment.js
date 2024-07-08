// Step 1: Create a variable to hold your NFTs
let nftCollection = [];

// Step 2: Function to mint a new NFT (car)
function mintNFT(name, power, topSpeed) {
  // Create an NFT object with car metadata
  let nft = {
    name: name,
    power: power,        // in horsepower (hp)
    topSpeed: topSpeed   // in km/h or mph
  };
  
  // Store the new NFT in the nftCollection array
  nftCollection.push(nft);
}

// Step 3: Function to list all NFTs (cars)
function listNFTs() {
  // Loop through the nftCollection array and print the metadata of each NFT
  nftCollection.forEach((nft, index) => {
    console.log(`NFT ${index + 1}:`);
    console.log(`  Name: ${nft.name}`);
    console.log(`  Power: ${nft.power} hp`);
    console.log(`  Top Speed: ${nft.topSpeed} km/h`);
    console.log('-------------------------');
  });
}

// Step 4: Function to get the total supply of NFTs
function getTotalSupply() {
  return nftCollection.length;
}

// Step 5: Call the functions to test them

// Minting three NFTs (cars)
mintNFT("Ferrari LaFerrari", 950, 350);
mintNFT("Bugatti Chiron", 1500, 420);
mintNFT("Tesla Model S Plaid", 1020, 322);

// Listing all NFTs (cars)
listNFTs();

// Getting the total supply of NFTs
console.log(`Total Supply: ${getTotalSupply()}`);
