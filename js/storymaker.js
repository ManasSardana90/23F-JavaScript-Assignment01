// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
const noun1Array = ["The Turkey", "Mom", "Dad", "The Dog", "My Teacher", "The Elephant", "The Cat"];
const verbArray = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectiveArray = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const noun2Array = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const settingArray = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes.."];

// Variables to store selected phrases for the story
let selectedNoun1 = "";
let selectedVerb = "";
let selectedAdjective = "";
let selectedNoun2 = "";
let selectedSetting = "";

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    const randomIndex = Math.floor(Math.random() * noun1Array.length);
    selectedNoun1 = noun1Array[randomIndex];
    document.getElementById("choosenNoun1").textContent = selectedNoun1;
}

function verb_on_click() {
    const randomIndex = Math.floor(Math.random() * verbArray.length);
    selectedVerb = verbArray[randomIndex];
    document.getElementById("choosenVerb").textContent = selectedVerb;
}

function adjective_on_click() {
    const randomIndex = Math.floor(Math.random() * adjectiveArray.length);
    selectedAdjective = adjectiveArray[randomIndex];
    document.getElementById("choosenAdjective").textContent = selectedAdjective;
}

function noun2_on_click() {
    const randomIndex = Math.floor(Math.random() * noun2Array.length);
    selectedNoun2 = noun2Array[randomIndex];
    document.getElementById("choosenNoun2").textContent = selectedNoun2;
}

function setting_on_click() {
    const randomIndex = Math.floor(Math.random() * settingArray.length);
    selectedSetting = settingArray[randomIndex];
    document.getElementById("choosenSetting").textContent = selectedSetting;
}

function playback_on_click() {
    // Check if all parts of the story have been selected
    if (!selectedNoun1 || !selectedVerb || !selectedAdjective || !selectedNoun2 || !selectedSetting) {
        // If any part is missing, display a funny error message
        document.getElementById("story").textContent = "Oops! Your story is missing some pieces. Click more buttons to complete it!";
    } else {
        // If all parts are selected, concatenate them into a story and display it
        const story = `${selectedNoun1} ${selectedVerb} ${selectedAdjective} ${selectedNoun2} ${selectedSetting}.`;
        document.getElementById("story").textContent = story;
    }
}


function random_on_click() {
    const randomNoun1 = noun1Array[Math.floor(Math.random() * noun1Array.length)];
    const randomVerb = verbArray[Math.floor(Math.random() * verbArray.length)];
    const randomAdjective = adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];
    const randomNoun2 = noun2Array[Math.floor(Math.random() * noun2Array.length)];
    const randomSetting = settingArray[Math.floor(Math.random() * settingArray.length)];
    const randomStory = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting}.`;
    document.getElementById("story").textContent = randomStory;
}

function addStudentInfo() {
    document.getElementById("studentId").textContent = "Manas Sardana / 200542367";
}

function reset_on_click() {
    // Reset selected phrases
    selectedNoun1 = "";
    selectedVerb = "";
    selectedAdjective = "";
    selectedNoun2 = "";
    selectedSetting = "";

    // Clear displayed phrases and story
    document.getElementById("choosenNoun1").textContent = "";
    document.getElementById("choosenVerb").textContent = "";
    document.getElementById("choosenAdjective").textContent = "";
    document.getElementById("choosenNoun2").textContent = "";
    document.getElementById("choosenSetting").textContent = "";
    document.getElementById("story").textContent = "";
}


/* Event Listeners
-------------------------------------------------- */
document.getElementById("noun1").addEventListener("click", noun1_on_click);
document.getElementById("verb").addEventListener("click", verb_on_click);
document.getElementById("adjective").addEventListener("click", adjective_on_click);
document.getElementById("noun2").addEventListener("click", noun2_on_click);
document.getElementById("setting").addEventListener("click", setting_on_click);
document.getElementById("playback").addEventListener("click", playback_on_click);
document.getElementById("random").addEventListener("click", random_on_click);
window.addEventListener("DOMContentLoaded", addStudentInfo);
document.getElementById("reset").addEventListener("click", reset_on_click);

