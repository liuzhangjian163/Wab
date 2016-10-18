/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 5.1.26-rc-community : Database - project
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`project` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `project`;

/*Table structure for table `t_agency` */

DROP TABLE IF EXISTS `t_agency`;

CREATE TABLE `t_agency` (
  `ag_id` int(11) NOT NULL,
  `ag_name` varchar(100) NOT NULL,
  `ag_address` varchar(200) NOT NULL,
  `ag_city_it` int(11) NOT NULL,
  `city_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`ag_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `t_agency` */

/*Table structure for table `t_car` */

DROP TABLE IF EXISTS `t_car`;

CREATE TABLE `t_car` (
  `car_id` int(11) NOT NULL,
  `car_model` varchar(100) NOT NULL,
  `car_type` varchar(100) NOT NULL,
  `car_price` float NOT NULL,
  PRIMARY KEY (`car_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `t_car` */

/*Table structure for table `t_car_color` */

DROP TABLE IF EXISTS `t_car_color`;

CREATE TABLE `t_car_color` (
  `car_col_id` int(11) NOT NULL,
  `car_id` int(11) NOT NULL,
  `col_id` int(11) NOT NULL,
  PRIMARY KEY (`car_col_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `t_car_color` */

/*Table structure for table `t_car_resource` */

DROP TABLE IF EXISTS `t_car_resource`;

CREATE TABLE `t_car_resource` (
  `car_re_id` int(11) NOT NULL,
  `car_re_carid` int(11) NOT NULL,
  `car_re_reid` int(11) NOT NULL,
  PRIMARY KEY (`car_re_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `t_car_resource` */

/*Table structure for table `t_city` */

DROP TABLE IF EXISTS `t_city`;

CREATE TABLE `t_city` (
  `city_id` int(11) NOT NULL,
  `city_province` varchar(50) NOT NULL,
  `city_name` varchar(50) NOT NULL,
  PRIMARY KEY (`city_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `t_city` */

/*Table structure for table `t_color` */

DROP TABLE IF EXISTS `t_color`;

CREATE TABLE `t_color` (
  `col_id` int(11) NOT NULL,
  `col_name` varchar(20) NOT NULL,
  PRIMARY KEY (`col_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `t_color` */

/*Table structure for table `t_member` */

DROP TABLE IF EXISTS `t_member`;

CREATE TABLE `t_member` (
  `m_userid` int(11) NOT NULL,
  `m_name` varchar(50) DEFAULT NULL,
  `m_sex` char(2) DEFAULT NULL,
  `m_iscar` char(2) DEFAULT NULL,
  `m_carplan` varchar(50) DEFAULT NULL,
  `m_cityid` int(11) DEFAULT NULL,
  `m_phone` char(11) DEFAULT NULL,
  PRIMARY KEY (`m_userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `t_member` */

/*Table structure for table `t_nav` */

DROP TABLE IF EXISTS `t_nav`;

CREATE TABLE `t_nav` (
  `nav_id` int(11) NOT NULL,
  `nav_name` varchar(50) NOT NULL,
  `nav_link` varchar(100) NOT NULL,
  PRIMARY KEY (`nav_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `t_nav` */

/*Table structure for table `t_order` */

DROP TABLE IF EXISTS `t_order`;

CREATE TABLE `t_order` (
  `order_id` int(11) NOT NULL,
  `order_user_id` int(11) NOT NULL,
  `order_car_d` int(11) NOT NULL,
  `order_name` varchar(50) NOT NULL,
  `order_phone` char(11) NOT NULL,
  `order_ag_id` int(11) NOT NULL,
  `order_money` float NOT NULL,
  `order_ispay` char(2) NOT NULL,
  `order_color` varchar(50) NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `t_order` */

/*Table structure for table `t_resource` */

DROP TABLE IF EXISTS `t_resource`;

CREATE TABLE `t_resource` (
  `re_id` int(11) NOT NULL,
  `re_type` varchar(20) NOT NULL,
  `re_name` varchar(100) NOT NULL,
  `re_content` varchar(500) NOT NULL,
  PRIMARY KEY (`re_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `t_resource` */

/*Table structure for table `t_store` */

DROP TABLE IF EXISTS `t_store`;

CREATE TABLE `t_store` (
  `sto_id` int(11) NOT NULL,
  `sto_user_id` int(11) NOT NULL,
  `sto_car_id` int(11) NOT NULL,
  PRIMARY KEY (`sto_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `t_store` */

/*Table structure for table `t_testdrive` */

DROP TABLE IF EXISTS `t_testdrive`;

CREATE TABLE `t_testdrive` (
  `te_id` int(11) NOT NULL,
  `te_car_id` int(11) NOT NULL,
  `te_user_id` int(11) NOT NULL,
  `te_ag_id` int(11) NOT NULL,
  `te_phone` char(11) NOT NULL,
  `te_name` varchar(50) NOT NULL,
  `te_subtime` datetime NOT NULL,
  `te_order` datetime NOT NULL,
  `te_istest` char(2) NOT NULL,
  PRIMARY KEY (`te_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `t_testdrive` */

/*Table structure for table `t_user` */

DROP TABLE IF EXISTS `t_user`;

CREATE TABLE `t_user` (
  `user_id` int(11) NOT NULL,
  `user_mail` varchar(50) NOT NULL,
  `user_pwd` varchar(50) NOT NULL,
  `user_money` float NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `t_user` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
