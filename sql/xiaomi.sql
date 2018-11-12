#删除并重建数据库rose
SET NAMES UTF8;
DROP DATABASE IF EXISTS XM;
CREATE DATABASE XM CHARSET=UTF8;
USE xm;


#创建首页商品表：
create table index_header_title(
    pid int primary key auto_increment,
        url varchar(64),
    header_title varchar(64),#header 标题
    header_pname varchar(255),#商品名字
    header_pic varchar(6000), #图片
    header_price varchar(255),
);





insert into index_header_title values(null,'http://127.0.0.1:3000/phone.html','小米手机','小米MAX3,小米8 青春版,小米8 屏幕指纹版,小米8,小米8SE,小米MAX3','./images/header/tanchu/phone/mix2320-220.png,./images/header/tanchu/phone/pc-320-220-mi8.png,./images/header/tanchu/phone/pc-320-220-mi8se.png,./images/header/tanchu/phone/mix2s320-220white.png,./images/header/tanchu/phone/max3-320-220.png,./images/header/tanchu/phone/32022012085.jpg','3299元起,1399元起,3199元起,2699元起,1799元起,1699元起');
insert into index_header_title values(null,'http://127.0.0.1:3000/phone.html','红米','红米6PRO,红米6,红米6,红米6NOTE5 2s,红米6 s2,红米5 PLUS','./images/header/tanchu/redmi/s2-320-220.png,./images/header/tanchu/redmi/note5-320-220.png,./images/header/tanchu/redmi/6pro320-220.png,./images/header/tanchu/redmi/666320.png,./images/header/tanchu/redmi/6A320.png,./images/header/tanchu/redmi/5P-320-220.png','999元起,999元起,599元起,1099元起,999元起,999元起');

insert into index_header_title values(null,'http://127.0.0.1:3000/shopping.html?4','电视','小米电视4 75英寸,小米电视4A 32寸,小米电视4A 45寸青春版 ，小米电视4A 50寸,小米电视4A 55寸,查看更多电视','./images/header/tanchu/tv/4a43.png,images/header/tanchu/tv/4a65555.png,./images/header/tanchu/tv/32.png,./images/header/tanchu/tv/50.png,./images/header/tanchu/tv/55320220.png,./images/header/tanchu/tv/75.png','8999元起,899元起,1399元起,1999元起,2399元起,小米电视');
insert into index_header_title values(null,'http://127.0.0.1:3000/shopping.html?2','笔记本','小米平板,小米笔记本 15.6,小米游戏本 8代,小米笔记本Pro 15.6 GTX版,小米笔记本 Pro,小米笔记本 Air 系列','./images/header/tanchu/com/pingbanok.png,./images/header/tanchu/com/320x220biiben.png,./images/header/tanchu/com/bijiben32012.5.jpg,./images/header/tanchu/com/WechatIMG603 (1).png,./images/header/tanchu/com/WechatIMG603.png,./images/header/tanchu/com/xinbijiben.png','1099元起,4199元起,6699元起,6299元起,5599元起,3599元起');
insert into index_header_title values(null,'http://127.0.0.1:3000/shopping.html?1','空调','米家互联网空调','images/header/tanchu/kongtiao/kongtiao320-220.jpg','1999元');
insert into index_header_title values(null,'http://127.0.0.1:3000/shopping.html?3','新品','小米手环3,小米路由器4,小米小爱音响,米家投影仪,小米vr一体机,小米米家智能摄像头','./images/header/tanchu/new/shouhuan.png,./images/header/tanchu/new/luyouqi.png,./images/header/tanchu/new/xiaomixiaoaiai.png,./images/header/tanchu/new/toiuyingyi.png,./images/header/tanchu/new/VR.png,./images/header/tanchu/new/shexiangji.png','169元起,199元起,169元起,3999元起,1499元起,199元起');
insert into index_header_title values(null,'http://127.0.0.1:3000/shopping.html?3','路由器','小米路由器4,小米路由器4G,小米路由器3A,小米路由器3G,小米路由器HD/pro,查看全部小米路由器','./images/header/tanchu/luyouqi/xiaomiluyouqi4.png,./images/header/tanchu/luyouqi/4Q.png,./images/header/tanchu/luyouqi/3A.png,./images/header/tanchu/luyouqi/3G.png,./images/header/tanchu/luyouqi/PRO.png,./images/header/tanchu/luyouqi/quanbuluyouqi.png','199元起,99元起,99元起,499元起,249元起,');
insert into index_header_title values(null,'http://127.0.0.1:3000/shopping.html?2','智能硬件','小爱音箱,小米无人机,小米净水器,扫地机器人,小米压力电饭煲,查看全部','./images/header/tanchu/zhineng/air2.jpg,./images/header/tanchu/zhineng/123321.jpg,./images/header/tanchu/zhineng/xiaomijingshuiqi.jpg,./images/header/tanchu/zhineng/saodijiqiren320-220.jpg,./images/header/tanchu/zhineng/dfb.jpg,./images/header/tanchu/zhineng/xiaomixiaoaiai.png','169元起,2999元起,1999元起,1699元起,999元起,智能硬件');


