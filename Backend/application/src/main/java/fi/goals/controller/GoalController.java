package fi.goals.controller;

import fi.goals.model.DailyAchievement;
import fi.goals.model.SingleGoal;
import fi.goals.service.GoalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/goals")
public class GoalController {

    private final GoalService goalService;

    @Autowired
    public GoalController(GoalService goalService) {
        this.goalService = goalService;
    }

    @GetMapping("/list")
    public Iterable<SingleGoal> getSingleGoals(){
        return goalService.getSingleGoals();
    }

    @GetMapping("/list/{userId}")
    public Optional<SingleGoal> getSingleGoalsByUser(@PathVariable("userId") Integer userId){
        return goalService.getSingleGoalsByUser(userId);
    }

    @PostMapping("/add")
    public void addIndividualGoal(@RequestBody SingleGoal goal){
        goalService.addSingleGoal(goal);
    }

    @PostMapping("/daily")
    public void addDailyAchievements(@RequestBody DailyAchievement achievement){
        goalService.addDailyAchievements(achievement);
    }

}
