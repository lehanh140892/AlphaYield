const walletButton = document.querySelector(".wallet-btn");

walletButton.addEventListener("click", async () => {

if(window.ethereum){

try{

  await window.ethereum.request({
    method:"eth_requestAccounts"
  });

  walletButton.innerText = "Wallet Connected";

}catch(error){

  console.log(error);

}

}else{

alert("Please install MetaMask");

}

});

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.background = "rgba(0,0,0,0.75)";

}else{

navbar.style.background = "rgba(255,255,255,0.04)";

}

});
