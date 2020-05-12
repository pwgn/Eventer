package dude.chrisp.ibmmq;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.Map;

@RestController
public class Sender {

    @Autowired private JmsTemplate jmsTemplate;
    private ObjectMapper objectMapper = new ObjectMapper();

    @GetMapping("/send")
    public void send() {
        System.out.println("sending");
        Transaction transaction = new Transaction();
        transaction.account = "1234";
        transaction.amount = 1337;
        transaction.business = "full orbit";
        transaction.date = new Date();
        transaction.name = "chrisp";
        transaction.type = "deposit";

        Map<String, Object> transactionMap = objectMapper.convertValue(transaction, Map.class);
        jmsTemplate.convertAndSend("queue:///DEV.QUEUE.1", transactionMap);
    }
}
