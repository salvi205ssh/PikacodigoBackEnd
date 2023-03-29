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
}