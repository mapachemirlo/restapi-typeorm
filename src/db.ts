import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "pepe",
  password: "mysecretpasswordofpepe",
  database: "pepedb",
  synchronize: true,
  // logging: true,
  entities: [User],
});
