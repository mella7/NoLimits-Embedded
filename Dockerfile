FROM node:20-alpine

WORKDIR /app

RUN npm install -g bun

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

EXPOSE 3000

CMD ["node", "dist/server/server.js"]
