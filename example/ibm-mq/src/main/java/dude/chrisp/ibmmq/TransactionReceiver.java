package dude.chrisp.ibmmq;

import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class TransactionReceiver {

    @JmsListener(destination = "queue:///DEV.QUEUE.1")
    public void receiveMessage(Map<String, Object> transactionMap) {
        System.out.println(transactionMap);
    }
}
