---
title: 服务器模组与插件说明
---
### 自定义音乐
· [资源包下载链接](https://hdgflsh-ssc.oss-cn-beijing.aliyuncs.com/ssc-more-music-discs-respack.zip)、[配方书下载链接](https://hdgflsh-ssc.oss-cn-beijing.aliyuncs.com/ssc-more-music-discs-recipe.zip)

### 全物品查找器（本mod暂未更新至1.21.11）
· 使用指令"/find &lt;item&gt;"进行物品在全物品内位置的查找。  
· 其中后面的&lt;item&gt;在含有中文或特殊字符时需使用英文引号。指令仅支持查找存在于全物品左舷或右舷的物品。如果能找到，则提示物品位于左侧/右侧，并在对应位置产生白色立方体高亮。  
· 指令支持提示和自动补全，但是并不会补全引号。下面是查找泥土（dirt）的例子：  
· ①/find dirt   ②/find "dirt"   ③/find "minecraft:dirt"   ④/find "泥土"   

### 要塞查找器（本mod暂未更新至1.21.11）
· 使用指令"/stronghold &lt;text&gt;"进行要塞相关的查找。   
· /stronghold stairway i 输出第i（1≤i≤128，i为整数，下同）个要塞的起始房间坐标      
· /stronghold portal i 输出第i个要塞的传送门房间坐标      
· /stronghold special 输出若干特殊要塞编号和用途   
· /stronghold ring j 输出j（1≤j≤8）环内的要塞起止编号   
· /stronghold help 输出帮助信息   
· （需要有管理员权限）/stronghold setstairwaysearchable &lt;true/false&gt; 设置stairway命令是否对所有人开放   
· （需要有管理员权限）/stronghold setportalsearchable &lt;true/false&gt; 设置portal命令是否对所有人开放   
· i的排列顺序优先级为：要塞环数、z轴负半轴逆时针旋转扫到该要塞所需转过的角度   
· [点我查看要塞的wiki百科](https://zh.minecraft.wiki/w/%E8%A6%81%E5%A1%9E)   

### 矿车速度修改器
· 使用方法：在需要加速或减速的轨道相邻的地方插一个告示牌（或悬挂的告示牌），上面书写一定内容。   
· 加速：第一行书写"&ast;NewSpeed&ast;"，第二行书写希望达到的速度（单位：格每秒）。   
· 恢复原速：第二行书写的速度为8。（注意，恢复原速后矿车的性质仍然为实验性矿车，与普通矿车不同）   
· 注意：由于mod机制问题，假设矿车速度为x，则需要沿轨道连续放置⌈x/60⌉（⌈A⌉意为对A运算结果向上取整）个告示牌。   
· 注意：由于mod机制问题，红石系统不能使用变速矿车。变速矿车类似于24w33a发布的"实验性玩法"，仅能用作娱乐设施。   
· 注意：若客户端不加装矿车模组，游戏可正常运行，但是会导致实验性矿车被严重错误地渲染。

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