$(document).ready(function () {

  // Check local storage and set theme
  if (localStorage.lang) {

    $('body').addClass(localStorage.lang);

  }
  else {

    $('body').addClass('thai'); // set default theme. No need to set via php now

  }

  //Switch theme and store in local storage ...

  $("#english").click(function () {

      $('body').removeClass('thai').addClass('english');
      localStorage.lang = 'english';
  });
  $("#thai").click(function () {
      $('body').removeClass('english').addClass('thai');
      localStorage.lang = 'thai';
  });
});
