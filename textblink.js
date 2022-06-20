       
          $(function () {
  count = 0;
  wordsArray = ["Scientist", "Engineer", "Artist", "Statistician", "Thinker", "Researcher", "Learning","Teacher","Mathematician"];
  setInterval(function () {
    count++;
    $("#word").fadeOut(300, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(300);
    });
  }, 2000);
});