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
    },
    updateFieldRead: (req: any, res: any) => {
        try {
            messageService.updateFieldRead(req.body.idMessage).then(messageUpdated => res.json(messageUpdated));
        } catch (exception) {
            console.error(exception);
            res.sendStatus(500);
        }
    },
    getAllMessagesByUserId: (req: any, res: any) => {
        try {
            messageService.getAllMessagesByUserId(req.params.id).then(messageUpdated => res.json(messageUpdated));
        } catch (exception) {
            console.error(exception);
            res.sendStatus(500);
        }
    },
    deleteMessage: (req: any, res: any) => {
        try {
            messageService.deleteMessage(req.params.id).then(messageDeleted => res.json(messageDeleted));
        } catch (exception) {
            console.error(exception);
            res.sendStatus(500);
        }
    }
}