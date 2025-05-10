```
package map遍历和删除;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

/*map集合遍历删除*/
public class Test2 {
    public static void main(String[] args) {
        //key=name value=age
        Map<String, Integer> map=new HashMap<>();
        map.put("张三",22);
        map.put("李四",25);
        map.put("王五",33);
        map.put("赵六",28);
        map.put("田七",25);
        map.put("李思",25);
        map.put("李嘉欣",25);

        //单个删除删--remove  
        map.remove("张三");
        for(Map.Entry<String, Integer> entry:map.entrySet()){
            System.out.println(entry.getKey()+"="+entry.getValue());
        }

        //需求：删除名字（即key）中包含“李”的元素
        /*分析：
         *  1.此时直接map.remove(key)就不符合要求了，必须进行遍历删除
         *  
         *  2.通常map集合遍历就两种方式，一个foreach和iterator
         * */

        Set<Entry<String, Integer>> set=map.entrySet();

        /*for (Entry<String, Integer> entry : set) {
            String name=entry.getKey();
            System.out.println(name);
            System.out.println(name.contains("李"));
            if(name.contains("李")){
                map.remove(name);
            }
        }*/


        Iterator<Entry<String, Integer>> iterator=set.iterator();
        while(iterator.hasNext()){
            Entry<String, Integer> entry=iterator.next();
//          String name=entry.getKey();
            String name=entry.getKey();
            int value=entry.getValue();
            if(name.contains("李")){
                //特别注意：不能使用map.remove(name)  否则会报同样的错误
                iterator.remove();
            }
        }

        System.out.println();
        for (Entry<String, Integer> entry : set) {
            System.out.println("姓名："+entry.getKey()+",年龄："+entry.getValue());
        }
    }
}

```