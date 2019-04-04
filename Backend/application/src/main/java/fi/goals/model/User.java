package fi.goals.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue
    @Column(name = "user_id")
    private Long id;
    private String name;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private List<SingleGoal> goals;

    public User(String name, List<SingleGoal> goals) {
        this.name = name;
        this.goals = goals;
    }

    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<SingleGoal> getGoals() {
        return goals;
    }

    public void setGoals(List<SingleGoal> goals) {
        this.goals = goals;
    }
}