create table index_header_slider(
    pid int primary key auto_increment,
    url varchar(64),
    slider_title varchar(64),#header 标题
    slider_name varchar(255),#商品名字
    slider_pic varchar(6000)#图片
)
insert into index_header_slider values(null,'手机 电话卡',
'小米8,小米8SE,小米MIX2S,小米3,小米6MIX,黑鲨游戏手机|小米MAX2,小米MIX2,红米6PRO,红米6,红米6A,红米note5|红米SE,红米5PLUS,移动4G专区,对比手机,米粉卡 日租卡,小米移动 移动电话|手机上门维修'
,
'./images/header/m8-80.png,./images/header/m8se-80.png,./images/header/mix2s80-80white.png,./images/header/max3-80-80.png,./images/header/80808080808080.jpg,./images/header/heisha-80.png|./images/header/mix2-80.png,./images/header/max2_80.jpg,./images/header/max3-80-80.png,./images/header/666666.png,./images/header/mix2s80-80white.png,./images/header/max3-80-80.png|./images/header/s2-80-80.png,./images/header/mix2s80-80white.png,./images/header/80.jpg,./images/header/compare.jpg,./images/header/mifenka-1.jpg,./images/header/mimobile.jpg|./images/header/weixiu80-80.png,'
);

insert into index_header_slider values(null,'电视 盒子','米家激光投影电视,小米电视4 75英寸,小米电视4A 32英寸,小米电视4A 40英寸,小米电视4A 43英寸青春版,小米电视4A 49英寸','./images/header/tv/TV4-75.png,./images/header/tv/TV4A-32.png,./images/header/tv/TV4A-40.png,./images/header/tv/TV4A-43QC.png,./images/header/tv/TV4A-43QC.png,./images/header/tv/TV4A-49.png');

insert into index_header_slider values(null,'笔记本 平板',
'小米平板4,小米笔记本15.6,小米笔记本15.6 第八代,小游戏笔记本15.6,笔记本Air12.5,笔记本Air13.3|笔记本Pro,小保密笔记本GTX,HDMI转换器,VAG千兆网口转换器,小米笔记本内胆,小米游戏键盘|悦米机械键盘,悦米机械键盘PRo静音版,小米便携鼠标,小米无线鼠标,鼠标垫,DisplayPort转换器|USB至千兆网口转换器,游戏鼠标,笔记本双肩包,USB-C电源适配器,平板配件',
'./images/header/computer/pingban2.jpg,./images/header/computer/80x80.png,./images/header/computer/80x80youxichuantu.png,./images/header/computer/6838xiaozhuanjieqi.png,./images/header/computer/xmsbd80.jpg,./images/header/computer/80x80youxichuantu.png|./images/header/computer/pingban2.jpg,./images/header/computer/WechatIMG605.png,./images/header/computer/usbzjqggg80.jpg,./images/header/computer/vga.png,./images/header/computer/neidanbao80.jpg,./images/header/computer/jianpan80.jpg|./images/header/computer/jianpanbashi.jpg,./images/header/computer/jianpan80.jpg,./images/header/computer/shubiao80.jpg,./images/header/computer/wxsb80.png,./images/header/computer/wxsb80.png,./images/header/computer/6838xiaozhuanjieqi.png|./images/header/computer/usbzjqggg80.jpg,./images/header/computer/youxishubiao80.jpg,./images/header/computer/neidanbao80.jpg,./images/header/computer/usbzjqggg80.jpg,./images/header/computer/pingban2.jpg'
);

insert into index_header_slider values(null,'家电插线板','米家互联网,净水器,净水器滤芯,打扫机器人,扫地机配件,空气净化器','./images/header/jiayong/kongtiaoguan140.png,./images/header/jiayong/jingshuiqi80haha.jpg,./images/header/jiayong/lvxinbashi.png,./images/header/jiayong/jiqiren.jpg,./images/header/jiayong/saodipeijian-80.jpg,./images/header/jiayong/jinghuaqi2S-80.jpg'
);

insert into index_header_slider values(null,'出行 穿戴','手环手表,VR,平衡车,滑板车,自行车,车载逆变器|凭乘车配件,智能后视镜,车载空气净化器',
'./images/header/chuxing/shouhuan3.jpg,./images/header/chuxing/VRyitiji80.jpg,./images/header/chuxing/scooter-80.jpg,./images/header/chuxing/scooter2-80.jpg,./images/header/chuxing/zxc80-80.jpg,./images/header/chuxing/xidingdeng-80.jpg|./images/header/chuxing/peijian80.jpg,./images/header/chuxing/shouhuan3.jpg,./images/header/chuxing/zxc80-80.jpg'
);




insert into index_header_slider values(null,'智能 路由器',
'路由器,对讲机,智能家庭,无人机,摄像机,照相机'
,'./images/header/luyouqi/luyouqi4_80%20(1).jpg,./images/header/luyouqi/dianyuan2.100080.jpg,./images/header/luyouqi/dianyuan2.100080.jpg,./images/header/luyouqi/wurenji80.jpg,./images/header/luyouqi/camera-small-80.jpg,./images/header/luyouqi/camera-head-80.jpg'
);

insert into index_header_slider values(null,'电源 配件'

,'移动电源,数据线,快充,车充,无线充,电池|自拍杆,储存卡,手机壳,手机膜,手机支架,平板配件|黑沙配件,其他配件'

,'./images/header/dianyuan/7Battery1.jpg,./images/header/dianyuan/shoujizhijia80.jpg,./images/header/dianyuan/shujuxian-80.jpg,./images/header/dianyuan/shujuxian-80%20(1).jpg,./images/header/dianyuan/wuxianchong80.jpg,./images/header/dianyuan/chezaichongdianqi80.jpg|./images/header/dianyuan/zipaigan80.jpg,./images/header/dianyuan/cunchu80x80.jpg,./images/header/dianyuan/shujuxian-80%20(1).jpg,./images/header/dianyuan/tiemo.jpg,./images/header/dianyuan/baohu.jpg,./images/header/dianyuan/pingban80.jpg|./images/header/dianyuan/heishashoubing80.jpg,./images/header/dianyuan/qitapeijian80.jpg');

