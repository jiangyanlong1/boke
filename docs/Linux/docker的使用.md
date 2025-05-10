docker的使用

```
1.docker使用文档
docker --help
2.docker拉取镜像
docker pull nginx
3.docker删除镜像
docker rmi nginx:latest
4.docker导出镜像
docker save -o nginx.tar nginx:latest
5.docker查看所有镜像
docker images
6.docker加载本地镜像
docker load -i nginx.tar
```

镜像命令

```
docker容器运行
docker run
运行->暂停
docker pause
暂停->运行
docker unpause
运行->停止
docker stop
停止->运行
docker start
查看docker容器状态
docker ps
查看docker容器日志
docker logs
进入docker容器执行命令
docker exec -it mr bash
删除docker容器
docker rm

```

数据卷命令

```
创建一个volume
docker volume create
显示一个或多个volume的信息
docker volume inspect
列出所有的volume
docker volume ls
删除使用的volume
docker volume prune
删除一个或多个指定的volume
docker volume rm
```

```
在docker启动一个mysql
docker run \
--name mysql \
-e MYSQL_ROOT_PASSWORD=123 \
-p 3306:3306 \
-v /tmp/mysql/conf/hmy.cnf:/etc/mysql/conf.d/hmy.cnf \
-v /tmp/mysql/data:/var/lib/mysql \
-d \
mysql:5.7.25
```