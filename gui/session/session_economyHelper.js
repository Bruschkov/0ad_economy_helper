var g_EconomyHelperOverlay;

function initEconomyHelperOverlay() {
    g_EconomyHelperOverlay = new EconomyHelperOverlay();
}

init = nestCallback(init, initEconomyHelperOverlay);
