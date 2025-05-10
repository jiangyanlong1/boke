```
# 查询提交状态
git status
#
git add a.txt
# 
git commit -m a.txt
# 打印提交日志
git log --oneline
# 回退版本（误删）
git reset --hard 版本号
# 恢复某个操作（误删）
git revert 版本号
# 创建分支
git branch 分支名
# 查看所有分支，有*的是当前分支
git branch -v
# 切换分支
git checkout 分支名
# 创建并切换分支
git checkout -b 分支名
# 删除分支
git checkout -d 分支名
# 合并分支
git merge 分支名
# 添加标签
git tag 标签名 版本号
# 查看标签
git tag
# 删除标签
git tag -d 标签名
# 生成sha256安全证书
ssh-keygen -t rsa -Cgit@gitee.com:along1234/netty-demo.git
# 拉取数据
git pull origin
# 提交数据
git push origin master
```