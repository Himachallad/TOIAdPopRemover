"use strict";

window.onload = function () {
  let changeColor = document.getElementById("changeColor");

  changeColor.onclick = function (element) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: `let allDocs = document.querySelectorAll('*')
           allDocs.forEach(elem => {
             if(elem.href && elem.href.includes("AdBlocker")){
                 elem.remove()
             }
          });`,
      });
    });
  };
};
