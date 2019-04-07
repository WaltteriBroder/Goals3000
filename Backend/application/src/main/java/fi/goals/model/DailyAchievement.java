package fi.goals.model;

import java.time.LocalDateTime;

public class DailyAchievement {


    private Integer id;
    private Integer quantity;
    private LocalDateTime added;

    public DailyAchievement(Integer quantity, LocalDateTime added) {
        this.quantity = quantity;
        this.added = added;
    }

    public DailyAchievement(Integer quantity) {
        this.quantity = quantity;
    }

    public DailyAchievement() {
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

    public LocalDateTime getAdded() {
        return added;
    }

    public void setAdded(LocalDateTime added) {
        this.added = added;
    }

    @Override
    public String toString() {
        return "DailyAchievement{" +
                "id=" + id +
                ", quantity=" + quantity +
                ", added=" + added +
                '}';
    }
}
