package com.spring.backend;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@RestController
@RequestMapping("/api/photoshoot")
@CrossOrigin(origins = {"http://localhost:4200/"})
public class PhotoshootController {

    @RequestMapping(value = "/requestMethodName", method = RequestMethod.GET)
    public String requestMethodName(@RequestParam String param) {
        return "Received param: " + param;
    }

    @GetMapping("")
    public List<Photoshoot> findAll() {
        return List.of(
            new Photoshoot(1L, "Photoshoot1"),
            new Photoshoot(2L, "Photoshoot2"),
            new Photoshoot(3L, "Photoshoot3"),
            new Photoshoot(4L, "Photoshoot4")
        );
    }

    @GetMapping("/{id}")
    public Photoshoot findById(@PathVariable Long id) {
        System.out.println("findById " + id);
        return new Photoshoot(id, "Ejemplo sesión");
    }
    
}


