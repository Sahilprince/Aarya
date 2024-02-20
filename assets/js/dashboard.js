// MORALIS CODE
(async function () {
    const serverUrl = "https://cfncda19gp9o.usemoralis.com:2053/server";
    const appId = "kv4cC2KDEfc4xZqcdI6q2epTYN9RIm0mzwvFGzLQ";
    await Moralis.start({ serverUrl, appId });
  })();
  
  async function login() {
    await Moralis.authenticate({
      signingMessage: "Please sign in to continue!!",
    });
  }
  
  async function logout() {
    await Moralis.User.logOut();
  }
  
 

  async function transferNative() {
    const address = document.getElementById("native-address").value;
    const amount = document.getElementById("native-amount").value;
  
    // sending 0.5 ETH
    const options = {
      type: "native",
      amount: Moralis.Units.ETH(amount),
      receiver: address,
    };
    let result = await Moralis.transfer(options);
  }

  async function transferERC1155() {
    let type = document.getElementById("erc1155-type").value;
    let address = document.getElementById("erc1155-address").value;
    let contract = document.getElementById("erc1155-contract").value;
    let token = document.getElementById("erc1155-token").value;
    let amount = document.getElementById("erc1155-amount").value;
  
    // sending 15 tokens with token id = 1
    const options = {
      type: type,
      receiver: address,
      contractAddress: contract,
      tokenId: token,
      amount: amount,
    };
    let transaction = await Moralis.transfer(options);
    alert("NFT Transferred successfully!!");
  }

  document.getElementById("btn-login").onclick = login;
  document.getElementById("btn-logout").onclick = logout;

  document.getElementById("transfer-native").onclick = transferNative;
  document.getElementById("transfer-erc1155").onclick = transferERC1155;