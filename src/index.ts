import Fastify from "fastify";
import fs from "fs";
import path from "path";
import config from "../src/config.json"

const fastify = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
        options: {
          translateTime: 'HH:MM:ss Z',
          ignore: 'pid,hostname',
        },
      },
    }
});

const dataFilePath = path.resolve(__dirname, "../src/data.json");
let playersData: { players: { name: string; blacklist: boolean }[] } = JSON.parse(
  fs.readFileSync(dataFilePath, "utf-8")
);

fastify.get("/name=:name", async (request, reply) => {
  const { name } = request.params as { name: string };

  const player = playersData.players.find((player) => player.name === name);

  if (player) {
    return { blacklist: player.blacklist };
  } else {
    reply.code(404).send({ blacklist: false });
  }
});

const start = async () => {
  try {
    const PORT = config.port;
    const HOST = "0.0.0.0";
    await fastify.listen({ port: PORT, host: HOST });
    console.log(`Server running at http://localhost:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
