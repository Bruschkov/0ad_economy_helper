class GatherRate {
    constructor(resCode, panel, icon, rate) {
        this.timeWindowMilliSeconds = 60 * 1000;

        this.timestamps = [];
        this.resourceCounts = [];

        this.resCode = resCode;
        this.panel = panel;
        this.panel.caption("RESOURCE INITIALIZED!")
        this.icon = icon;
        this.rate = rate;
    }

    rebuild(timestamp, playerState) {
        this.timestamps.push(timestamp);
        let resourcesGathered = playerState.statistics.resourcesGathered[this.resCode];
        this.resourceCounts.push(resourcesGathered);

        let windowStartTime = timestamp - this.timeWindowMilliSeconds;
        while (
            this.timestamps.length
            && this.resourceCounts.length
            && this.timestamps[0] < windowStartTime
            ) {
            this.timestamps.shift();
            this.resourceCounts.shift();
        }

        let resourcesGatheredInWindow = 0;
        if (this.resourceCounts.length)
            resourcesGatheredInWindow = this.resourceCounts[this.resourceCounts.length - 1] - this.resourceCounts[0];

        this.rate.caption = Math.floor(resourcesGatheredInWindow);
    }
}
