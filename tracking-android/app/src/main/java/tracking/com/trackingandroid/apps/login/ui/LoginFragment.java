package tracking.com.trackingandroid.apps.login.ui;

import android.content.Context;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import javax.inject.Inject;

import butterknife.ButterKnife;
import butterknife.OnClick;
import dagger.android.support.AndroidSupportInjection;
import tracking.com.trackingandroid.R;
import tracking.com.trackingandroid.apps.login.LoginPresenter;

public class LoginFragment extends Fragment implements LoginView {

    @Inject
    LoginPresenter loginPresenter;
    @Inject
    Context context;

    public LoginFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_login, container, false);
        ButterKnife.bind(this, view);
        return view;
    }

    @Override
    public void onAttach(Context context) {
        AndroidSupportInjection.inject(this);
        super.onAttach(context);
    }


    @OnClick(R.id.btn_login)
    public void login() {
        Log.d("LOGIN", "CLICKED");
        loginPresenter.login("bomar24", "lalala");
    }

    @Override
    public void showMainMenu() {

    }
}