insert into index_header_slider values(null,'个护 儿童','剃须刀,牙刷,体重秤,血压计,体温计,早期教育|遥控电动,益智积木,儿童滑板车,儿童书包,儿童手表','./images/header/ertong/tixvdao80.jpg,./images/header/ertong/yashua80.jpg,./images/header/ertong/tiwenji80.jpg,./images/header/ertong/xueyaji80.jpg,./images/header/ertong/tiwenji80.jpg,./images/header/ertong/toyblock2-80.jpg|./images/header/ertong/mitugushi-80.jpg,./images/header/ertong/toyblock2-80.jpg,./images/header/ertong/huabanche80.jpg,./images/header/ertong/shoubiao280.jpg,./images/header/ertong/shoubiao280.jpg');
insert into index_header_slider values(null,'耳机 音响'
,'小爱音箱,线控耳机,蓝牙耳机,头戴耳机,品质耳机,蓝牙音箱'
,'./images/header/erji/yinxiangmini80.jpg,./images/header/erji/erji80.jpg,./images/header/erji/80xiangquan.jpg,./images/header/erji/toudai80.jpg,./images/header/erji/pinpai80.jpg,./images/header/erji/xiaogangpao2-hei-80.jpg'
);
insert into index_header_slider values(null,
'生活 箱包',
'双肩包,钱包,口罩,收纳包,旅行箱,运动鞋|服饰,眼睛,床垫,枕头,被子,沙发|针织件套,金米兔,螺丝刀,保温杯,伞,驱蚊器|尤克里里,毛巾/浴巾,米兔,签字笔,笔记本',
'./images/header/xiangbao/xiangbao-80.jpg,./images/header/xiangbao/qianbao-80.jpg,./images/header/xiangbao/shounabao-80.jpg,./images/header/xiangbao/lvxingxiang.jpg,./images/header/xiangbao/shenhuahui80.jpg|./images/header/xiangbao/txv80.jpg,./images/header/xiangbao/tyj80.jpg,./images/header/xiangbao/chuangdian-80-80.jpg,./images/header/xiangbao/zhent.ou80.png,./images/header/xiangbao/beizi8.0..png,./images/header/xiangbao/shafa.80.png|./images/header/xiangbao/sijiantao-80-80.jpg,./images/header/xiangbao/jinmitu.jpg,./images/header/xiangbao/duoyongbijiben-80.jpg,./images/header/xiangbao/luosidao-80.jpg,./images/header/xiangbao/umbrella.jpg,./images/header/xiangbao/quwenqi.jpg|./images/header/xiangbao/ukelele.jpg,./images/header/xiangbao/bbbbei.jpg,./images/header/xiangbao/mitu-80.jpg,./images/header/xiangbao/qianzibi-80.jpg,./images/header/xiangbao/qianbao-80.jpg'
);





#创建首页商品表：index_small
create table index_small(
	pid int primary key auto_increment,
    banner_pic varchar(255),#轮播图
    banner_bottom varchar(255),#小图
    shan_title varchar(255),#shan标题
    shan_p varchar(255),#shan文字
    shan_pic varchar(5000),
    shan_price varchar(255),#shan价格
    shan_del varchar(255),#shan价格
    max varchar(255),
    ren_desc varchar(2000),#文字
    ren_p varchar(255),#文字
    ren_title varchar(255),#文字
    ren_price varchar(128), #价格
    ren_pic varchar(500)
);

insert into index_small values(null,'./images/index/xmad_15363212818916_fwtzL.jpg,./images/index/xmad_15360762648527_QjlBu.jpg,./images/index/xmad_15357307990199_HfpnA.jpg,./images/index/xmad_15338982677936_eQTJk.jpg,./images/index/xmad_15310599701167_AYcbi.jpg',
'./images/index/xmad_15382347865119_ZhSrK.jpg,./images/index/xmad_15382348202641_EoZuy.jpg,./images/index/56aa2e1f-c835-4085-bdb2-5f150788048e.jpg',
'小米方盒子蓝牙音箱 2 白色,小米WiFi放大器 2 白色,米家随身风扇 蓝色,小米手环3腕带 深空蓝,米兔儿童电话手表2 蓝色,小米移动电源2C 20000mAh 白色,小米路由器4C 白色,小米USB充电器60W快充版（6口） 白色,米兔轨道积木 电动火车套装 彩色',
'延续经典好声音,速率翻倍，覆盖无忧,能放在口袋的小风扇,顺滑柔软 触感舒适,6 天使用，10 天待机,大容量，一个就够用,全向四天线，更快更智能,6口输出，USB-C输出接口,送给孩子的私人游乐场',

'./images/index/17a13755-6212-7275-e573-cc1ea9fa2ae4.jpg,./images/index/f6de48c7-bf5b-8063-77d7-2b0b0b6ea3d5.jpg,./images/index/8fc81277-368b-2435-93dc-87ced43b0cf6.jpg,./images/index/pms_1529921709.81212951.jpg,./images/index/8794f2d4-4254-f931-da9b-f377a9b7110a.jpg,./images/index/312cd1f8-2255-cbb1-9cb3-3e24fc6ab571.jpg,./images/index/pms_1532604005.71645697.jpg,./images/index/pms_1517552384.30355703.jpg,./images/index/pms_1529030145.93145083.png',
'9.9,1,1,16.9,369,119,69,119,269',
'129,49,19.9,19.9,399,129,99,129,299',
'./images/index/xmad_1539777473169_QyOBh.jpg,./images/index/xmad_15396068838407_YtAfi.jpg',
'样子好可爱，特别是转来转去时很有趣。让它休眠时它就会把头转过去背对着你了，唤醒它又会自动转回来。你叫...,超级喜欢！小巧玲珑！音质完美！不知道为什么！只要是小米出的东西我都喜欢！那倒是因为那一句？？小米为发...,先五星好评。再来说说小米空气净化器，北方的天气雾霾越来越常态，这就迫切需要一台性价比高的空气净化器，...,包装很让人感动，式样也很可爱，做出的饭全家人都爱吃，超爱五星！手机控制还是不太熟练，最主要是没有连接...',
' 来自于 随风 的评价 , 来自于 田密 的评价 , 来自于 sddyboy 的评价 , 来自于 HZG 的评价 ',
'米家小白智能摄像机,小米随身蓝牙音箱,小米空气净化器2,米家压力IH电饭煲',
'399元,69元,699元,999元',
'./images/index/05972209-0c29-4f2f-9844-09de1093ab02.jpg,./images/index/bae79ac6-60d5-478d-90e7-ff1222764bd1.jpg,./images/index/a5886d24-b443-4a15-88ca-5dbd43b72de3.jpg,./images/index/54e35fdd-bc68-4a89-bad7-c9c3bb2fc6fe.jpg'
);


