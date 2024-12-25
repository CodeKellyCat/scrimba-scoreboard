





let guestScore = 0
let homeScore = 0

let homeStoreEl = document.getElementById("home-score")
let homeBtn1 = document.getElementById("home-btn-1")
let homeBtn2 = document.getElementById("home-btn-2")
let homeBtn3 = document.getElementById("home-btn-3")

function plus1Home() {
    homeScore += 1;
    homeStoreEl.textContent = homeScore    
}

function plus2Home() {
    homeScore += 2;
    homeStoreEl.textContent = homeScore    
}

function plus3Home() {
    homeScore += 3;
    homeStoreEl.textContent = homeScore    
}

let guestStoreEl = document.getElementById("guest-score")
let guestBtn1 = document.getElementById("guest-btn-1")
let guestBtn2 = document.getElementById("guest-btn-2")
let guestBtn3 = document.getElementById("guest-btn-3")

function plus1Guest() {
    guestScore += 1;
    guestStoreEl.textContent = guestScore    
}

function plus2Guest() {
    guestScore += 2;
    guestStoreEl.textContent = guestScore    
}

function plus3Guest() {
    guestScore += 3;
    guestStoreEl.textContent = guestScore    
}