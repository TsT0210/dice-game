// Тоглогчийн ээлж хадгалах хувьсагч
var isNewGame = true;
var activePlayer = 0;

// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулах оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6) + 1;

var diceDom = document.querySelector(".dice");

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;

document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

diceDom.style.display = 'none';

// Шоог шидэх эвент листенер 
document.querySelector(".btn-roll").addEventListener("click", function() {
  if(isNewGame){
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
  }else{
    alert("Тоглоом дууссан байна. NEW GAME товчийг дарж шинээр эхлэнэ үү");
  }

});

// Hold товчны эвент листенер
document.querySelector('.btn-hold').addEventListener('click', function(){
  if(isNewGame){
    scores[activePlayer] = scores[activePlayer] + roundScore;

  document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
  // hojson esehiig shalgah

  if(scores[activePlayer] >= 10){
    isNewGame = false;
    document.getElementById('name-' + activePlayer).textContent = 'Та Ялагч боллоо!!!';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
  }else{
    switchToNextPlayer();
  }
  }else{
    alert("Тоглоом дууссан байна. NEW GAME товчийг дарж шинээр эхлэнэ үү");
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

// shine togloom ehlvvleh towwchnii event

document.querySelector('.btn-new').addEventListener('click', function(){

  isNewGame = true; 
  activePlayer = 0;

// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулах оноог хадгалах хувьсагч
  roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;

document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0; 

document.getElementById('name-0').textContent = 'Тоглогч 1';
document.getElementById('name-1').textContent = 'Тоглогч 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');

diceDom.style.display = 'none';
})