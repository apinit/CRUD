package crud.example.backend.animal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class AnimalService {

    @Autowired
    private AnimalRepository animalRepository;

    @Transactional(rollbackOn = Exception.class)
    public void addAnimal(Animal animal) {
        animalRepository.save(animal);
    }

}
