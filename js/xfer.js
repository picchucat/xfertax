var calculatexfertax = function (date, saleprice) {
  if ( (date.isValid() == false) || (date < moment('1932-06-21')) ) {
    $('#tax2').html('Enter a valid date, numbnuts.');
  }
  else if (isNaN(saleprice) || (saleprice == 0) || (saleprice < 0)) {
    $('#tax2').html('Enter a sale price, fool!');
  }
  else if ( (date >= moment('1932-06-21')) && (date <= moment('1940-06-30')) ) {
    var tax = Math.ceil(saleprice * .001);
    $('#tax2').html('$' + tax.toLocaleString('en'));
  }
  else if ( (date >= moment('1940-07-01')) && (date <= moment('1967-12-31')) ) {
    var tax = Math.ceil(saleprice * .0011);
    $('#tax2').html('$' + tax.toLocaleString('en'));
  }
  else if ( (date >= moment('1968-01-01')) && (date <= moment('1972-06-30')) ) {
    var tax = Math.ceil(saleprice * .001);
    $('#tax2').html('$' + tax.toLocaleString('en'));
  }
  else if ( (date >= moment('1972-07-01')) && (date <= moment('1977-09-11')) ) {
    var tax = Math.ceil(saleprice * .0015);
    $('#tax2').html('$' + tax.toLocaleString('en'));
  }
  else if ( (date >= moment('1977-09-12')) && (date <= moment('1981-06-30')) ) {
    var tax = Math.ceil(saleprice * .0025);
    if ( saleprice <= 4000 ) {
      $('#tax2').html('$10.00');
    }
    else {
      $('#tax2').html('$' + tax.toLocaleString('en'));
    }
  }
  else if ( (date >= moment('1981-07-01')) && (date <= moment('1983-06-30')) ) {
    var tax = Math.ceil(saleprice * .005);
    if ( saleprice <= 4000 ) {
      $('#tax2').html('$20.00');
    }
    else {
      $('#tax2').html('$' + tax.toLocaleString('en'));
    }
  }
  else if ( (date >= moment('1983-07-01')) && (date <= moment('1985-06-30')) ) {
    var tax = Math.ceil(saleprice * .01);
    if ( saleprice <= 4000 ) {
      $('#tax2').html('$20.00');
    }
    else {
      $('#tax2').html('$' + tax.toLocaleString('en'));
    }
  }
  else if ( (date >= moment('1985-07-01')) && (date <= moment('1987-06-30')) ) {
    var tax = Math.ceil(saleprice * .0075);
    if ( saleprice <= 4000 ) {
      $('#tax2').html('$30.00');
    }
    else {
      $('#tax2').html('$' + tax.toLocaleString('en'));
    }
  }
  else if ( (date >= moment('1987-07-01')) && (date <= moment('1989-06-30')) ) {
    var tax = Math.ceil(saleprice * .007);
    if ( saleprice <= 4000 ) {
      $('#tax2').html('$28.00');
    }
    else {
      $('#tax2').html('$' + tax.toLocaleString('en'));
    }
  }
  else if ( (date >= moment('1989-07-01')) && (date <= moment('1990-03-31')) ) {
    var tax = Math.ceil(saleprice * .0095);
    if ( saleprice <= 4000 ) {
      $('#tax2').html('$38.00');
    }
    else {
      $('#tax2').html('$' + tax.toLocaleString('en'));
    }
  }
  else if ( (date >= moment('1990-04-01')) && (date <= moment('1993-06-30')) ) {
    var tax = Math.ceil(saleprice * .0105);
    if ( saleprice <= 4000 ) {
      $('#tax2').html('$42.00');
    }
    else {
      $('#tax2').html('$' + tax.toLocaleString('en'));
    }
  }
  else if ( (date >= moment('1993-07-01')) && (date <= moment('1999-06-30')) ) {
    var tax = Math.ceil(saleprice * .01);
    if ( saleprice <= 4000 ) {
      $('#tax2').html('$40.00');
    }
    else {
      $('#tax2').html('$' + tax.toLocaleString('en'));
    }
  }
  else if ( (date >= moment('1999-07-01')) && (date <= moment()) ) {
    var tax = Math.ceil(saleprice * .015);
    if ( saleprice <= 4000 ) {
      $('#tax2').html('$40.00');
    }
    else {
      $('#tax2').html('$' + tax.toLocaleString('en'));
    }
  }
  else {
    $('#tax2').html('invalid');
  }
};