create table index_big(
	pid int primary key auto_increment,
    sj_max varchar(255),#大图
    sj_min varchar(2000),#小图
    sj_title varchar(500),
    sj_p varchar(500),
    sj_price varchar(255),
    left_pic varchar(255),
    jd_pic varchar(5000),
    jd_title varchar(2000),
    jd_desc varchar(2000),
    jd_price varchar(2000),
    jd_review varchar(2000),
    jd_athor varchar(2000)
);


insert into index_big values(null,
'./images/index/xmad_15323220713837_GLBVX.jpg',
'./images/index/pms_1537323963.1278763!220x220.jpg,./images/index/pms_1537356460.6227958!220x220.png,./images/index/pms_1527684990.93616987!220x220.jpg,./images/index/pms_1522034061.12391230!220x220.jpg,./images/index/pms_1527144859.25489991!220x220.jpg,./images/index/pms_1495692033.10494295!220x220.jpg,./images/index/pms_1509723483.31416776!220x220.jpg,./images/index/pms_1525853341.8312102!220x220.jpg',
'小米8 青春版 4GB+64GB,小米8 屏幕指纹版 8GB+128GB,小米8 SE 4GB+64GB,小米MIX 2S 8GB+256GB,小米6X 4GB+32GB,小米Max 2 4GB+64GB,小米MIX 2 全陶瓷尊享版,红米S2 3GB+32GB',
'潮流镜面渐变色，2400万自拍旗舰,全球首款压感屏幕指纹，双频GPS超精准定位,AI 超感光双摄，三星 AMOLED 屏幕,骁龙845 年度旗舰处理器，艺术品般陶瓷机身,全索尼相机，骁龙660 AIE处理器,6.44''大屏，5300mAh 充电宝级的大电量,全面屏2.0，Unibody 全陶瓷,前置1600万超大像素智能美拍',
'1339,3599,1699,3599,1199,1699,2699,999',
'./images/index/xmad_15232433421155_vCzhJ.jpg,./images/index/xmad_15123939053142_dFlAw.jpg',
'./images/index/pms_1524883847.49276938!220x220.jpg,./images/index/pms_1522318330.86967810!220x220.jpg,./images/index/xmad_15350951136177_QUuVm.png,./images/index/pms_1524636075.71677607!220x220.jpg,./images/index/xmad_14972549116226_tZpod.png,./images/index/pms_1504498936.11861982!220x220.jpg,./images/index/xmad_15281923207128_rOfDp.png|./images/index/pms_1503909300.25797209!220x220.png,./images/index/pms_1510111588.69169839!220x220.jpg,./images/index/pms_1500287084.72131750!220x220.jpg,./images/index/pms_1490077569.08131612!220x220.png,./images/index/pms_1539340135.40576883!220x220.png,./images/index/pms_1539315570.63599432!220x220.jpg,./images/index/pms_1499072633.96298268!220x220.jpg|./images/index/pms_1533266333.04566853!220x220.jpg,./images/index/pms_1524636075.71677607!220x220.jpg,./images/index/pms_1533196142.85059414!220x220.png,./images/index/pms_1524636075.71677607!220x220.jpg,./images/index/pms_1490595812.95661863!220x220.png,./images/index/pms_1478248566.62624407!220x220.jpg,./images/index/pms_1490702347.3628109!220x220.png|./images/index/pms_1465366178.11466342!220x220.jpg,./images/index/pms_1506417289.23728408!220x220.jpg,./images/index/pms_1472609961.95298675!220x220.jpg,./images/index/pms_1510020567.64467830!220x220.jpg,./images/index/T1OVC_ByY_1RXrhCrK!220x220.jpg,./images/index/pms_1496647119.81414190!220x220.jpg,./images/index/pms_1495520422.36514041!220x220.jpg',
'小米电视4A 43英寸青春版,小米电视4C 50英寸,15.6"笔记本 i5 4G MX110,13.3"小米笔记本Air 四核i7 8G 256G MX150 银色,米家空气净化器Pro,米家电水壶,米家LED吸顶灯|小米电视4A 55英寸,小米电视4 50英寸,小米电视4A 32英寸,小米电视4A 65英寸,小米电视4S 65英寸 PRO,小米电视4X 43英寸,小米盒子3 增强版|15.6 Pro i5 8G 1050MAX-Q 256G,13.3"小米笔记本Air 四核i7 8G 256G MX150 深空灰,小米游戏本15.6”8代i7 16G 1T+256G 1060 6G,13.3"小米笔记本Air 四核i7 8G 256G MX150 银色,小米无线鼠标,小米无线鼠标,悦米机械键盘|米家恒温电水壶,小米随身手电筒,米家扫地机器人,小米米家空气净化器 2S,米家压力IH电饭煲,飞利浦智睿球泡灯,米家 LED 智能台灯',
'全高清屏 / 人工智能语音,4K HDR / 人工智能语音,,,OLED 显示屏幕 / 激光颗粒物传感器,一杯水，是一家人的安心,用光线，还原理想生活|4K高清HDR / 真四核64位高性能处理器,4.9mm 极超薄机身 / 2GB+8GB 大内存空间,64位四核处理器 / 1GB+4GB大内存 ,4K超高清屏 / 真四核64位高性能处理器,,,高端 4K 网络机顶盒|,,,,耐脏亲肤涂层，人体工学设计,轻薄便携，铝合金外壳 +ABS 材质,轻薄便携，铝合金外壳 +ABS 材质|水温智能控制，304 不锈钢内胆,11 挡调光，随心而亮,智能路径规划，扫得干净扫得快,OLED显示屏 / 激光颗粒物传感器,智能烹饪，灰铸铁粉体涂层内胆,自由调节亮度，Wi-Fi随时操控,无可视频闪，四种场景优化调光',
'1499,1899,3999,5799,1499,99,399|2299,3699,899,3699,4499,1499,399|6299,3699,8799,5799,64,94,269|199,79,1699,899,999,49,169',
'一如既往的好，小米情怀,不多说直接上图，新房新电视！大爱小米！,给女朋友买的，东西都帮她安装好了！设置也设置好了！不...,小巧轻薄，高清屏幕色彩鲜艳！开机秒进系统，还需时日熟...,外观很漂亮，有个显示屏，好高大尚，睡眠模式非常安静！,小米产品，一向是我的首选，我也向我的亲戚朋友推荐了很...,简洁大方，质量好！安装方便。|小米的品质和性价比我不愿意在这里多说，如果不是最好的...,谢谢快递师傅。宝贝也超级赞，只是目前还没有找到怎么看...,我们家都觉得很kiang（不懂了吧，汕尾话！优秀！！）,小米同学，你真是不错啊，那个分辨率真是高，丫头最喜欢...,小米同学，你真是不错啊,小米同学，你真是不错啊,我的幸运盒子，刚中盒子，后面就中电视，简直不敢相信，...|1050虽然只是max Q 但是游戏性能还是有的质...,小巧轻薄，高清屏幕色彩鲜艳！开机秒进系统，还需时日熟...,我们家都觉得很kiang（不懂了吧，汕尾话！优秀！！）,小米同学，你真是不错啊，那个分辨率真是高，丫头最喜欢...,小米同学，你真是不错啊,小米同学，你真是不错啊,手感特别不错，敲代码很有感觉，不小心暴露了自己的职业。|样子美观大方，加上优惠券这个壶太划算了，祝小米明年越...,我竟然也有如此神器。。。。,我们家都觉得很kiang（不懂了吧，汕尾话！优秀！！）,小米同学，你真是不错啊，那个分辨率真是高，丫头最喜欢...,小米同学，你真是不错啊,小米同学，你真是不错啊,莘莘学子，照亮未来。',
' 来自于 惊喜 的评价 , 来自于 陪衬角色 的评价 , 来自于 云淡风轻 的评价 , 来自于 邱钢 的评价 , 来自于 嘉仁宫 的评价 , 来自于 小米科技 的评价 , 来自于 左进雄 的评价 | 来自于 惊喜 的评价 , 来自于 陪衬角色 的评价 , 来自于 云淡风轻 的评价 , 来自于 邱钢 的评价 ,,, 来自于 左进雄 的评价 | 来自于 惊喜 的评价 , 来自于 陪衬角色 的评价 , 来自于 云淡风轻 的评价 , 来自于 邱钢 的评价 ,,, 来自于 左进雄 的评价|来自于 惊喜 的评价 , 来自于 陪衬角色 的评价 , 来自于 云淡风轻 的评价 , 来自于 邱钢 的评价 ,,, 来自于 左进雄 的评价'
)




