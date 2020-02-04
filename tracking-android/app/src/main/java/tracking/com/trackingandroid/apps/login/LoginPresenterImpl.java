package tracking.com.trackingandroid.apps.login;

import android.util.Log;

import tracking.com.trackingandroid.apps.login.ui.LoginView;

public class LoginPresenterImpl implements LoginPresenter {
    private static final String TAG = LoginPresenterImpl.class.getSimpleName();

    public LoginPresenterImpl(LoginView loginView) {
    }

    @Override
    public void login(String username, String password) {
        Log.i(TAG, "HERE: " + username + " " + password);
    }

    @Override
    public void onDestroy() {

    }
}
