package fi.goals;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// Seuraavaksi:
// 1.Kato onko getLatestGoal oikein, kutsu sitä ja käytä toiseen queryyn
@SpringBootApplication
public class MainApplication {

    public static void main(String[] args) {
        SpringApplication.run(MainApplication.class, args);
    }

}
