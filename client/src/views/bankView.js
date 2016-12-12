var BankView = function( bank ) {

  var data = [
    {
      title: "All",
      accountType: '',
      listElement: document.querySelector( '#all-list' ),
      totalElement: document.querySelector( '#all-total' )
    },
    {
      title: "Business",
      accountType: 'business',
      listElement: document.querySelector( '#business-list' ),
      totalElement: document.querySelector( '#business-total' )
    },
    {
      title: "Personal",
      accountType: 'personal',
      listElement: document.querySelector( '#personal-list' ),
      totalElement: document.querySelector( '#personal-total' )
    }
  ];
  console.log( "data:", data );
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

module.exports = BankView;
