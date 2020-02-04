package tracking.com.trackingandroid.apps.login.di;

import dagger.Module;
import dagger.Provides;
import tracking.com.trackingandroid.apps.login.LoginPresenter;
import tracking.com.trackingandroid.apps.login.LoginPresenterImpl;
import tracking.com.trackingandroid.apps.login.ui.LoginView;

@Module
public class LoginModule {

    @Provides
    LoginPresenter provideLoginPresenter(LoginView loginView) {
        return new LoginPresenterImpl(loginView);
    }
}