create table index_neirong(
    pid int primary key auto_increment,
    h2 varchar(128),
    pic varchar(2000),
    title varchar(500),
    p varchar(500)
);

insert into index_neirong values(null,
'图书,MIUI 主题,游戏,应用',
'./images/index/5e5da924-84e3-4959-9e25-5891cdf30757.png,./images/index/61e1385e-54de-48f3-8717-5e4f4b1cdd14.png|./images/index/xmad_15360565735203_Uuvyd.jpg,./images/index/xmad_15357000957252_GpoLc.png,./images/index/xmad_15290561352349_zNjLT.png|./images/index/xmad_15299832299419_eIPOw.png,./images/index/xmad_15120234492499_MNEVo.png,./images/index/T1czW_BXCv1R4cSCrK.png|./images/index/3332da7d-4056-4694-9548-c83b7b3af7d3.png,./images/index/T1TkKvBCKv1R4cSCrK.png,./images/index/T15VZvB5Kv1R4cSCrK.png',
'哈利·波特与被诅咒的孩子,好吗好的|熊本熊 酷MA萌,蚁人2,复仇者联盟3-我的英雄|非人学园,小米超神,米柚手游模拟器|2017金米奖,Forest,小米应用',
'“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！ ,畅销作家大冰2016年新书！讲给你听，好吗好的！|戳一戳、摸一摸，酷MA萌会在锁屏跟你亲密互动哦。,小米主题和迪士尼首度合作，打造精品漫威系列主题,28张超级英雄个人专属锁屏及桌面壁纸随你挑！|脑洞大开的二次元竞技手游,实力派一起团,在电脑上玩遍小米所有手游|最优秀的应用和游戏,帮助您专心于生活中每个重要时刻,小米出品 必属精品'
);

