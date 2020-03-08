package crud.example.backend.animal;

import crud.example.backend.models.MapReturn;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Map;

@RestController
@RequestMapping(value = "/animal")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class AnimalController {

    @Autowired
    private AnimalService animalService;

    @PostMapping(value = "/add")
    @ResponseBody
    private Map<String, ?> addAnimal(@RequestBody Animal animal){
        String message;
        try {
            animal.setCreationDate(new Date());
            animalService.addAnimal(animal);
            return MapReturn.objReturn(null, 1, "Add animal", "success");
        } catch (Exception e) {
            e.printStackTrace();
            message = e.getMessage();
        }
        return MapReturn.objReturn(null, 0, message, "fail");
    }
}
