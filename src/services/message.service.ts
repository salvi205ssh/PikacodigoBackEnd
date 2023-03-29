import { MessagePojo } from './../data/models/message.model';
import { MessageDto } from './../types';
import { MessageRepository } from '../data/repository/message.repository';

export class MessageService {
    messageRepository: MessageRepository;

    constructor() {
        this.messageRepository = new MessageRepository();
    }

    async addNewMessage(newMessage: MessageDto): Promise<string> {
        const messageAsPojo: MessagePojo = this.parseDtoIntoPojo(newMessage);

        return await this.messageRepository.addNewMessage(messageAsPojo)
            .then(newMessageId => newMessageId)
            .catch(exception => {
                console.error(exception);
                throw exception;
            })
    }

    parsePojoIntoDto(messagePojo: MessagePojo): MessageDto {
        const messageDto: MessageDto = {
            message_id: messagePojo.dataValues.message_id,
            content: messagePojo.dataValues.content,
            date: messagePojo.dataValues.date,
            user_from_id: messagePojo.dataValues.user_from_id,
            user_to_id: messagePojo.dataValues.user_to_id
        }

        return messageDto;
    }

    parseDtoIntoPojo(messageDto: MessageDto): MessagePojo {
        return messageDto as unknown as MessagePojo;
    }
}