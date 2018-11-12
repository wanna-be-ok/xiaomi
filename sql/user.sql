

#创建用户收货地址表：receiver_address
create table receiver_address(
    aid int primary key auto_increment,
    receiver varchar(16), #接收人姓名
    province varchar(16), #省
    city varchar(16), #市
    county varchar(16), #县
    address varchar(128), #详细地址
    phone varchar(16),
    postcode char(6),
    is_default boolean, #是否为当前用户的默认收货地址
    uid int,
    FOREIGN KEY(uid) REFERENCES user(uid)
);

#创建订单表：orders
create table orders(
    oid int primary key auto_increment,
    status int, #订单状态
    order_time bigint, #下单时间
    pay_time bigint, #付款时间
    deliver_timer bigint, #发货时间
    received_time bigint, #签收时间
    uid int, #用户编号
    foreign key(user_id) references user(uid),
    aid int, #
    foreign key(aid) references receiver_address(aid)
);

#创建订单详情表：order_detail
create table order_detail(
    did int primary key auto_increment,
    oid int, #订单编号
    product_id int, #产品编号
    count int, #购买数量
    foreign key(oid) references orders(oid),
    foreign key( product_id) references goods(gid)
);











#需要写的

#创建用户表：user
create table user(
    uid int primary key auto_increment,
    uname varchar(32),
    upwd varchar(32),
    email varchar(32),
    phone varchar(16),
    user_name varchar(32),

);

#创建购物车表：shopping_cart
create table shopping_cart(
    pid int primary key auto_increment,
    count int,
    uid int, #用户编号
    foreign key(uid) references user(uid),
    product_id int, #商品编号
    foreign key(product_id) references goods(gid)
);
