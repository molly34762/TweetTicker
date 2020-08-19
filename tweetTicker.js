$( document ).ready(function() {
  $.ajax({
    type: "GET",
    url: "lab1.json",
    dataType: "json",
    success: function(lab1){
        displayContent(lab1);
    }
  
  });
  $(".heart").toggleClass('is_animating');
  $(".heart").on('click touchstart', function(){
  $(this).toggleClass('is_animating');
  });
  
  /*when the animation is over, remove the class*/
  $(".heart").on('animationend', function(){
  $(this).toggleClass('is_animating');
  });

});


function displayContent(lab1){
  var counter = 0;
  // var tweets = $('.tweets');
  var tweetUser;
  var tweetDisplay = [];

  $.each(lab1, function(i){

    //append profile image
    if (lab1[i].hasOwnProperty('user')) {
      
      tweetUser = document.createElement("div");
      tweetUser.setAttribute("class", "tweetUser");

      var user = lab1[i].user;
      if(user.hasOwnProperty('profile_image_url')){

        //append profile pic
        var inputTweetPic = document.createElement("img");
        inputTweetPic.setAttribute("class", "tweetPicture");
        inputTweetPic.setAttribute("onerror", "this.onerror=null;this.src='profile.png';");
        inputTweetPic.setAttribute("src", lab1[i].user.profile_image_url);
        tweetUser.append(inputTweetPic);
        //append user name
        var inputUserName = document.createElement("h");
        inputUserName.setAttribute("class", "tweetUserName");
        inputUserName.innerHTML =  lab1[i].user.name;
        tweetUser.append(inputUserName);
      }
    }  

    //append tweet
    if(lab1[i].hasOwnProperty('text')){

      var inputTweetText = document.createElement("p");
      inputTweetText.setAttribute("class", "tweetText");
      inputTweetText.innerHTML = lab1[i].text;
      tweetUser.append(inputTweetText);
    }
    tweetDisplay.push(tweetUser);
    counter++;
  }); 


  for (var i = 0; i <= 4; i++) {
    $('.tweets').append(tweetDisplay[i]);
  }

  $('#tweets div:first-child').animate({ up: '+=50', opacity: '0.8' }, 5000);

  (function Animate (j) {

    setTimeout(function () {
      if (j < counter){ 
        $('.tweets div:first-child').remove();
        $('.tweets div:first-child').animate({ up: '+=350', opacity: '0.8' }, 1000 );
      }
      $('.tweets').append(tweetDisplay[counter - j + 5]);
      if (--j) { 
        Animate(j); 
      }
    }, 5000);
  })(counter-5);

}













  


