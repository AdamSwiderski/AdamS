const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
   }
   const game = {
    playerHand: "",
    aiHand: "",
   }
   const hands = [...document.querySelectorAll('.select img')];
   // Pierwsza funkcja (wybór użytkownika)
   function handSelection() {
    game.playerHand = this.dataset.option
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px black';
   }
   
   // Funkcja określająca wybór komputera (losowy wybór)
   function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
   }
   // Funkcja zwracająca informacje o wyniku gry
   function checkResult(player, ai) {
    if (player === ai) {
     return 'draw';
    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyce") || (player === "nożyce" && ai === "papier")) {
     return 'win';
    } else { return 'loss'; }
   }
   
   // funkcja wyświetlająca wyniki gier
   function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;
    if (result === "win") {
     document.querySelector('p.wins span').textContent = ++gameSummary.wins;
     document.querySelector('[data-summary="who-win"]').textContent = "Wygrałeś :)"
     document.querySelector('[data-summary="who-win"]').style.color = "blue";
    } else if (result === "loss") {
     document.querySelector('p.losses span').textContent = ++gameSummary.losses;
     document.querySelector('[data-summary="who-win"]').textContent = "Komputer wygrał :("
     document.querySelector('[data-summary="who-win"]').style.color = "red";
    } else {
     document.querySelector('p.draws span').textContent = ++gameSummary.draws;
     document.querySelector('[data-summary="who-win"]').textContent = "Remis :\\"
     document.querySelector('[data-summary="who-win"]').style.color = "black";
    }
   }
   function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";
    game.aiHand = "";
   }
   //funkcja sterująca
   function startGame() {
    if (!game.playerHand) { 
     return alert("Wybierz dłoń!!!!"); // alert jeśli uzytkownik nie wybierze dłoni
    }
    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    publishResult(game.playerHand, game.aiHand, gameResult);
    endGame()
   }
   hands.forEach(hand => hand.addEventListener('click', handSelection))
   document.querySelector('.start').addEventListener('click', startGame)
   
   