更换mybatis-plus高版本时出现的问题

原因：pagehelper分页里mybatis跟mybatis-plus分页里的mybatis版本冲突导致

```
org.mybatis.logging.LoggerFactory
```

```
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper-spring-boot-starter</artifactId>
    <version>1.2.10</version>
    <exclusions>
    	<exclusion>
    		<groupId>org.mybatis</groupId>
    		<artifactId>mybatis</artifactId>
    	</exclusion>
    	<exclusion>
    		<groupId>org.mybatis</groupId>
    		<artifactId>mybatis-spring</artifactId>
    	</exclusion>
    	<exclusion>
    		<groupId>com.github.jsqlparser</groupId>
    		<artifactId>jsqlparser</artifactId>
    	</exclusion>
    </exclusions>
</dependency>

```