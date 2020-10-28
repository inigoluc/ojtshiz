$().ready(function() {
    console.log('ready')
    $('#the-cave').click(handleCave)
    $('#the-house').click(handleHouse)
    $('#the-goldmine').click(handleGoldmine)
    $('#the-casino').click(handleCasino)
    $('#reset').click(handleReset)
    
})

var attempts = 20; // attempts
var cgold = 0; // current gold

var ninjaLog = []
var losses = [] //all negative values
var gains = []  //all positive values

function handleCave() {
    var g = 5

    var d = new Date()
    var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
    
    cgold += g
    attempts -= 1
    
    var cave = {
      time: time,
      location: 'cave',
      gold: g
    }
    
    var html = `<li> ${cave.time} : ${cave.gold} at ${cave.location} </li>`
    $('#gains-events').append(html).css("color", "green")
    gains.push(cave)
    $('#all-events').append(html)
    
    ninjaLog.push(cave)
    console.log(ninjaLog)
    
    $('.tg').html( function() {
        if (g < 0) {
            $(this).css("color", "red")
        } else if (g === 0){
            $(this).css("color", "black")
        } else {
            $(this).css("color", "green")
        }
    })
    
    $('.tg').html( cgold )
    $('#attempts').html('Attempts: ' + attempts)
    
}

function handleHouse() {
    var x = (Math.random() < 0.2 ? 0 : 1)
    var g = x * 10
    
    var d = new Date()
    var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
    
    cgold += g
    attempts -= 1

    var house = {
      time: time,
      location: 'house',
      gold: g
    }
    
    if(g === 0) {
      var html = `<li> ${house.time} : ${house.gold} at ${house.location} </li>`
      $('#all-events').append(html)
    } else if (g > 0) {
      var html = `<li> ${house.time} : ${house.gold} at ${house.location} </li>`
      $('#gains-events').append(html).css("color", "green")
      gains.push(house)
    }
  
    $('#all-events').append(html)
    
    ninjaLog.push(house)
    console.log(ninjaLog)
    
    $('.tg').html( function() {
        if (g < 0) {
            $(this).css("color", "red")
        } else if (g === 0){
            $(this).css("color", "black")
        } else {
            $(this).css("color", "green")
        }
    })

    $('.tg').html( cgold )
    $('#attempts').html('Attempts: ' + attempts)
     
}

function handleGoldmine() {
    var x = (Math.random() < 0.2 ? 0 : 1)
    var g = x * (Math.floor(Math.random() * 25) + 1)
   
    var d = new Date()
    var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
    
    cgold += g
    attempts -= 1
    
    var goldmine = {
      time: time,
      location: 'goldmine',
      gold: g
    }
    
    if(g === 0) {
      var html = `<li> ${goldmine.time} : ${goldmine.gold} at ${goldmine.location} </li>`
      $('#all-events').append(html)
    } else if (g > 0) {
      var html = `<li> ${goldmine.time} : ${goldmine.gold} at ${goldmine.location} </li>`
      $('#gains-events').append(html).css("color", "green")
      gains.push(goldmine)
    }
  
    $('#all-events').append(html)

    ninjaLog.push(goldmine)
    console.log(ninjaLog)
    
    $('.tg').html( function() {
        if (g < 0) {
            $(this).css("color", "red")
        } else if (g === 0){
            $(this).css("color", "black")
        } else {
            $(this).css("color", "green")
        }
    })
    
    $('.tg').html( cgold )
    $('#attempts').html('Attempts: ' + attempts)
     
}

function handleCasino() {
  var x = (Math.random() < 0.5 ? -1 : 1)
  var g = x * (Math.floor(Math.random() * (50 - 40)) + 40)
  
  var d = new Date()
  var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
  
  cgold += g
  attempts -= 1

  var casino = {
    time: time,
    location: 'casino',
    gold: g
  }
  
  if(g < 0) {
    var html = `<li> ${casino.time} : ${casino.gold} at ${casino.location} </li>`
    $('#losses-events').append(html).css("color", "red")
    losses.push(casino)
  } else if (g > 0) {
    var html = `<li> ${casino.time} : ${casino.gold} at ${casino.location} </li>`
    $('#gains-events').append(html).css("color", "green")
    gains.push(casino)
  }
  
  $('#all-events').append(html)

  ninjaLog.push(casino)
  console.log(ninjaLog)
  
  $('.tg').html( function() {
      if (g < 0) {
          $(this).css("color", "red")
      } else if (g === 0){
          $(this).css("color", "black")
      } else {
          $(this).css("color", "green")
      }
  })
  
  $('.tg').html( cgold )
  $('#attempts').html('Attempts: ' + attempts)
  
}

function handleReset() {
  cgold = 0
  g = 0
  attempts = 20
  losses = []
  gains = []
  ninjaLog = []
    
  $('.tg').html( function() {
    if (cgold === 0){
      $(this).css("color", "black")
    }
  })
  
  $('#losses-events').empty()
  $('#gains-events').empty()
  $('#all-events').empty()
  
  $('.tg').html(cgold)
  $('#attempts').html('Attempts: ' + attempts)

}

function myFunc(total, num) {
  return total + num;
}



/*

    > bootstrap tabs to sort logs
        > All
            - 3 columns per array (time, location, amount)
            what it should look like, per column will have <ul> <li>
                >  A1  -  12:00:00  |  Cave   |  5
                >  A2  -  12:00:30  |  House  |  10
                >  A3  -  12:01:00  |  Casino |  45

        for each item in the array, append li + index value + /li


        > Losses
            get all values in array that is < 0 then add all up

                var tloss = [i]; // all stored negative int

                $.map( ngold, function( i ) {
                    if (i < 0) {
                        return null;
                    return i; // returns all negative integers
                    }
                });

        > Gains
            get all values in array that is > 0 then add all up

    > arrays for events
        > positive
            events with gold gained > 0
        > negative
            events with gold gained < 0


*/