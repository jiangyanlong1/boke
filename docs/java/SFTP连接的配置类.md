SFTP连接的配置类

```
import lombok.Data;

/**
 * 构造SFTP连接的配置类
 * @Author:QY
 */
@Data
public class SFTPConfigModel {

    /** FTP 登录用户名*/
    private String userName;
    /** FTP 登录密码*/
    private String passWord;
    /** 私钥 */
    private String privateKey;
    /** FTP 服务器地址IP地址*/
    private String host;
    /** FTP 端口*/
    private int port;
    /** FTP 指定上传路径*/
    private String uploadUrl;
    /** FTP 指定下载路径*/
    private String downloadUrl;

    // -------------------------------------------------------------------------------
    public SFTPConfigModel userName(String userName){
        this.userName = userName;
        return this;
    }

    public SFTPConfigModel passWord(String passWord){
        this.passWord = passWord;
        return this;
    }

    public SFTPConfigModel privateKey(String privateKey){
        this.privateKey = privateKey;
        return this;
    }

    public SFTPConfigModel host(String host){
        this.host = host;
        return this;
    }

    public SFTPConfigModel port(int port){
        this.port = port;
        return this;
    }

    /**
     * 默认配置，本人写着测试的。大家需要自己配
     * @return
     */
    public SFTPConfigModel getDefaultConfig(){
//        this.userName = "sheky";
//        this.passWord = "%njJCWyyxyYi$tpu";
//        this.host = "211.90.39.42";
//        this.port = 22;
//        this.uploadUrl = "/Users/Administrator/Desktop/nginx-1.18.0/html/dianziqikan";

//        this.userName = "Administrator";
//        this.passWord = "123456";
//        this.host = "192.168.31.180";
//        this.port = 22;
//        this.uploadUrl = "/Users/Administrator/Desktop";

        this.userName = "Administrator";
        this.passWord = "123456";
        this.host = "192.168.31.21";
        this.port = 22;
        this.uploadUrl = "/Users/Administrator/Desktop";
        return this;
    }
}
```