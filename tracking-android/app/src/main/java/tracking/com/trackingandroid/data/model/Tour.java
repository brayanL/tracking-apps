package tracking.com.trackingandroid.data.model;

import com.google.gson.annotations.Expose;

import java.util.List;

public class Tour {
    @Expose
    private String timeStart;
    @Expose
    private String timeFinish;
    @Expose
    private List<Location> locations;

    public Tour(String timeStart, String timeFinish, List<Location> locations) {
        this.timeStart = timeStart;
        this.timeFinish = timeFinish;
        this.locations = locations;
    }

    public String getTimeStart() {
        return timeStart;
    }

    public void setTimeStart(String timeStart) {
        this.timeStart = timeStart;
    }

    public String getTimeFinish() {
        return timeFinish;
    }

    public void setTimeFinish(String timeFinish) {
        this.timeFinish = timeFinish;
    }

    public List<Location> getLocations() {
        return locations;
    }

    public void setLocations(List<Location> locations) {
        this.locations = locations;
    }

    @Override
    public String toString() {
        return "Tour{" +
                "timeStart='" + timeStart + '\'' +
                ", timeFinish='" + timeFinish + '\'' +
                ", locations=" + locations +
                '}';
    }
}
