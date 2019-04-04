package fi.goals.repository;

import fi.goals.model.SingleGoal;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SingleGoalRepository extends CrudRepository<SingleGoal, Integer> {

    Optional<SingleGoal> findById(Integer id);

    Optional<SingleGoal> findByUserId(Integer userId);

}
