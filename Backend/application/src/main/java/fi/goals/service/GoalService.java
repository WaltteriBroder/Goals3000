package fi.goals.service;

import fi.goals.model.DailyAchievement;
import fi.goals.model.SingleGoal;
import fi.goals.repository.SingleGoalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
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

    public List<SingleGoal> getLatestSingleGoalsByUser(Integer userId) {

        List<SingleGoal> latestSingleGoalsByUser = new ArrayList<>();

        List<String> allGoalNamesByUser = singleGoalRepository.getAllGoalNamesByUser(userId);

        for (String goalName : allGoalNamesByUser) {
            LocalDateTime latestGoalTime = singleGoalRepository.getLatestGoalTime(userId, goalName);
            SingleGoal latestSingleGoalByUser = singleGoalRepository.getLatestSingleGoalByUser(userId, latestGoalTime, goalName);
            latestSingleGoalsByUser.add(latestSingleGoalByUser);
        }
        return latestSingleGoalsByUser;
    }

    public void addSingleGoal(SingleGoal goal) {
        goal.setAdded(LocalDateTime.now());
        singleGoalRepository.save(goal);
    }

    public void addDailyAchievements(DailyAchievement achievement) {

        Optional<SingleGoal> goalThisFar = singleGoalRepository.findById(achievement.getId());
        goalThisFar.get().setAchieved(goalThisFar.get().getAchieved() + achievement.getQuantity());
        achievement.setAdded(LocalDateTime.now());
        singleGoalRepository.save(goalThisFar.get());
    }
}
