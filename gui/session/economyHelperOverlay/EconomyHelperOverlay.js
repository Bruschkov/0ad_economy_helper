class EconomyHelperOverlay {
    constructor() {
        this.economyHelperOverlay = Engine.GetGUIObjectByName("economyHelper_Overlay");
        this.economyHelperOverlay.onPress = this.toggle.bind(this);

        this.testText = Engine.GetGUIObjectByName("economyHelper_testText");
        this.testText.caption = "OVERRIDDEN TEXT!"

        this.resourceGatherRates = new ResourceGatherRates()
    }

    toggle() {
        this.economyHelperOverlay.hidden = !this.economyHelperOverlay.hidden
    }
}
