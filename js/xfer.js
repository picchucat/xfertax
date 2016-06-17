var calculatexfertax = function (date, saleprice) {
  if ( (date > moment('1932-06-21')) && (date < moment('1940-06-30')) ) {
    $('#tax2').html('$' + saleprice * .001);
  }
  else if ( (date >= moment('1940-07-01')) && (date <= moment('1967-12-31')) ) {
    $('#tax2').html('$' + saleprice * .0011);
  }
  else if ( (date >= moment('1968-01-01')) && (date <= moment('1972-06-30')) ) {
    $('#tax2').html('$' + saleprice * .001);
  }
  else if ( (date >= moment('1972-07-01')) && (date <= moment('1977-09-11')) ) {
    $('#tax2').html('$' + saleprice * .0015);
  }
  else if ( (date >= moment('1977-09-12')) && (date <= moment('1981-06-30')) ) {
    if ( saleprice <= 4000 ) {
      $('#tax2').html('$10.00');
    }
    else {
      $('#tax2').html('$' + saleprice * .0025);
    }
  }
  else if ( (date >= moment('1981-07-01')) && (date <= moment('1983-06-30')) ) {
    if ( saleprice <= 4000 ) {
      $('#tax2').html('$20.00');
    }
    else {
      $('#tax2').html('$' + saleprice * .005);
    }
  }
  else if ( (date >= moment('1983-07-01')) && (date <= moment('1985-06-30')) ) {
    if ( saleprice <= 4000 ) {
      $('#tax2').html('$20.00');
    }
    else {
      $('#tax2').html('$' + saleprice * .01);
    }
  }
  else if ( (date >= moment('1985-07-01')) && (date <= moment('1987-06-30')) ) {
    if ( saleprice <= 4000 ) {
      $('#tax2').html('$30.00');
    }
    else {
      $('#tax2').html('$' + saleprice * .0075);
    }
  }
  else if ( (date >= moment('1987-07-01')) && (date <= moment('1989-06-30')) ) {
    if ( saleprice <= 4000 ) {
      $('#tax2').html('$28.00');
    }
    else {
      $('#tax2').html('$' + saleprice * .007);
    }
  }
  else if ( (date >= moment('1989-07-01')) && (date <= moment('1990-03-31')) ) {
    if ( saleprice <= 4000 ) {
      $('#tax2').html('$38.00');
    }
    else {
      $('#tax2').html('$' + saleprice * .0095);
    }
  }
  else if ( (date >= moment('1990-04-01')) && (date <= moment('1993-06-30')) ) {
    if ( saleprice <= 4000 ) {
      $('#tax2').html('$42.00');
    }
    else {
      $('#tax2').html('$' + saleprice * .0105);
    }
  }
  else if ( (date >= moment('1993-07-01')) && (date <= moment('1999-06-30')) ) {
    if ( saleprice <= 4000 ) {
      $('#tax2').html('$40.00');
    }
    else {
      $('#tax2').html('$' + saleprice * .01);
    }
  }
  else if ( (date >= moment('1999-07-01')) && (date <= moment()) ) {
    if ( saleprice <= 4000 ) {
      $('#tax2').html('$40.00');
    }
    else {
      $('#tax2').html('$' + saleprice * .015);
    }
  }
  else {
    $('#tax2').html('invalid');
  }
};

var calculatesaleprice = function (date, xfertax) {
  if ( (date > moment('1932-06-21')) && (date < moment('1940-06-30')) ) {
    $('#sale1').html('$' + xfertax / .001);
  }
  else if ( (date >= moment('1940-07-01')) && (date <= moment('1967-12-31')) ) {
    $('#sale1').html('$' + xfertax / .0011);
    console.log("yep")
  }
  else if ( (date >= moment('1968-01-01')) && (date <= moment('1972-06-30')) ) {
    $('#sale1').html('$' + xfertax / .001);
  }
  else if ( (date >= moment('1972-07-01')) && (date <= moment('1977-09-11')) ) {
    $('#sale1').html('$' + xfertax / .0015);
  }
  else if ( (date >= moment('1977-09-12')) && (date <= moment('1981-06-30')) ) {
    if ( saleprice <= 4000 ) {
      $('#sale1').html('$10.00');
    }
    else {
      $('#sale1').html('$' + xfertax / .0025);
    }
  }
  else if ( (date >= moment('1981-07-01')) && (date <= moment('1983-06-30')) ) {
    if ( saleprice <= 4000 ) {
      $('#sale1').html('$20.00');
    }
    else {
      $('#sale1').html('$' + xfertax / .005);
    }
  }
  else if ( (date >= moment('1983-07-01')) && (date <= moment('1985-06-30')) ) {
    if ( saleprice <= 4000 ) {
      $('#sale1').html('$20.00');
    }
    else {
      $('#sale1').html('$' + xfertax / .01);
    }
  }
  else if ( (date >= moment('1985-07-01')) && (date <= moment('1987-06-30')) ) {
    if ( saleprice <= 4000 ) {
      $('#sale1').html('$30.00');
    }
    else {
      $('#sale1').html('$' + xfertax / .0075);
    }
  }
  else if ( (date >= moment('1987-07-01')) && (date <= moment('1989-06-30')) ) {
    if ( saleprice <= 4000 ) {
      $('#sale1').html('$28.00');
    }
    else {
      $('#sale1').html('$' + xfertax / .007);
    }
  }
  else if ( (date >= moment('1989-07-01')) && (date <= moment('1990-03-31')) ) {
    if ( saleprice <= 4000 ) {
      $('#sale1').html('$38.00');
    }
    else {
      $('#sale1').html('$' + xfertax / .0095);
    }
  }
  else if ( (date >= moment('1990-04-01')) && (date <= moment('1993-06-30')) ) {
    if ( saleprice <= 4000 ) {
      $('#sale1').html('$42.00');
    }
    else {
      $('#sale1').html('$' + xfertax / .0105);
    }
  }
  else if ( (date >= moment('1993-07-01')) && (date <= moment('1999-06-30')) ) {
    if ( saleprice <= 4000 ) {
      $('#sale1').html('$40.00');
    }
    else {
      $('#sale1').html('$' + xfertax / .01);
    }
  }
  else if ( (date >= moment('1999-07-01')) && (date <= moment()) ) {
    if ( saleprice <= 4000 ) {
      $('#sale1').html('$40.00');
    }
    else {
      $('#sale1').html('$' + xfertax / .015);
    }
  }
  else {
    $('#sale1').html('invalid');
  }
};
