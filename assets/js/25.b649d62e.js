(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{432:function(e,t,a){"use strict";a.r(t);var r=a(1),v=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("/**")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("导入学生信息")])]),e._v(" "),t("li"),e._v(" "),t("li",[t("p",[e._v("@param file")])]),e._v(" "),t("li",[t("p",[e._v("@throws IOException")])])]),e._v(" "),t("p",[e._v("*/")]),e._v(" "),t("p",[e._v('@RequestMapping(value = "import")')]),e._v(" "),t("p",[e._v("public List"),t("Student",[e._v(" importStudentInfos(MultipartFile file) throws IOException {")])],1),e._v(" "),t("p",[e._v("ExcelReader reader = ExcelUtil.getReader(file.getInputStream());")]),e._v(" "),t("p",[e._v('reader.addHeaderAlias("学号", "sno");')]),e._v(" "),t("p",[e._v('reader.addHeaderAlias("姓名", "name");')]),e._v(" "),t("p",[e._v('reader.addHeaderAlias("年龄", "age");')]),e._v(" "),t("p",[e._v('reader.addHeaderAlias("性别", "gender");')]),e._v(" "),t("p",[e._v('reader.addHeaderAlias("籍贯", "nativePlace");')]),e._v(" "),t("p",[e._v('reader.addHeaderAlias("入学时间", "enrollmentTime");')]),e._v(" "),t("p",[e._v("List"),t("Student",[e._v(" studentList = reader.readAll(Student.class);")])],1),e._v(" "),t("p",[e._v("return studentList;")]),e._v(" "),t("p",[e._v("}")]),e._v(" "),t("p",[e._v("————————————————")]),e._v(" "),t("p",[e._v("版权声明：本文为CSDN博主「C3Stones」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。")]),e._v(" "),t("p",[e._v("原文链接：https://blog.csdn.net/qq_48008521/article/details/113353262")])])}),[],!1,null,null,null);t.default=v.exports}}]);