create table phone_list(
    pid int primary key auto_increment,
    banner_pic varchar(128),
    lang_pic varchar(2000),
    short_pic varchar(2000),
    lang_title varchar(255),
    short_title varchar(255),
    lang_p varchar(255),
    short_p varchar(255),
    lang_price varchar(255),
    short_price varchar(255),
    lang_del varchar(255),
    short_del varchar(255)
);

insert into phone_list values(null,
'./images/phone/bbf2b92df4edfe16f1288fe840522f0a.jpg,./images/phone/e56e83596263a461406da48e8786fc31.jpg',
'./images/phone/489552d652f98b44580ddf73935dc00f.jpg,./images/phone/0741bc542844bf3dd4b51a794b559bc9.jpg,./images/phone/15e8a6a943752cef2cbd335833bc171f.jpg|./images/phone/489552d652f98b44580ddf73935dc00f.jpg|./images/phone/f4f5583859fc170e04aedd2d90e5e0bb.jpg,./images/phone/3365ae54ebf14a33c3fc2076ffe5a8c4.jpg',
'./images/phone/6d0aab16e4264a97f615ba3041d71b6c.jpg,./images/phone/3365ae54ebf14a33c3fc2076ffe5a8c4.jpg?./images/phone/29764b23954479f8c156086a5156509e.jpg,./images/phone/d5aa5040e63a4ce8ab8db933ad31c8b3.jpg|./images/phone/f3213f9d41d3441f8af5c7b7105e26f9.jpg,./images/phone/0741bc542844bf3dd4b51a794b559bc9.jpg?./images/phone/0741bc542844bf3dd4b51a794b559bc9.jpg,./images/phone/d2ca7c84fbcd61de4861df5c17f5113d.jpg|./images/phone/eb0fb45f529c1a988a506eaa2ea9ef56.jpg,./images/phone/c358575259b313192f95c4c69596e483.jpg?./images/phone/eb0fb45f529c1a988a506eaa2ea9ef56.jpg,./images/phone/3c5c2a2f30faaa307d7cd9442acfa864.jpg',
'小米8,小米8 SE,红米6 Pro|小米8|红米6 Pro,红米6',
'红米Note 5,红米?黑鲨手机,小米8|小米MAX,红米?红米note,红米|红米Note 5,红米Note 5?红米Note 5,红米Note 5',
'全球首款双频GPS，骁龙845,三星 AMOLED 全面屏 小屏旗舰,高颜值大电量 红米旗舰|高颜值大电量 红米旗舰|高颜值大电量 红米旗舰,高颜值大电量 红米旗舰',
'国民品质，拍照专家,国民?品质，拍照专家?国民品质，拍照专家,国民品质，拍照专家|国民品质，拍照专家,国民品质，拍照专家?国民品质，拍照专家,国民品质，拍照专家|高颜值大电量,高颜值大电量?高颜值大电量,高颜值大电量',
'2599,1699,929|2599|929,929',
'969,969?3499,2599|969,969?969,969|929,929?929,929',
'2699,1799,999|2699|999,999',
'999,999?3699,2799|999,999?999,999|989,989?989,989'
);


