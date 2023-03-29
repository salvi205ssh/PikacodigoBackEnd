import { connect } from "../config/db.config";
import { MessagePojo } from '../models/message.model';
import { v4 as uuidv4 } from 'uuid';

export class MessageRepository {
    private _db: any = {};
    private _messageRepository: any;

    constructor() {
        this._db = connect();
        this._messageRepository = this._db.sequelize.getRepository(MessagePojo);
    }

    async addNewMessage(newMessage: MessagePojo): Promise<string> {
        try {
            newMessage.message_id = uuidv4();
            newMessage = await this._messageRepository.create(newMessage);
            return newMessage.message_id;
        } catch (exception) {
            console.error(exception);
            return '';
        }
    }

    async getMessageById(messageId: string): Promise<MessagePojo> {
        try {
            return await this._messageRepository.findByPk(messageId);
        } catch (exception) {
            console.error(exception);
            return undefined;
        }
    }

    async updateFieldRead(message: any): Promise<string> {
        try {
            const messageExist = await this.getMessageById(message.message_id)
                .then(result => result);

            if (!messageExist) {
                throw new Error('Este mensaje no existe');
            }

            await this._messageRepository.update({ read: 1 }, {
                where: {
                    message_id: message.message_id
                }
            });

            return message.message_id;
        } catch (exception) {
            console.error(exception);
            return exception;
        }
    }
}