var makeItRain = function() {
  $('.rain').empty();//clear out everything
  var increment = 0;
  var firstDrops = "";
  var secondDrops = "";
  while (increment < 200) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    var randoDelayValue = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    //random number between 5 and 2
    var randomposition = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    //increment
    increment += randomposition;
    //add in a new raindrop with various randomizations to certain CSS properties
    firstDrops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randomposition + randomposition - 1 + 100) + '%; animation-delay: 0.' + randoDelayValue + 's; animation-duration: 0.5' + randoDelayValue + 's;"><div class="raindrop" style="animation-delay: 0.' + randoDelayValue + 's; animation-duration: 0.5' + randoDelayValue + 's;"></div><div class="splat" style="animation-delay: 0.' + randoDelayValue + 's; animation-duration: 0.5' + randoDelayValue + 's;"></div></div>';
    secondDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randomposition + randomposition - 1 + 100) + '%; animation-delay: 0.' + randoDelayValue + 's; animation-duration: 0.5' + randoDelayValue + 's;"><div class="raindrop" style="animation-delay: 0.' + randoDelayValue + 's; animation-duration: 0.5' + randoDelayValue + 's;"></div><div class="splat" style="animation-delay: 0.' + randoDelayValue + 's; animation-duration: 0.5' + randoDelayValue + 's;"></div></div>';
  }
  $('.rain.firstAreaDiv').append(firstDrops);
  $('.rain.secondAreaDiv').append(secondDrops);
}
makeItRain();