List<Object> 转 List<对象>

```
//List<Object> 转 List<对象>
public static <T> List<T> objToList(Object obj, Class<T> cla){
    List<T> list = new ArrayList<T>();
    if (obj instanceof ArrayList<?>) {
        for (Object o : (List<?>) obj) {
            list.add(cla.cast(o));
        }
        return list;
    }
    return null;
}

```

```
//这个new typeReference导入的包是package com.alibaba.fastjson;
//它还有一个包是package com.fasterxml.jackson.core.type;
/** *这是转成list的例子,转成对象还是map大体上差不多 **/
String provinces = readJsonFile(".//areaCode//provinces.json");
List<NationalCityCode> provinceList = JsonObject.parseObject(provinces, new TypeReference<List<NationalCityCode>>() {});
System.out.println(provinceList);

/** *转成对象 **/
String provinces = readJsonFile(".//areaCode//provinces.json");
NationalCityCode province = JsonObject.parseObject(provinces, new TypeReference<NationalCityCode>() {});
System.out.println(province);
```