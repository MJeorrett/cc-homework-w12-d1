var Bank = require('./bank/bank.js');
var Account = require('./bank/account.js');
var BankView = require('./views/bankView.js');
var sampleAccounts = require('../sample.json');

window.onload = function() {
  console.log('app.js loaded');

  var bank = new Bank();
  console.log( "bank:", bank );

  var accounts = getStoredAccounts() || sampleAccounts;

  for( account of accounts ) {
    bank.addAccount( new Account( account ) );
  }
  console.log( "accounts:", bank.accounts );

  var bankView = new BankView( bank );
  bankView.renderAccounts();

  var payInterestButton = document.querySelector( '#pay-interest-button' );
  payInterestButton.onclick = function() {
    bank.payInterestOnAllAccounts();
    bankView.renderAccounts();
    localStorage.accounts = JSON.stringify( bank.accounts );
  };
};

var getStoredAccounts = function() {
  var accountsString = localStorage.accounts;
  if ( accountsString ) return JSON.parse( accountsString );
  return null;
}
