package fi.goals.service;

import fi.goals.model.DailyAchievement;
import fi.goals.model.SingleGoal;
import fi.goals.repository.SingleGoalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GoalService {

    private final SingleGoalRepository singleGoalRepository;

    @Autowired
    public GoalService(SingleGoalRepository singleGoalRepository) {
        this.singleGoalRepository = singleGoalRepository;
    }

    public Iterable<SingleGoal> getSingleGoals() {
        return singleGoalRepository.findAll();
    }

    public Optional<SingleGoal> getSingleGoalsByUser(Integer userId) {
        return singleGoalRepository.findByUserId(userId);
    }

    public void addSingleGoal(SingleGoal goal) {
        singleGoalRepository.save(goal);
    }

    public void addDailyAchievements(DailyAchievement achievement) {

        Optional<SingleGoal> goalThisFar = singleGoalRepository.findById(achievement.getId());
        goalThisFar.get().setAchieved(goalThisFar.get().getAchieved() + achievement.getQuantity());
        singleGoalRepository.save(goalThisFar.get());
    }
}
