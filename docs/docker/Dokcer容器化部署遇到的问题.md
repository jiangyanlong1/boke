# Dokcer容器化部署遇到的问题

### 1.nacos版本不一致可能导致配置不一致

nacos2.4.3配置如下：

    server.servlet.contextPath=/nacos

    server.error.include-message=ALWAYS

    server.port=8848

    db.pool.config.connectionTimeout=30000
    db.pool.config.validationTimeout=10000
    db.pool.config.maximumPoolSize=20
    db.pool.config.minimumIdle=2

    nacos.config.push.maxRetryTime=50

    server.tomcat.mbeanregistry.enabled=true

    management.metrics.export.elastic.enabled=false
    management.metrics.export.influx.enabled=false

    server.tomcat.accesslog.enabled=true
    server.tomcat.accesslog.rotate=true
    server.tomcat.accesslog.file-date-format=.yyyy-MM-dd-HH
    server.tomcat.accesslog.pattern=%h %l %u %t "%r" %s %b %D %{User-Agent}i %{Request-Source}i
    server.tomcat.basedir=file:.

    nacos.security.ignore.urls=/,/error,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-ui/public/**,/v1/auth/**,/v1/console/health/**,/actuator/**,/v1/console/server/**

    nacos.core.auth.system.type=nacos
    nacos.core.auth.enabled=true
    nacos.core.auth.caching.enabled=true
    nacos.core.auth.enable.userAgentAuthWhite=false
    nacos.core.auth.server.identity.key=example
    nacos.core.auth.server.identity.value=example
    nacos.core.auth.plugin.nacos.token.cache.enable=false
    nacos.core.auth.plugin.nacos.token.expire.seconds=18000
    nacos.core.auth.plugin.nacos.token.secret.key=mMCrmL7E9EO7D5ln15YgHe96lnnRPKe2lPuhqhQInOY=

    nacos.istio.mcp.server.enabled=false

    spring.datasource.platform=mysql
    db.num=1
    db.url.0=jdbc:mysql://ruoyi-mysql:3306/ry-config?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
    db.user=root
    db.password=fcb644090b2e9990

### 2.做区分不同环境下配置文件

上传jar包到服务器上，运行发现还是开发环境配置，请检查容器中jar包的镜像，因为docker中存在该镜像，重新上传后运行，并不会重新构建该镜像，需要删除当前镜像，让其重新构建

