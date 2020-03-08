package crud.example.backend.animal;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@Entity
@Table(name = "animal")
public class Animal {

    @Id
    @GeneratedValue
    private long animalId;

    private String animalName;
    private String gender;
    private Date creationDate;
    private Date modifiedDate;

    public static final String ANIMAL_ID = "animal_id";
    public static final String ANIMAL_NAME = "animal_name";
    public static final String CREATION_DATE = "creation_date";
    public static final String MODIFIED_DATE = "modified_date";

}
