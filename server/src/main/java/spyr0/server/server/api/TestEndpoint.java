package spyr0.server.server.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestEndpoint {

    @GetMapping("/")
    public String index() {
        return "The server is running";
    }
}