create table product(
    pid int primary key auto_increment,
    banner1 varchar(500),
    banner1_pic varchar(64),
    banner1_h2 varchar(64),
    banner1_p varchar(64),
    banner1_price varchar(64),
    banner1_del varchar(64),
    banner2 varchar(500),
    banner2_h2 varchar(64),
    banner2_p varchar(64),
    banner3 varchar(500),
    banner4 varchar(500),
    banner4_h2 varchar(64),
    banner4_p1 varchar(64),
    banner4_h3 varchar(64),
    banner4_p2 varchar(1000),
    ul boolean,
    slid1 boolean,
    slid1_h2 varchar(64),
    slid1_h3 varchar(64),
    slid1_name varchar(64),
    slid1_tips varchar(64),
    slid1_p varchar(64),
    slid2_h2 varchar(64),
    slid2_p varchar(64),
    slid3 boolean,
    slid3_h2 varchar(64),
    slid3_p varchar(64),
    video boolean,
    video_pic varchar(32),
    video_v varchar(32),
    video_h2 varchar(32),
    video_p varchar(32),
    video_small varchar(32),
    slid4_pic varchar(255),
    slid4_title varchar(255),
    slid4_h2 varchar(64),
    slid4_p varchar(64),
    slid5_h2 varchar(64),
    slid5_p varchar(64),
    slid6_pic varchar(255),
    slid6_h2 varchar(64),
    slid6_p varchar(64),
    slid7_h2 varchar(64),
    slid7_p varchar(64),
    slid8_h2 varchar(64),
    slid8_p varchar(64),
    slid9_h2 varchar(64),
    slid9_p varchar(64),
    slid10_h2 varchar(64),
    slid10_p varchar(64),
    img_1 varchar(64),
    img_2 varchar(64),
    img_3 varchar(64),
    img_4 varchar(64),
    img_5 varchar(64),
    img_6 varchar(64),
    img_7 varchar(64),
    img_8 varchar(64),
    img_9 varchar(64)
);
insert into product values(
null,
'./images/product/mi8/index3.jpg,./images/product/mi8/index1.jpg,./images/product/mi8/index2.jpg',
'./images/product/mi8/title1.png,./images/product/mi8/title2.png',
'8  周  年  旗  舰  手  机',
'全球首款双频 GPS  |  骁龙845  |  AI 变焦双摄  |  红外人脸识别',
'2599',
'2699',
'./images/product/mi8/border1.jpg,./images/product/mi8/border2.jpg,./images/product/mi8/border3.jpg,./images/product/mi8/border4.jpg',
'超轻四曲面|轻薄圆润，舒适握感',
'四曲面玻璃机身， 超轻 7 系铝金属中框，水滴弧收腰设计。',
'./images/product/mi8/gallery5.jpg,./images/product/mi8/gallery6.jpg,./images/product/mi8/gallery1.jpg,./images/product/mi8/gallery2.jpg,./images/product/mi8/gallery3.jpg,./images/product/mi8/gallery4.jpg,./images/product/mi8/gallery5.jpg,./images/product/mi8/gallery6.jpg,./images/product/mi8/gallery1.jpg,./images/product/mi8/gallery2.jpg',
'./images/product/mi8/pic1.jpg,./images/product/mi8/pic2.jpg,./images/product/mi8/pic3.jpg,./images/product/mi8/pic4.jpg,./images/product/mi8/pic5.jpg',
'7 种 AI 影棚光效|轻松拍出影棚级人像',
'口袋里的人像影棚，为人像照片加入一缕彩虹|光的期许，亦或是窗边光的静谧，让平常的一|瞬间，瞬间不平常。',
'窗边光,树叶光,彩虹光,电影光,波点光',
'柔和提亮面部，使高光与阴影形成强烈的明暗对比,阳光穿过了夏天的树叶，交错重叠，光影斑驳,雨后夕阳带来的七色光晕，迷离梦幻,模拟经典的电影光效，光与影留下时光的印记,被跳动的光影包围，像沐浴着晨光与微风，画面生机勃勃',
true,
true,
'三星 AMOLED 屏幕',
'鲜艳通透的 6.21英寸全面屏，机身相当于 5.5 英寸传统手机大小。',
'高对比度,广色域,高屏占比,18.7:9',
'60000:1 (min),DCI-P3,86.68%,2248×1080 分辨率',
'全球首款双频 GPS 手机|超精准定位',
'小米8 全球首款双频 GPS 手机，支持L1 + L5双频定位，双频信号协同工作，|在城市复杂环境中，有效改善导航精准度。',
true,
'AI 变焦双摄|DxOMark超百分相机',
'1.4μm 超大像素，夜景画质更明亮细腻。源自单反的 2PD 双核对焦技术，即使暗光环境也能疾速抓拍。',
true,
'./images/product/mi8/poster.jpg',
'./images/product/mi8/fde6049e66285373774204e6a8fa44e6.mp4',
'AI 短视频剪辑|一键生成电影级大片',
'家门口、小街巷，随手录一段视频。通过7种|智能特效，一键自动剪辑、配乐、调色，轻松',
'* “AI 短视频剪辑”为手机中“智能特效”功能',
'./images/product/mi8/aicamera1.png,./images/product/mi8/aicamera2.png,./images/product/mi8/aicamera3.png',
'AI 识别风景/自动优化色彩，直出风光大片,AI 识别夜景/去噪点、增强解析力，夜晚也清晰,AI 识别人像/轻松拍出优质逆光、剪影人像作品',
'AI 场景相机|智能识别206种拍照场景|实时优化',
'聪明的 AI 相机，能识别 206 种常见拍照场景，|自动进行曝光、饱和度等多项优化。出国旅行时|还是全能小助手，帮你翻译菜单，提供实时汇率|计算。',
'“微整形”美颜功能，指前置相机“3D 美颜”功能',
'前置2000万|“微整形”美颜相机，肖像级背景虚化',
'超高解析力的 2000 万前置摄像头，1.8μm（4合1）大像素技术，暗光自拍也能更清晰明亮。|全新升级的 3D 美颜技术与 AI 单摄背景虚化，让自拍照如同棚拍直出一样出彩。',
'./images/product/mi8/aibeauty-icon.jpg',
'“微整形”美颜相机|支持精调五官，实时预览',
'AI 深度学习面部特征，进行上千个特征点3D建模。支持精调五官并|提供实时预览，塑造属于自己的“芭比翘鼻”、“苹果肌”。并且还|能识别自拍角度，打造无死角、更自然的“微整形”美颜效果。',
'惊人的30万跑分,骁龙845，旗舰标配',
'骁龙845处理器，再次爆发强劲性能。无论是穿梭于多个App之间，或是来|一场激烈的枪战游戏，一定是你不可或缺的凶猛利器。',
'红外人脸识别',
'全黑环境疾速解锁',
'“小爱同学”AI语音助手',
'一句话搞定复杂操作',
'多功能NFC',
'已支持167城公共交通出行|支持门卡模拟*',
'url(./../images/product/mi8/screen.jpg) 50% 0 no-repeat',
'url(./../images/product/mi8/gps.jpg) 50% 0 no-repeat',
'url(./../images/product/mi8/camera.jpg) 50% 0 no-repeat',
'url(./../images/product/mi8/ai.jpg) 50% 0 no-repeat',
'url(./../images/product/mi8/aibeauty.jpg) 50% 0 no-repeat',
'url(./../images/product/mi8/cpu.jpg) 50% 0 no-repeat',
'url(./../images/product/mi8/infrared.jpg) 50% 0 no-repeat',
'url(./../images/product/mi8/xiaoai.jpg) 50% 0 no-repeat',
'url(./../images/product/mi8/nfc.jpg) 50% 0 no-repeat'
);


