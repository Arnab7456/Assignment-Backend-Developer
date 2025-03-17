# Build stage
FROM node:18-alpine AS builder
RUN npm install -g pnpm

WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install
COPY . .
RUN pnpm build


FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install --prod

EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "dist/index.js"]