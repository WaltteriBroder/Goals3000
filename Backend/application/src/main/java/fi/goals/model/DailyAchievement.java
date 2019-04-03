package fi.goals.model;

public class DailyAchievement {


    private Integer id;
    private Integer quantity;

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

    @Override
    public String toString() {
        return "DailyAchievement{" +
                "id=" + id +
                ", quantity=" + quantity +
                '}';
    }
}
