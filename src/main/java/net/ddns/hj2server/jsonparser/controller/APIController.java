package net.ddns.hj2server.jsonparser.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/json")
@RestController
public class APIController {

    @PostMapping()
    public String json(String input) {
        System.out.println(String.format("input : %s", input));
        System.out.println(String.format("output : %s", "output"));

        return "output";
    }
}
