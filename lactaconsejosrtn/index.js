const launchApp = (deepLink = "", fallBack = "") => {
  var now = new Date().valueOf();
  setTimeout(function () {
    window.location = fallBack;
  }, 10000);
  window.location = deepLink;
};

const deepLink = "lactaconsejos://a" + window.location.pathname;
const fallbackLink =
  "https://play.google.com/store/apps/details?id=com.samilabud.LactaConsejos";

launchApp(deepLink, fallbackLink);
