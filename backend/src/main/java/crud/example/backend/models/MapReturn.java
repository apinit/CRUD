package crud.example.backend.models;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class MapReturn {

    public static Map<String, Object> objReturn(Object data, long total, String message, String status){
        Map<String, Object> mapReturn = new HashMap<>(4);

        mapReturn.put("data", data);
        mapReturn.put("total", total);
        mapReturn.put("message", message);
        mapReturn.put("status", status);

        return mapReturn;
    }
}
