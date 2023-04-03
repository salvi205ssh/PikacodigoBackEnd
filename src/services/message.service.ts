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

    async updateFieldRead(idMessage: any): Promise<string> {
        return await this.messageRepository.updateFieldRead(idMessage)
            .then(result => result)
            .catch(expception => {
                console.error(expception);
                throw expception;
            })
    }

    async getAllMessagesByUserId(idUser: string): Promise<any>{
        return await this.messageRepository.getAllMessagesByUserId(idUser)
            .then(result => result)
            .catch(expception => {
                console.error(expception);
                throw expception;
            })
    }

    async deleteMessage(idMessage: string): Promise<any>{
        return await this.messageRepository.deleteMessage(idMessage)
            .then(result => result)
            .catch(expception => {
                console.error(expception);
                throw expception;
            })
    }

    parsePojoIntoDto(messagePojo: MessagePojo): MessageDto {
        const messageDto: MessageDto = {
            message_id: messagePojo.dataValues.message_id,
            content: messagePojo.dataValues.content,
            date: messagePojo.dataValues.date,
            user_from_id: messagePojo.dataValues.user_from_id,
            user_to_id: messagePojo.dataValues.user_to_id,
            read: messagePojo.dataValues.read
        }

        return messageDto;
    }

    parseDtoIntoPojo(messageDto: MessageDto): MessagePojo {
        return messageDto as unknown as MessagePojo;
    }
}