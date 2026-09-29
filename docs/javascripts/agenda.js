// During the bootcamp week (26 to 30 October 2026), open the agenda on today's tab.
// document$ is provided by Material and fires on every page load, including instant navigation.
document$.subscribe(function () {
  var set = document.querySelector(".md-content .tabbed-set");
  if (!set || !document.querySelector(".ib-dayhead")) return;

  var now = new Date();
  var isBootcampWeek = now.getFullYear() === 2026 && now.getMonth() === 9 &&
    now.getDate() >= 26 && now.getDate() <= 30;
  if (!isBootcampWeek) return;

  var inputs = set.querySelectorAll(":scope > input");
  var today = inputs[now.getDate() - 26];
  if (today) today.click();

  var labels = set.querySelectorAll(".tabbed-labels > label");
  var label = labels[now.getDate() - 26];
  if (label) label.classList.add("ib-today");
});
