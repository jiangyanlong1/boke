OSS 批量下载文件

```
import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.model.GetObjectRequest;
import com.aliyun.oss.model.ListObjectsRequest;
import com.aliyun.oss.model.OSSObjectSummary;
import com.aliyun.oss.model.ObjectListing;

import java.io.*;

public class OssTest {

    public static void main(String[] args) throws IOException {
        String[] arr = {"208","222","223","224","226","116","248"};
        for (String str:arr){
            listFiles("dzqk/"+str+"/", "D:\\11\\新建文件夹\\经济论坛\\电子期刊");
        }

    }

    public static boolean listFiles(String prefix, String directoryPath) throws IOException {
        // Endpoint以杭州为例，其它Region请按实际情况填写。
        String endpoint = "https://oss-cn-beijing.aliyuncs.com";
        // 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录RAM控制台创建RAM账号。
        String accessKeyId = "nFi4SrEyhfdrb38v";
        String accessKeySecret = "LRLbJ4tUL3Qw8p9qvfRdKvtp7cDTbA";
        // 创建OSSClient实例。
        OSS ossClient = new OSSClientBuilder().build(endpoint, accessKeyId, accessKeySecret);
        boolean flag;
        String marker = "";
        do {
            ListObjectsRequest lor = new ListObjectsRequest();
            //指定目录
            lor.setPrefix(prefix);
            lor.setBucketName("hbqyml");
            //
            lor.setMarker(marker);
            //分页大小
            lor.setMaxKeys(100);
            ObjectListing ol = ossClient.listObjects(lor);
            for (OSSObjectSummary o : ol.getObjectSummaries()) {
                System.out.println(" - " + o.getKey() + "  " + "(size = " + o.getSize() + ")");
                //
                final String path = directoryPath + o.getKey();
                //获取文件对象
                GetObjectRequest gor = new GetObjectRequest("hbqyml", o.getKey());
                //截取目录 如果目录不存在则创建
                String directoryStr = path.substring(0, path.lastIndexOf("/"));
                File directory = new File(directoryStr);
                if (!directory.exists()) {
                    directory.mkdirs();
                }
                //获取文件流  使用高速缓存 + 数组复制 最大效率输出文件
                try (
                        BufferedInputStream bis = new BufferedInputStream(ossClient.getObject(gor).getObjectContent());
                        BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(path))) {
                    int size;
                    byte[] bytes = new byte[1024];
                    while ((size = bis.read(bytes)) != -1) {
                        bos.write(bytes, 0, size);
                    }
                    bos.flush();
                }
            }
            //当前页的最后一个文件
            marker = ol.getNextMarker();
            //是否还有文件
            flag = ol.isTruncated();
        } while (flag);
        ossClient.shutdown();
        return true;
    }

}
```