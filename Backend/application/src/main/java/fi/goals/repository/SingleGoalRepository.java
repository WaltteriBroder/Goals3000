package fi.goals.repository;

import fi.goals.model.SingleGoal;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Repository
public interface SingleGoalRepository extends CrudRepository<SingleGoal, Integer> {

    Optional<SingleGoal> findById(Integer id);

    Optional<SingleGoal> findByUserId(Integer userId);

    @Query(value = "SELECT DISTINCT goal_name FROM single_goal WHERE user_id = ?1", nativeQuery = true)
    List<String> getAllGoalNamesByUser(Integer userId);

    @Query(value = "SELECT MAX(added) FROM single_goal WHERE user_id = ?1 AND goal_name = ?2", nativeQuery = true)
    LocalDateTime getLatestGoalTime(Integer userId, String goalName);

    @Query(
            value = "SELECT * FROM single_goal u WHERE user_id = ?1 AND added = ?2 AND goal_name =?3",
            nativeQuery = true)
    SingleGoal getLatestSingleGoalByUser(Integer userId, LocalDateTime latestGoalTime, String goalName);

//    select max(orderdate) from orders group by customerid;

}
