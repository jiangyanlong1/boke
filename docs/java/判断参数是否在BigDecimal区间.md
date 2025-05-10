```
public class BigDecimalUtils {

    /**
     * 判断参数是否在设定的BigDecimal区间
     * @param bigDecimal
     * @return
     */
    public static boolean compareToInterval(BigDecimal bigDecimal,String shangxian,String xiaxian){
        //设置区间在+0.00000001和-0.00000001之间 也是允许的误差  只能比两端的值小
        // 先对传入的bigDecimal 参数进行符号判断 在对区间两端的值进行比较
        // 即和0进行比较  小于即为负数 大于即为负数 等于即为0
        int symbol=bigDecimal.compareTo(new BigDecimal(xiaxian));
        if(symbol>=0){
            int begin=bigDecimal.compareTo(new BigDecimal(shangxian));
            return begin<=0;
        }
        return false;
    }
}
```