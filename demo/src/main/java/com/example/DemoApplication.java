package com.example;

import com.example.entity.MesCompetences;
import com.example.repos.InterCompetences;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Date;
import java.util.List;
import java.util.Random;

@SpringBootApplication
public class DemoApplication {

    Random random = new Random();

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(InterCompetences interCompetences) {
        return args -> {
            // Creation d'une liste de compétences au démarrage
            List<MesCompetences> competencesList = List.of(
                    MesCompetences.builder()
                            .languages("Java")
                            .framework("Eco Systeme de Spring")
                            .videoPresentation("intro-java.mp4")
                            .lienGit("https://github.com/kounet95/travaux_la_Dockerisation_ArchitectureMicroServices_Springcloud.git")
                            .description("Dockerisation & Architecture Microservices avec Spring Boot & Spring Cloud")
                            .date(new Date())
                            .image("https://raw.githubusercontent.com/kounet95/portofolio-images/main/DockerisationArchitectureMicroServices.jpg")
                            .level(5)
                            .lienDemo("http://138.197.137.215:82/")
                            .build(),

                    MesCompetences.builder()
                            .languages("JavaScript")
                            .framework("Angular")
                            .videoPresentation("intro-react.mp4")
                            .lienGit("https://github.com/kounet95/angularMateriel.git")
                            .description("Développement d'une application avec Angular materiel avec un systeme d'authentication")
                            .date(new Date())
                            .image("https://raw.githubusercontent.com/kounet95/portofolio-images/main/angular.png")
                            .level(5)
                            .lienDemo("http://138.197.137.215:83/")
                            .build(),
                    MesCompetences.builder()
                            .languages("Java et JavaScript")
                            .framework("Spring Boot, Thymeleaf, Angular")
                            .videoPresentation("intro-react.mp4")
                            .lienGit("https://github.com/kounet95/miscroServicesDockeriseSecurisefinal.git")
                            .description("Développement d'une application avec l'approche micro service, avec un système d'authentification OAuth 2 et OIDC via Keycloak, Google et Github.")
                            .date(new Date())
                            .image("https://raw.githubusercontent.com/kounet95/portofolio-images/main/scurtGKG.png")
                            .level(5)
                            .lienDemo("http://138.197.137.215:83/")
                            .build(),
                    MesCompetences.builder()
                            .languages("Java")
                            .framework(" Spring Boot")
                            .videoPresentation("intro-react.mp4")
                            .lienGit("https://github.com/kounet95/RESTSAOPGRAPHQLGRPC.git")
                            .description("Dans ce projet, je présente la création de microservices en utilisant l'ensemble des connecteurs actuels.RESTgRPCGraphQLSOAP")
                            .date(new Date())
                            .image("https://raw.githubusercontent.com/kounet95/portofolio-images/main/RESTSAOPGRAPHQLGRPC.jpg")
                            .level(5)
                            .lienDemo("")
                            .build(),
                    MesCompetences.builder()
                            .languages("Java et JavaScript")
                            .framework("React")
                            .videoPresentation("intro-react.mp4")
                            .lienGit("https://github.com/kounet95/portofolio1.1.git")
                            .description("Développement d'une application pour permettre la decouverte de certains de mes travaux")
                            .date(new Date())
                            .image("https://raw.githubusercontent.com/kounet95/portofolio-images/main/imageportofolio.jpg")
                            .level(5)
                            .lienDemo("http://138.197.137.215:8290/")
                            .build(),
                    MesCompetences.builder()
                            .languages("Java")
                            .framework("spring boot")
                            .videoPresentation("intro-react.mp4")
                            .lienGit("https://github.com/kounet95/portofolio1.1.git")
                            .description("Tests unitaires : Vérification isolée du comportement des composants (fonctions, classes, services). " +
                                    "Tests d'intégration : Validation de la collaboration entre composants (ex. : base de données, services externes) via des environnements simulés. " +
                                    "Outils : Utilisation de JUnit, Mockito (unitaires), Spring Boot Test (intégration), et Testcontainers (simulation). " +
                                    "Couverture du code : Outils configurés pour mesurer la couverture et garantir la qualité des fonctionnalités critiques.")
                            .date(new Date())
                            .image("https://raw.githubusercontent.com/kounet95/portofolio-images/main/test.jpg")
                            .level(5)
                            .lienDemo("PAS DE DEMO")
                            .build(),
                    MesCompetences.builder()
                            .languages("PHP")
                            .framework("Symfony")
                            .videoPresentation("intro-react.mp4")
                            .lienGit("projet prive")
                            .description("projet de gestion d'établissements")
                            .date(new Date())
                            .image("https://raw.githubusercontent.com/kounet95/portofolio-images/main/php.jpg")
                            .level(5)
                            .lienDemo("https://isbbethesda.com/index.php/")
                            .build()
            );


            competencesList.forEach(interCompetences::save);
        };
    }
}
