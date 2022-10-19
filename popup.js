const clickme = document.getElementById("myBtn");
clickme.addEventListener("click",async function () {
   document.getElementById("show_here").innerHTML = await getCurrentTab();
});

   async function getCurrentTab() {
      let queryOptions = { active: true, lastFocusedWindow: true };
      let [tab] = await chrome.tabs.query(queryOptions);
      return tab.title;
    }