var calculatesaleprice = function (date, xfertax) {
  if ( (date.isValid() == false) || (date < moment('1932-06-21')) ) {
    $('#sale1').html('That&apos;s a valid date, NOT!');
  }
  else if (isNaN(xfertax) || (xfertax == 0) || (xfertax < 0)) {
    $('#sale1').html('Aw, crap!  You need to enter a transfer tax!');
  }
  else if ( (date >= moment('1932-06-21')) && (date <= moment('1940-06-30')) ) {
    var saleprice = Math.ceil(xfertax / .001);
    $('#sale1').html('$' + saleprice.toLocaleString('en'));
  }
  else if ( (date >= moment('1940-07-01')) && (date <= moment('1967-12-31')) ) {
    var saleprice = Math.ceil(xfertax / .0011);
    $('#sale1').html('$' + saleprice.toLocaleString('en'));
  }
  else if ( (date >= moment('1968-01-01')) && (date <= moment('1972-06-30')) ) {
    var saleprice = Math.ceil(xfertax / .001);
    $('#sale1').html('$' + saleprice.toLocaleString('en'));
  }
  else if ( (date >= moment('1972-07-01')) && (date <= moment('1977-09-11')) ) {
    var saleprice = Math.ceil(xfertax / .0015);
    $('#sale1').html('$' + saleprice.toLocaleString('en'));
  }
  else if ( (date >= moment('1977-09-12')) && (date <= moment('1981-06-30')) ) {
    var saleprice = Math.ceil(xfertax / .0025);
    if ( xfertax / .0025 <= 4000 ) {
      $('#sale1').html('$4,000 or less');
    }
    else {
      $('#sale1').html('$' + saleprice.toLocaleString('en'));
    }
  }
  else if ( (date >= moment('1981-07-01')) && (date <= moment('1983-06-30')) ) {
    var saleprice = Math.ceil(xfertax / .005);
    if ( xfertax / .005 <= 4000 ) {
      $('#sale1').html('$4,000 or less');
    }
    else {
      $('#sale1').html('$' + saleprice.toLocaleString('en'));
    }
  }
  else if ( (date >= moment('1983-07-01')) && (date <= moment('1985-06-30')) ) {
    var saleprice = Math.ceil(xfertax / .01);
    if ( xfertax / .01 <= 4000 ) {
      $('#sale1').html('$4,000 or less');
    }
    else {
      $('#sale1').html('$' + saleprice.toLocaleString('en'));
    }
  }
  else if ( (date >= moment('1985-07-01')) && (date <= moment('1987-06-30')) ) {
    var saleprice = Math.ceil(xfertax / .0075);
    if ( xfertax / .0075 <= 4000 ) {
      $('#sale1').html('$4,000 or less');
    }
    else {
      $('#sale1').html('$' + saleprice.toLocaleString('en'));
    }
  }
  else if ( (date >= moment('1987-07-01')) && (date <= moment('1989-06-30')) ) {
    var saleprice = Math.ceil(xfertax / .007);
    if ( xfertax / .007 <= 4000 ) {
      $('#sale1').html('$4,000 or less');
    }
    else {
      $('#sale1').html('$' + saleprice.toLocaleString('en'));
    }
  }
  else if ( (date >= moment('1989-07-01')) && (date <= moment('1990-03-31')) ) {
    var saleprice = Math.ceil(xfertax / .0095);
    if ( xfertax / .0095 <= 4000 ) {
      $('#sale1').html('$4,000 or less');
    }
    else {
      $('#sale1').html('$' + saleprice.toLocaleString('en'));
    }
  }
  else if ( (date >= moment('1990-04-01')) && (date <= moment('1993-06-30')) ) {
    var saleprice = Math.ceil(xfertax / .0105);
    if ( xfertax / .0105 <= 4000 ) {
      $('#sale1').html('$4,000 or less');
    }
    else {
      $('#sale1').html('$' + saleprice.toLocaleString('en'));
    }
  }
  else if ( (date >= moment('1993-07-01')) && (date <= moment('1999-06-30')) ) {
    var saleprice = Math.ceil(xfertax / .01);
    if ( xfertax / .01 <= 4000 ) {
      $('#sale1').html('$4,000 or less');
    }
    else {
      $('#sale1').html('$' + saleprice.toLocaleString('en'));
    }
  }
  else if ( (date >= moment('1999-07-01')) && (date <= moment()) ) {
    var saleprice = Math.ceil(xfertax / .015);
    if ( xfertax / .015 <= 4000 ) {
      $('#sale1').html('$4,000 or less');
    }
    else {
      $('#sale1').html('$' + saleprice.toLocaleString('en'));
    }
  }
  else {
    $('#sale1').html('invalid');
  }
};
