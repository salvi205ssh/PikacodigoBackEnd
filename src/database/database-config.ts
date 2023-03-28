import { User } from "../data/models/userModel";
import { ReviewPojo } from "../data/models/review.model";
import { Sequelize } from "sequelize-typescript";

export const connect = () => {
  const hostname = "localhost";
  const port = 5000;
  const userName = "postgres";
  const password = "1996";
  const database = "PicaCodigo";
  const schema = "public";
  const dialect: any = "postgres";

  const sequelize = new Sequelize(database, userName, password, {
    host: hostname,
    port: port,
    dialect,
    repositoryMode: true,
    schema: schema,
    pool: {
      max: 10,
      min: 0,
      acquire: 20000,
      idle: 5000,
    },
  });

  sequelize.addModels([User, ReviewPojo]);

  const db: any = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  return db;
};
