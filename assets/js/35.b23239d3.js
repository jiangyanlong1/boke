(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{444:function(s,n,a){"use strict";a.r(n);var e=a(1),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("获取class对象的方法：")]),s._v(" "),n("ol",[n("li",[s._v('Class.forName("全类名")：将字节码文件加载进内存，返回Class对象')])]),s._v(" "),n("ul",[n("li",[s._v("多用于配置文件，将类名定义在配置文件中，读取文件，加载类")])]),s._v(" "),n("ol",[n("li",[s._v("类名.class：通过类名的属性class获取")])]),s._v(" "),n("ul",[n("li",[s._v("多用于参数的传递")])]),s._v(" "),n("ol",[n("li",[s._v("对象.getClass()：getClass()方法在object类中定义着")])]),s._v(" "),n("ul",[n("li",[s._v("多用于对象的获取字节码的方式")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 1.Class.forName("全类名")\nClass<?> aClass = Class.forName("com.xiaoqiu.test.domain.Person");\nSystem.out.println(aClass);\n\n// 2.类名.class\nClass<Person> personClass = Person.class;\nSystem.out.println(personClass);\n\n// 3.对象.getClass()\nPerson person = new Person();\nClass<? extends Person> aClass1 = person.getClass();\nSystem.out.println(aClass1);\n\n// ==比较三个对象\nSystem.out.println(aClass==personClass);\nSystem.out.println(aClass==aClass1);\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("Class对象功能：")]),s._v(" "),n("ol",[n("li",[s._v("获取成员变量们")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('public static void main(String[] args) throws Exception {\n\n    // 1.获取Person的Class对象\n    Class<Person> personClass = Person.class;\n\n    // 2.Field[] getFields() 获取所有public修饰的成员变量\n    Field[] fields = personClass.getFields();\n    for (Field field: fields){\n        System.out.println(field);\n    }\n\n    // 3.Field getField(String name)\n    Field a = personClass.getField("a");\n    Person p = new Person();\n    // 获取成员变量a的值，需要把对象传进去获取\n    Object value = a.get(p);\n    System.out.println(value);\n    //设置成员变量a的值，需要把对象跟值传进去\n    a.set(p,"张三");\n    System.out.println(p);\n\n    System.out.println("____________________");\n\n    // 4.Field[] getDeclaredFields() 获取所有的成员变量\n    Field[] declaredFields = personClass.getDeclaredFields();\n    for (Field declaredField : declaredFields) {\n        System.out.println(declaredField);\n    }\n    // Field getDeclaredField(String name)\n    Field d = personClass.getDeclaredField("d");\n    // 当访问成员变量修饰符不是public时，需要忽略访问权限修饰符的安全检查，调用setAccessible(true)方法\n    d.setAccessible(true); //暴力反射\n    // 获取成员变量\n    Object value2 = d.get(p);\n    System.out.println(value2);\n    // 设置成员变量\n    d.set(p,"嗨害害");\n    System.out.println(p);\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br")])]),n("ol",[n("li",[s._v("获取构造方法们")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('public static void main(String[] args) throws Exception {\n\n    // 1.获取Person的Class对象\n    Class<Person> personClass = Person.class;\n\n    // Constructor<T> getConstructors(类<?>... parameterTypes)\n    Constructor<Person> constructor = personClass.getConstructor(String.class, int.class);\n    System.out.println(constructor);\n    // newInstance创建对象\n    Object person = constructor.newInstance("张三", 23);\n    System.out.println(person);\n    //Constructor<?>[] getConstructors()\n    Constructor<Person> constructor1 = personClass.getConstructor();\n    System.out.println(constructor1);\n    // newInstance创建对象\n    Object person1 = constructor1.newInstance();\n    System.out.println(person1);\n    //空参也可以这样创建\n    Person o = personClass.newInstance();\n    System.out.println(o);\n\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("ol",[n("li",[s._v("获取成员方法们")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('public static void main(String[] args) throws Exception {\n\n    // 1.获取Person的Class对象\n    Class<Person> personClass = Person.class;\n\n    // 获取指定名称的方法\n    Method eatMethod = personClass.getMethod("eat");\n    Person person = new Person();\n    // 执行方法\n    eatMethod.invoke(person);\n\n    Method eat = personClass.getMethod("eat", String.class);\n    eat.invoke(person,"好吃的");\n\n    System.out.println("_________________");\n\n    // 获取所有public修饰的方法，因为继承于object,所以里面有object的一些方法\n    Method[] methods = personClass.getMethods();\n    for (Method method : methods) {\n        System.out.println(method);\n        String name = method.getName();\n        System.out.println(name);\n    }\n\n    // 获取类名\n    String name = personClass.getName();\n    System.out.println(name);\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("ol",[n("li",[s._v("获取类名")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("String getName()\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ol",[n("li",[s._v("测试")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('public static void main(String[] args) throws Exception {\n    // 1.加载配置文件\n    //1.1创建Properties对象\n    Properties pro = new Properties();\n\n    //1.2加载配置文件，转换为一个集合\n    //1.2.1获取class目录下的pro.properties文件\n    //用类加载去完成。\n    //ReflectTest.class获取字节码文件，getClassLoader()获取字节码文件的类加载器\n    ClassLoader classLoader = ReflectTest.class.getClassLoader();\n    // getResourceAsStream获取资源对应的资源流\n    InputStream is = classLoader.getResourceAsStream("pro.properties");\n    pro.load(is);\n\n    //2.获取配置文件中定义的数据\n    String className = pro.getProperty("className");\n    String methodName = pro.getProperty("methodName");\n\n    //3.加载该类进内存\n    Class<?> cls = Class.forName(className);\n\n    //4.创建对象\n    Object object = cls.newInstance();\n\n    //5.获取方法对象\n    Method method = cls.getMethod(methodName);\n\n    //6.执行方法\n    method.invoke(object);\n\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);