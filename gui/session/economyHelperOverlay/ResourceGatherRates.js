class ResourceGatherRates {
    constructor() {
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
                Engine.GetGUIObjectByName("economyHelper_resource" + id),
                Engine.GetGUIObjectByName("economyHelper_resource" + id + "_icon"),
                Engine.GetGUIObjectByName("economyHelper_resource" + id + "_gather_rate")
            )
        );
    }

    init() {
        horizontallySpaceObjects("economyHelper_resourceGatherRates", this.gatherRateTrackers.length);

        for (let counter of this.counters) {
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
