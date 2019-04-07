package fi.goals.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class SingleGoal {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    private Integer quantity;
    private String goalName;
    private Integer achieved;
    private LocalDateTime added;

    @Column(name = "user_id")
    private Integer userId;

    public SingleGoal(Integer quantity, String goalName, Integer achieved, LocalDateTime added, Integer userId) {
        this.quantity = quantity;
        this.goalName = goalName;
        this.achieved = achieved;
        this.added = added;
        this.userId = userId;
    }

    public SingleGoal() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getGoalName() {
        return goalName;
    }

    public void setGoalName(String goalName) {
        this.goalName = goalName;
    }

    public Integer getAchieved() {
        return achieved;
    }

    public void setAchieved(Integer achieved) {
        this.achieved = achieved;
    }

    public LocalDateTime getAdded() {
        return added;
    }

    public void setAdded(LocalDateTime added) {
        this.added = added;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }


    @Override
    public String toString() {
        return "SingleGoal{" +
                "id=" + id +
                ", quantity=" + quantity +
                ", goalName='" + goalName + '\'' +
                ", achieved=" + achieved +
                ", added=" + added +
                ", userId=" + userId +
                '}';
    }
}
