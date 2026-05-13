(function () {
  "use strict";

  // Part I: log message when page loads
  window.addEventListener("load", init);

  /**
   * Sets up event listeners for the Encrypt-It! and Reset buttons
   * once the DOM is fully loaded.
   */
  function init() {
    console.log("Window loaded!");

    // Part II: Encrypt-It! button
    document.getElementById("encrypt-it").addEventListener("click", handleClick);

    // Part III: Reset button
    document.getElementById("reset").addEventListener("click", handleReset);
  }

  /**
   * Handles a click on the Encrypt-It! button.
   * Reads the input textarea, applies the selected cipher,
   * and writes the result to the #result paragraph.
   */
  function handleClick() {
    console.log("Button clicked!");
    let inputText = document.getElementById("input-text").value;
    let cipher = document.getElementById("cipher-type").value;

    let encrypted = "";
    if (cipher === "shift") {
      encrypted = shiftCipher(inputText);
    }

    document.getElementById("result").textContent = encrypted;
  }

  /**
   * Handles a click on the Reset button.
   * Clears the input textarea and the result paragraph.
   */
  function handleReset() {
    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
  }

  /**
   * Returns an encrypted version of the given text, where each letter
   * is shifted alphabetically ahead by 1 letter, and 'z' wraps to 'a'.
   * Non-letter characters are left unchanged.
   * @param {string} text - the message to encrypt
   * @returns {string} the shift-ciphered result
   */
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < "a" || text[i] > "z") {
        result += text[i];
      } else if (text[i] === "z") {
        result += "a";
      } else {
        let letter = text.charCodeAt(i);
        result += String.fromCharCode(letter + 1);
      }
    }
    return result;
  }

})();
