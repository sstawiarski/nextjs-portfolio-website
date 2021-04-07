import { Project, Technical } from "../models";

import { getConnection, createConnection } from "typeorm";

import JavaIcon from '../public/icons/java.svg';

export async function getOrCreateConnection() {
  try {
    const conn = getConnection();
    return conn;
  } catch (e) {
    return createConnection({
      type: "postgres",
      host: process.env.POSTGRES_HOST as string,
      port: parseInt(process.env.POSTGRES_PORT as string),
      username: process.env.POSTGRES_USER as string,
      password: process.env.POSTGRES_PASSWORD as string,
      database: process.env.POSTGRES_DB as string,
      entities: [Project, Technical],
      synchronize: true,
      logging: false
    });
  }
}

export function getIcon(type: string): React.FunctionComponent<React.SVGAttributes<SVGElement>> {
    switch (type) {
        case "Java":
            return JavaIcon;
        default:
            return null;
    }
}