#创建商品详情表
create table commodity(
    pid int primary key auto_increment,
    c_h1 varchar(128),
    c_orange varchar(64),
    c_title varchar(64),
    c_price varchar(64),
    c_banben varchar(64),
    c_color varchar(64),
    c_bx boolean,
    c_bxnr varchar(255),
    c_img varchar(1000),
);
insert into commodity values(null,
'小米米家空气净化器 2S',
'',
'OLED显示屏 / 激光颗粒物传感器 / 310m³/h颗粒物CADR / 360°进风3层净化',
'749元 ',
'',
'白色|./images/shopping/d5a39c5e-28e7-f4c1-57fd-59933f26032b.jpg',
false,
'',
'./images/shopping/pms_1510020567.64467830!560x560.jpg|./images/shopping/pms_1510020581.0452249!560x560.jpg'
);
insert into commodity values(null,
'小米笔记本Air 12.5英寸',
'',
'轻薄全金属机身 / 超长续航，支持1C快充 / FHD 全贴合屏幕 / 高能量密度电池 / office激活不支持7天无理由退货',
'3999元 ',
'12.5英寸 M3 4G 256G : 3999元 | 12.5英寸 M3 4G 128G : 3599元',
'银色|./images/shopping/aefa4ae5-bf69-2a60-a37f-6ab0d920a365.png',
false,
'',
'./images/shopping/pms_1514390379.45372827!560x560.jpg,./images/shopping/pms_1514390380.3716884!560x560.jpg,./images/shopping/pms_1514390439.56264253!560x560.jpg,./images/shopping/pms_1514390440.00176219!560x560.jpg,./images/shopping/pms_1514390440.34968863!560x560.jpg'
);
insert  into commodity values(null,
'小米手环3 NFC版',
'【小米11.11狂欢节，手环3【NFC版】你的出行神器】',
'支持公交地铁刷卡 / 微信、QQ、来电等内容显示 / 多种运动数据实时可见 / 睡眠、计步自动检测 / 50 米游泳防水 / 24 个汉字一屏显示',
'199元 ',
'',
'黑色|./images/shopping/pms_1536833428.43292402.jpg',
'',
'',
'./images/shopping/pms_1536833471.5642076!560x560.jpg,./images/shopping/pms_1536833428.43292402!560x560.jpg'
);
insert  into commodity values(null,
'小米电视4X 43英寸',
'「小米11.11狂欢，热爱升级，新品狂欢价1299！」「“早下单，早享受，价保11.11”」',
'FHD全高清屏/ 人工智能语音 / 大储存 / 高性能 / 海量内容 / 钢琴烤漆',
'1299元 ',
'',
'43英寸|./images/shopping/ede227c1f0e3472fb8dcfae980d1e43f.jpg',
'',
'',
'./images/shopping/pms_1539315570.629223!560x560.jpg,./images/shopping/pms_1539315570.63599432!560x560.jpg,./images/shopping/pms_1539315570.69669282!560x560.jpg'
);
insert  into commodity values(null,
'小米8 青春版',
'',
'潮流镜面渐变色 / 2400万自拍旗舰 / 7.5mm超薄机身 / 6.26"小刘海全面屏 / AI裸妆美颜 / 骁龙660AIE处理器',
'1399元 ',
'4GB+64GB 全网通 | 1399元 ,6GB+64GB 全网通 | 1699元 ,6GB+128GB 全网通 | 1999元 ',
'深空灰|./images/shopping/pms_1537323963.1278763.jpg',
true,
' 意外保障服务  |手机意外摔落/进水/碾压等损坏?碎屏保障服务  |手机意外碎屏',
'./images/shopping/pms_1537323963.40512928!560x560.jpg,./images/shopping/pms_1537323963.1278763.jpg,./images/shopping/pms_1537323963.2662931!560x560.jpg,./images/shopping/pms_1537323963.12643245!560x560.jpg'
);

#创建 购物车表
create table shoppingcarlist(
    id int primary key auto_increment,
    pname varchar(255),
    price varchar(255),
    count varchar(255),
    img varchar(255),
    pid int,
    foreign key(pid) references commodity(pid)
);
insert into shoppingcarlist values(
null,
' 小米8 青春 全网通版 4GB内存 深空灰 64GB ',
'1399',
'1',
'./images/shoppingcar/pms_1537323963.1278763!80x80.jpg',
5
);
insert into shoppingcarlist values(
null,
'  小米米家空气净化器 2S  ',
'899',
'1',
'./images/shoppingcar/pms_1510020567.64467830!80x80.jpg',
1
);
insert into shoppingcarlist values(
null,
'  12.5"小米笔记本Air M3 4G 256G 银色  ',
'3999',
'1',
'./images/shoppingcar/pms_1514390379.45372827!80x80.jpg',
2

);
insert into shoppingcarlist values(
null,
'   小米手环3 NFC版 黑色   ',
'199',
'1',
'./images/shoppingcar/pms_1536833428.43292402!80x80.jpg',
3
);
insert into shoppingcarlist values(
null,
'    小米电视4X 43英寸 黑色 43英寸    ',
'1299',
'1',
'./images/shoppingcar/pms_1539315570.63599432!80x80.jpg',
4
);

create table shoppingcar(
    id int primary key auto_increment,
    pid int,
    uid int,
    count int,
    foreign key(pid) references shoppingcarlist(pid),
    foreign key(uid) references user(uid)
);
insert into shoppingcar values(null,1,2,1);
insert into shoppingcar values(null,2,2,1);
#创建用户的信息  商品详情的信息


#创建用户表：user
create table user(
      uid int primary key auto_increment,
      phone varchar(16),
      upwd varchar(32),
      email varchar(32),
      user_name varchar(32)
  );
  insert into user values(null,'13301556627','111111','123@126.com','');