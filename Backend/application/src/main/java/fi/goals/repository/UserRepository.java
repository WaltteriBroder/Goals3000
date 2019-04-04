package fi.goals.repository;

import fi.goals.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

public interface UserRepository extends CrudRepository<User, Long> {

    @Query(
            value = "SELECT * FROM USER u WHERE u.name = ?1",
            nativeQuery = true)
    Collection<User> findByName(String name);
}
