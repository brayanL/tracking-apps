package tracking.com.trackingandroid.data;

import android.util.Log;

import io.reactivex.Observable;
import retrofit2.Response;
import tracking.com.trackingandroid.data.model.LoginUser;
import tracking.com.trackingandroid.data.remote.TrackingService;

/**
 * It keeps a reference to every helper class and uses
 * them to satisfy the requests coming from the presenters. Its methods make extensive use
 * of Rx operators to combine, transform or filter the output coming from the helpers in order
 * to generate the desired output ready for the Presenters. It returns observables that emit
 * data models.
 * */
public class DataManager {

    private TrackingService trackingService;

    public DataManager(TrackingService trackingService) {
        this.trackingService = trackingService;
    }

    public Observable<Response<Void>> login(String username, String password) {
        LoginUser loginUser = new LoginUser();
        loginUser.setUsername(username);
        loginUser.setPassword(password);
        return trackingService.login(loginUser);
    }
}
