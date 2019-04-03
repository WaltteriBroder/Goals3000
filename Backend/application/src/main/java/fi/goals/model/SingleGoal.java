package fi.goals.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class SingleGoal {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    private Integer quantity;
    private String goalName;
    private Integer achieved;

    public SingleGoal(Integer quantity, String goalName, Integer achieved) {
        this.quantity = quantity;
        this.goalName = goalName;
        this.achieved = achieved;
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

    @Override
    public String toString() {
        return "SingleGoal{" +
                "id=" + id +
                ", quantity=" + quantity +
                ", goalName='" + goalName + '\'' +
                ", achieved='" + achieved + '\'' +
                '}';
    }
}
