package com.example;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import java.util.Random;

@SpringBootApplication
public class DemoApplication {
    Random random = new Random();

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

}
