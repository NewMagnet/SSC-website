---
title: 服务器模组与插件说明
---
### LiFr的SSC扩展模组包
· 集成了音乐包、物品查找器、矿车变速器的功能。进入游戏后根据引导查看说明书即可。[点击链接下载模组](https://hdgflsh-ssc.oss-cn-beijing.aliyuncs.com/lifrs-ssc-extension-latest.jar)  

### 无op权限传送
· !!tp pos &lt;x&gt; &lt;y&gt; &lt;z&gt; &lt;维度id&gt; 传送自己到某维度的坐标。不输入维度id默认当前维度，0、1、2分别代表主世界、地狱、末地。     
· !!tp ask &lt;player&gt; /!!tpa &lt;player&gt; 请求传送到某人   
· !!tp askhere &lt;player&gt;  /!!tph &lt;player&gt; 请求某人传送到自己   

### 路径点查询
· !!loc list 显示所有路径点，点击对应路径点坐标可以自动输入传送指令   
· !!loc search &lt;关键字&gt; 搜索路径点，返回所有匹配项   
· !!loc add &lt;路标名称&gt; &lt;x&gt; &lt;y&gt; &lt;z&gt; &lt;维度id&gt; &lt;可选注释&gt; 加入一个位于某维度某坐标的路标（维度id同上）   
· !!loc add &lt;路标名称&gt; here &lt;可选注释&gt; 加入一个位于自己所处位置的路标（维度id同上）   
· !!loc del &lt;路标名称&lt; 删除路标，要求全字匹配   

### 其他指令
· 永昼使用："/player nightless use continuous"，关闭永昼输入"/player nightless stop"   
· 快速回城：!!kill   
· 自报坐标：!!here  获取他人坐标：!!whereis &lt;player&gt;   