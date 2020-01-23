// Тоглогчийн ээлж хадгалах хувьсагч
var activePlayer = 0;

// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулах оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6) + 1;

var diceDom = document.querySelector(".dice");

diceDom.style.display = 'none';
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;

document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

// Шоог шидэх эвент листенер 
document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = 'block';
  diceDom.src = 'dice-' + diceNumber + ".png";

  // Буусан тоо нь 1 ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
    if(diceNumber !== 1){
      roundScore = roundScore + diceNumber;
      document.getElementById('current-' + activePlayer).textContent = roundScore;
    }else{

      switchToNextPlayer();
    }

});

// Hold товчны эвент листенер
document.querySelector('.btn-hold').addEventListener('click', function(){
  scores[activePlayer] = scores[activePlayer] + roundScore;

  document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
  // hojson esehiig shalgah

  if(scores[activePlayer] >= 100){
    document.getElementById('name-' + activePlayer).textContent = 'Та Ялагч боллоо!!!';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
  }else{
    switchToNextPlayer();
  }
  

  
});

function switchToNextPlayer(){
      roundScore = 0;

      document.getElementById('current-' + activePlayer).textContent = 0;

      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

      // Улаан цэгийг шилжүүлэх код
      document.querySelector(".player-0-panel").classList.toggle("active");
      document.querySelector('.player-1-panel').classList.toggle("active");

      diceDom.style.display = "none";
}