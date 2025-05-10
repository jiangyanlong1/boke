/**

* 导入学生信息

*

* @param file

* @throws IOException

*/

@RequestMapping(value = "import")

public List<Student> importStudentInfos(MultipartFile file) throws IOException {

ExcelReader reader = ExcelUtil.getReader(file.getInputStream());

reader.addHeaderAlias("学号", "sno");

reader.addHeaderAlias("姓名", "name");

reader.addHeaderAlias("年龄", "age");

reader.addHeaderAlias("性别", "gender");

reader.addHeaderAlias("籍贯", "nativePlace");

reader.addHeaderAlias("入学时间", "enrollmentTime");

List<Student> studentList = reader.readAll(Student.class);

return studentList;

}

————————————————

版权声明：本文为CSDN博主「C3Stones」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。

原文链接：[https://blog.csdn.net/qq_48008521/article/details/113353262](https://blog.csdn.net/qq_48008521/article/details/113353262)