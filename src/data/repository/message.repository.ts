import { connect } from "../config/db.config";
import { MessagePojo } from "../models/message.model";
import { v4 as uuidv4 } from "uuid";
import { QueryTypes } from "sequelize";

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
      return "";
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

  async updateFieldRead(idMessage: any): Promise<string> {
    try {
      const messageExist = await this.getMessageById(idMessage).then(
        (result) => result
      );

      if (!messageExist) {
        throw new Error("Este mensaje no existe");
      }

      await this._messageRepository.update(
        { read: 1 },
        {
          where: {
            message_id: idMessage,
          },
        }
      );

      return idMessage;
    } catch (exception) {
      console.error(exception);
      return exception;
    }
  }

  async getAllMessagesByUserId(idUser: string): Promise<any> {
    try {
      return await this._db.sequelize.query(
        `select username, message_id, content, date, user_from_id, user_to_id, read 
                                                    from public."user"
                                                    join public.message
                                                    on public."user".user_id = public.message.user_from_id
                                                    where user_to_id = '2'`,
        {
          replacements: [idUser],
          type: QueryTypes.SELECT,
        }
      );
    } catch (exception) {
      console.error(exception);
      return [];
    }
  }

  async deleteMessage(idMessage: string): Promise<any> {
    try {
      return await this._messageRepository.destroy({
        where: {
          message_id: idMessage,
        },
      });
    } catch (exception) {
      console.error(exception);
      return "";
    }
  }
}
