# 使用 Nginx 作为 Web 服务器
FROM nginx:alpine

# 删除默认配置
RUN rm -rf /usr/share/nginx/html/*

# 复制前端构建产物到 Nginx 目录
COPY build/ /usr/share/nginx/html/

## 复制自定义 Nginx 配置
COPY nginx.conf /etc/nginx/nginx.conf

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]