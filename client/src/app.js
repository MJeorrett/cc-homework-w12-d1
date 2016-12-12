var Bank = require('./bank/bank.js');
var Account = require('./bank/account.js');
var sampleAccounts = require('../sample.json');

window.onload = function() {
  console.log('app.js loaded');

  var bank = new Bank();
  console.log( "bank:", bank );

  for( accountData of sampleAccounts ) {
    bank.addAccount( new Account( accountData ) );
  }
  console.log( "accounts:", bank.accounts );

  var totalDisplay = document.querySelector( '#total' );
  setTotal( totalDisplay, bank.totalCash() );

  var accountsList = document.querySelector( '#accounts' );
  populateAccounts( accountsList, bank.accounts );

  // DOM ELEMENTS
  var businessTotalDisplay = document.querySelector( '#business-total' );
  var businessAccountsDisplay = document.querySelector( '#business-accounts' );
  var personalTotalDisplay = document.querySelector( '#personal-total' );
  var personalAccountsDisplay = document.querySelector( '#personal-accounts' );

  // ACCOUNTS
  var businessAccounts = bank.filteredAccounts( 'business' );
  var personalAccounts = bank.filteredAccounts( 'personal' );

  setTotal( businessTotalDisplay, bank.totalCash( 'business' ) );
  populateAccounts( businessAccountsDisplay, businessAccounts );
  setTotal( personalTotalDisplay, bank.totalCash( 'personal' ) );
  populateAccounts( personalAccountsDisplay, personalAccounts );
};

var populateAccounts = function( ulElement, accountsList ) {
  for( account of accountsList ) {
    var accountP = document.createElement( 'p' );
    accountP.innerText = account.owner + ": " + getCashString( account.amount );
    accountLi = document.createElement( 'li' );
    accountLi.appendChild( accountP );
    ulElement.appendChild( accountLi );
  }
}

var setTotal = function( htmlElement, amount ) {
  htmlElement.innerText = "Total: £" + getCashString( amount );
}

var getCashString = function( value ) {
  return "£" + value.toFixed( 2 );
}
