package tracking.com.trackingandroid.apps.tours;


import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import tracking.com.trackingandroid.R;

/**
 * A simple {@link Fragment} subclass.
 */
public class RecordToursFragment extends Fragment {


    public RecordToursFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_record_tours, container, false);
    }

}
