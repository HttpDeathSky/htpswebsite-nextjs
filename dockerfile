# 使用轻量级 Node.js 官方镜像（Alpine 更小）
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 拷贝运行时必须的文件和目录（假设你在本地已运行 npm install 和 npm run build）
COPY .next/ .next/
COPY public/ public/
COPY node_modules/ node_modules/
COPY package.json .
COPY ecosystem.config.js .

# 安装全局 PM2（用于运行 Next.js）
RUN npm install -g pm2

# 开放 Next.js 默认端口
EXPOSE 3000

# 使用 PM2 启动 Next.js 服务
CMD ["pm2-runtime", "ecosystem.config.js"]
