class GatherRate {
    constructor(resCode, windowSizeSeconds, panel, icon, rate) {
        this.resCode = resCode;
        this.windowSizeMilliSeconds = windowSizeSeconds * 1000;
        this.panel = panel;
        this.icon = icon;
        this.rate = rate;

        this.timestamps = [];
        this.resourceCounts = [];
    }

    rebuild(timestamp, playerState) {
        this.timestamps.push(timestamp);
        let resourcesGathered = playerState.statistics.resourcesGathered[this.resCode];
        this.resourceCounts.push(resourcesGathered);

        let windowStartTime = timestamp - this.windowSizeMilliSeconds;
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
