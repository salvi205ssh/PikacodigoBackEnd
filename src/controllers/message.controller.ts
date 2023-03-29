import { MessageService } from "../services/message.service";

const messageService: MessageService = new MessageService();

export const messageController = {
    addNewReview: (req: any, res: any) => {
        try {
            messageService.addNewMessage(req.body).then(newMessageId => res.json(newMessageId));
        } catch (exception) {
            console.error(exception);
            res.sendStatus(500);
        }
    }
}