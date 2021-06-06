class ResourceGatherRates {
    constructor() {
        this.windowSizeSeconds = Engine.ConfigDB_GetValue("user", "economyhelper.resourcegatherrates.window.seconds");

        this.headline = Engine.GetGUIObjectByName("economyHelper_resourceGatherRates_Headline");
        this.headline.caption = `${this.headline.caption} per ${this.windowSizeSeconds} Seconds`

        this.gatherRateTrackers = []
        for (let resCode of g_ResourceData.GetCodes())
            this.addGatherRate(resCode);

        this.init();

        registerSimulationUpdateHandler(this.rebuild.bind(this))
    }

    addGatherRate(resCode) {
        let id = "[" + this.gatherRateTrackers.length + "]";
        this.gatherRateTrackers.push(
            new GatherRate(
                resCode,
                this.windowSizeSeconds,
                Engine.GetGUIObjectByName("economyHelper_resource" + id),
                Engine.GetGUIObjectByName("economyHelper_resource" + id + "_icon"),
                Engine.GetGUIObjectByName("economyHelper_resource" + id + "_gather_rate")
            )
        );
    }

    init() {
        horizontallySpaceObjects("economyHelper_resourceGatherRates_Counter", this.gatherRateTrackers.length);

        for (let counter of this.gatherRateTrackers) {
            counter.icon.sprite = "stretched:session/icons/resources/" + counter.resCode + ".png";
        }
    }

    rebuild() {
        let viewedPlayerState = g_SimState.players[g_ViewedPlayer]
        let timeElapsed = g_SimState.timeElapsed
        for (let gatherRateTracker of this.gatherRateTrackers)
        {
            gatherRateTracker.rebuild(timeElapsed, viewedPlayerState);
        }
    }
}
