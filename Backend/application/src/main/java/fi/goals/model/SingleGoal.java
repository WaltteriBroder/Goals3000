package fi.goals.model;

import javax.persistence.*;

@Entity
public class SingleGoal {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    private Integer quantity;
    private String goalName;
    private Integer achieved;

    @Column(name = "user_id")
    private Integer userId;

    public SingleGoal(Integer quantity, String goalName, Integer achieved, Integer userId) {
        this.quantity = quantity;
        this.goalName = goalName;
        this.achieved = achieved;
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
                ", userId=" + userId +
                '}';
    }
}
