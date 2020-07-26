define(['dataService', 'jquery'], function(dataService, $) {
  let name = 'Tom'
  function showMsg() {
    console.log(dataService.getMsg() + name);
  }
  $('body').css('background', 'green')
  return { showMsg }
})