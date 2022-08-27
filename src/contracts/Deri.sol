// SPDX-License-Identifier: Unlicensed
pragma solidity ^ 0.8.4;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract deri is ERC20 {
  address public deridexTokenAddress;
  ERC20 deriToken;
   
   // to keep track of deridex lp tokens
  constructor(address deriAddress) ERC20("Deridex lp token", "DLPT"){
    require(deriAddress!= address (0), "address cant be null");
    deridexTokenAddress = deriAddress;
    deriToken = ERC20(deriAddress);
  }

    // function add liquidity
 
    function AddLiquidity( uint Amount) public payable returns (uint) {
        uint Lp;
        uint DeriBalance = getTotalOfDERIReserve();
        uint ethBalance = address(this).balance;
        if(DeriBalance == 0){
            deriToken.transferFrom(msg.sender, address(this), Amount);
            Lp = ethBalance;
            _mint(msg.sender, Lp);
            
        }
        else {
            uint ethCurrentBalance = ethBalance - msg.value;
            uint expectedAmount = (msg.value * DeriBalance) / (ethCurrentBalance);
            require(Amount >= expectedAmount , "Tokens sent is less than minimum required");
            deriToken.transferFrom(msg.sender, address(this), expectedAmount);
            Lp = (totalSupply() * msg.value)/ ethCurrentBalance;
            _mint(msg.sender, Lp);
        }
        return Lp;
    } 

    // function to remove liquidity

     function removeLiquidity(uint Amount) public returns (uint, uint){
       // to check if input is greater than zero
       require(Amount > 0, "Input should be greater than zero");
       // to check the balance of eth added to lp
       uint ethCurrentBalance = address(this).balance;
       uint _totalSupply = totalSupply();
       uint ethAmount = (ethCurrentBalance * Amount)/ _totalSupply;
       uint expectedAmount = (getTotalOfDERIReserve() * Amount)/ _totalSupply;
       _burn (msg.sender, Amount);
       payable (msg.sender).transfer(ethAmount);
       ERC20(deridexTokenAddress).transfer(msg.sender, Amount);
       return(ethAmount, Amount);
     }

      // function to get amouu=nt of tokens sent to user during swap
      function getAmountOfTokens(
        uint256 inputAmount,
        uint256 inputReserve,
        uint256 outputReserve
    ) public pure returns (uint256) {
        require(inputReserve > 0 && outputReserve > 0, "invalid reserves");
        uint256 inputAmountWithFee = inputAmount * 99;
        uint256 numerator = inputAmountWithFee * outputReserve;
        uint256 denominator = (inputReserve * 100) + inputAmountWithFee;
        return numerator / denominator;
    }


    // to swap deri to eth

    function swapDeritoEth(uint deriSent, uint _minEth) public{
      uint256 deriReserve = getTotalOfDERIReserve();
      uint ethReceiving = getAmountOfTokens(
        deriSent,
        deriReserve,
        address(this).balance
      );
      require (ethReceiving > _minEth, "insufficient amount");
      ERC20(deridexTokenAddress).transferFrom(
        msg.sender,
        address(this),
        deriSent
      );
      payable(msg.sender).transfer(ethReceiving);
    }


    // function to swap eth to deri

    function swapEthtoDeri(uint _minTokens) public payable{
      uint256 deriReserve = getTotalOfDERIReserve();
      uint tokenBought = getAmountOfTokens(
        msg.value,
        address(this).balance - msg.value,
        deriReserve
      );

      require (tokenBought > _minTokens, "insufficient amount" );
      ERC20(deridexTokenAddress).transfer(msg.sender, tokenBought);

    }



       // returns amont of deri tokens avail in the contract
      function getTotalOfDERIReserve() public view returns (uint) {
        return ERC20(deridexTokenAddress).balanceOf(address(this));
    }
  }



  








