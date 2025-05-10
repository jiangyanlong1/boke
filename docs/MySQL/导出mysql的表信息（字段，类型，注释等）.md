```sql
SELECT
	t.table_name 表名,
	t.table_comment 表名注释,
	c.COLUMN_NAME 列名,
	c.DATA_TYPE 字段类型,
	c.CHARACTER_MAXIMUM_LENGTH 长度,
	c.IS_NULLABLE 是否为空,
	c.COLUMN_DEFAULT 默认值,
	c.COLUMN_COMMENT 备注 
FROM
	information_schema.TABLES t
        LEFT JOIN information_schema.COLUMNS c ON t.table_name = c.table_name 
WHERE
        -- developerclub为数据库名称，到时候只需要修改成你要导出表结构的数据库即可
	t.table_schema = 'jiujiuzhe'
```