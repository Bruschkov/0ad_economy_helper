var g_EconomyHelperOverlay;

/*

var sessionInit = init;
function init(...args) {
    sessionInit(...args);
    warn("Economy Helper Overlay Initializing.....");
    g_EconomyHelperOverlay = new EconomyHelperOverlay();
    warn("Economy Helper Overlay Initialized!");
}
*/


function initEconomyHelperOverlay() {
    //warn("Economy Helper Overlay Initializing.....")
    g_EconomyHelperOverlay = new EconomyHelperOverlay();
    //warn("Economy Helper Overlay Initialized!")
}

nestCallback(initEconomyHelperOverlay, init);
