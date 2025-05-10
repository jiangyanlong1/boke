```
org.springframework.web.util.NestedServletException: Handler dispatch failed; nested exception is java.lang.NoClassDefFoundError: javax/xml/bind/DatatypeConverter
```

报错原因:

JAXB API是java EE 的API，在java SE 9.0 中不再包含这个 Jar 包。 JDK 9 中引入了模块的概念，默认情况下，Java SE中将不再包含java EE 的Jar包,在 JDK 6/7 / 8 时关于这个API 都是捆绑在一起的.

解决办法:

方案一:

降低JDK版本至 JDK 8

方案二:

在pom.xml文件的dependencies中引入以下部件:

```
<dependency>
    <groupId>javax.xml.bind</groupId>
    <artifactId>jaxb-api</artifactId>
    <version>2.3.0</version>
</dependency>
<dependency>
    <groupId>com.sun.xml.bind</groupId>
    <artifactId>jaxb-impl</artifactId>
    <version>2.3.0</version>
</dependency>
<dependency>
    <groupId>com.sun.xml.bind</groupId>
    <artifactId>jaxb-core</artifactId>
    <version>2.3.0</version>
</dependency>
<dependency>
    <groupId>javax.activation</groupId>
    <artifactId>activation</artifactId>
    <version>1.1.1</version>
</dependency>
```