package tracking.com.trackingandroid.util;

import android.content.Context;
import android.widget.Toast;

public class CommonUtils {

    public static void showSimpleToastMessages(Context context, String message) {
        Toast.makeText(context, message, Toast.LENGTH_LONG).show();
    }
}
