package dude.chrisp.ibmmq;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.jms.annotation.EnableJms;

@SpringBootApplication
@ComponentScan()
@EnableJms
public class IbmMqApplication {

	public static void main(String[] args) {
		System.out.println("running");
		SpringApplication.run(IbmMqApplication.class, args);
	}

}
