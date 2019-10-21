# Host: localhost  (Version: 5.5.53)
# Date: 2019-10-21 20:26:18
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "shoppingcart"
#

CREATE TABLE `shoppingcart` (
  `vipName` varchar(255) DEFAULT NULL,
  `goodsId` varchar(255) DEFAULT NULL,
  `goodsCount` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcart"
#

INSERT INTO `shoppingcart` VALUES ('TicWatch Kids','¥799','9','http://127.0.0.1/wenwen/img/tic1.png'),('TicWatch 2','￥780','1','http://127.0.0.1/wenwen/img/aroud11.jpg'),('TicWatch 1','￥980','1','http://127.0.0.1/wenwen/img/aroud10.jpg'),('TicWatch 3','￥1120','2','http://127.0.0.1/wenwen/img/aroud9.jpg');
