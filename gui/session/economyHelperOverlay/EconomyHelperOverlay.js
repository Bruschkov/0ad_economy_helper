class EconomyHelperOverlay {
    constructor() {
        this.economyHelperOverlay = Engine.GetGUIObjectByName("economyHelper_Overlay");
        this.economyHelperOverlay.onPress = this.toggle.bind(this);

        this.resourceGatherRates = new ResourceGatherRates()
    }

    toggle() {
        this.economyHelperOverlay.hidden = !this.economyHelperOverlay.hidden
    }
}
