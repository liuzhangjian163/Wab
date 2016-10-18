DROP TABLE IF EXISTS t_nav;

/*==============================================================*/
/* Table: t_nav                                                 */
/*==============================================================*/
CREATE TABLE t_nav
(
   nav_id               INT NOT NULL,
   nav_name             VARCHAR(50) NOT NULL,
   nav_link             VARCHAR(100) NOT NULL,
   PRIMARY KEY (nav_id)
);

DROP TABLE IF EXISTS t_testdrive;

/*==============================================================*/
/* Table: t_testdrive                                           */
/*==============================================================*/
CREATE TABLE t_testdrive
(
   te_id                INT NOT NULL,
   te_car_id            INT NOT NULL,
   te_user_id           INT NOT NULL,
   te_ag_id             INT NOT NULL,
   te_phone             CHAR(11) NOT NULL,
   te_name              VARCHAR(50) NOT NULL,
   te_subtime           DATETIME NOT NULL,
   te_order             DATETIME NOT NULL,
   te_istest            CHAR(2) NOT NULL,
   PRIMARY KEY (te_id)
);

ALTER TABLE t_testdrive ADD CONSTRAINT FK_Reference_1 FOREIGN KEY (te_car_id)
      REFERENCES t_car (car_id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE t_testdrive ADD CONSTRAINT FK_Reference_2 FOREIGN KEY (te_user_id)
      REFERENCES t_user (user_id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE t_testdrive ADD CONSTRAINT FK_Reference_3 FOREIGN KEY (te_ag_id)
      REFERENCES t_agency (ag_id) ON DELETE RESTRICT ON UPDATE RESTRICT;
    
      
      DROP TABLE IF EXISTS t_car_resource;

/*==============================================================*/
/* Table: t_car_resource                                        */
/*==============================================================*/
CREATE TABLE t_car_resource
(
   car_re_id            INT NOT NULL,
   car_re_carid         INT NOT NULL,
   car_re_reid          INT NOT NULL,
   PRIMARY KEY (car_re_id)
);

ALTER TABLE t_car_resource ADD CONSTRAINT FK_Reference_10 FOREIGN KEY (car_re_carid)
      REFERENCES t_car (car_id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE t_car_resource ADD CONSTRAINT FK_Reference_11 FOREIGN KEY (car_re_reid)
      REFERENCES t_resource (re_id) ON DELETE RESTRICT ON UPDATE RESTRICT;
      
      DROP TABLE IF EXISTS t_agency;

/*==============================================================*/
/* Table: t_agency                                              */
/*==============================================================*/
CREATE TABLE t_agency
(
   ag_id                INT NOT NULL,
   ag_name              VARCHAR(100) NOT NULL,
   ag_address           VARCHAR(200) NOT NULL,
   ag_city_it           INT NOT NULL,
   city_id              INT,
   PRIMARY KEY (ag_id)
);

ALTER TABLE t_agency ADD CONSTRAINT FK_Reference_4 FOREIGN KEY (ag_city_it)
      REFERENCES t_city (city_id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE t_agency ADD CONSTRAINT FK_Reference_5 FOREIGN KEY (city_id)
      REFERENCES t_city (city_id) ON DELETE RESTRICT ON UPDATE RESTRICT;
      
      
      
      DROP TABLE IF EXISTS t_resource;

/*==============================================================*/
/* Table: t_resource                                            */
/*==============================================================*/
CREATE TABLE t_resource
(
   re_id                INT NOT NULL,
   re_type              VARCHAR(20) NOT NULL,
   re_name              VARCHAR(100) NOT NULL,
   re_content           VARCHAR(500) NOT NULL,
   PRIMARY KEY (re_id)
);



DROP TABLE IF EXISTS t_car;

/*==============================================================*/
/* Table: t_car                                                 */
/*==============================================================*/
CREATE TABLE t_car
(
   car_id               INT NOT NULL,
   car_model            VARCHAR(100) NOT NULL,
   car_type             varchar100) NOT NULL,
   car_price            FLOAT NOT NULL,
   PRIMARY KEY (car_id)
);


DROP TABLE IF EXISTS t_user;

/*==============================================================*/
/* Table: t_user                                                */
/*==============================================================*/
CREATE TABLE t_user
(
   user_id              INT NOT NULL,
   user_mail            VARCHAR(50) NOT NULL,
   user_pwd             VARCHAR(50) NOT NULL,
   user_money           FLOAT NOT NULL,
   PRIMARY KEY (user_id)
);


DROP TABLE IF EXISTS t_city;

/*==============================================================*/
/* Table: t_city                                                */
/*==============================================================*/
CREATE TABLE t_city
(
   city_id              INT NOT NULL,
   city_province        VARCHAR(50) NOT NULL,
   city_name            VARCHAR(50) NOT NULL,
   PRIMARY KEY (city_id)
);


DROP TABLE IF EXISTS t_car_color;

/*==============================================================*/
/* Table: t_car_color                                           */
/*==============================================================*/
CREATE TABLE t_car_color
(
   car_col_id           INT NOT NULL,
   car_id               INT NOT NULL,
   col_name             VARCHAR(50) NOT NULL,
   PRIMARY KEY (car_col_id)
);

ALTER TABLE t_car_color ADD CONSTRAINT FK_Reference_12 FOREIGN KEY (car_id)
      REFERENCES t_car (car_id) ON DELETE RESTRICT ON UPDATE RESTRICT;
      
      
      
      
      DROP TABLE IF EXISTS t_store;

/*==============================================================*/
/* Table: t_store                                               */
/*==============================================================*/
CREATE TABLE t_store
(
   sto_id               INT NOT NULL,
   sto_user_id          INT NOT NULL,
   sto_car_id           INT NOT NULL,
   PRIMARY KEY (sto_id)
);

ALTER TABLE t_store ADD CONSTRAINT FK_Reference_6 FOREIGN KEY (sto_user_id)
      REFERENCES t_user (user_id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE t_store ADD CONSTRAINT FK_Reference_7 FOREIGN KEY (sto_car_id)
      REFERENCES t_car (car_id) ON DELETE RESTRICT ON UPDATE RESTRICT;
      
      
      
      DROP TABLE IF EXISTS t_member;

/*==============================================================*/
/* Table: t_member                                              */
/*==============================================================*/
CREATE TABLE t_member
(
   m_userid             INT NOT NULL,
   m_name               VARCHAR(50),
   m_sex                CHAR(2),
   m_iscar              CHAR(2),
   m_carplan            VARCHAR(50),
   m_cityid             INT,
   m_phone              CHAR(11),
   PRIMARY KEY (m_userid)
);

ALTER TABLE t_member ADD CONSTRAINT FK_Reference_13 FOREIGN KEY (m_cityid)
      REFERENCES t_city (city_id) ON DELETE RESTRICT ON UPDATE RESTRICT;
      
      
      
      DROP TABLE IF EXISTS t_order;

/*==============================================================*/
/* Table: t_order                                               */
/*==============================================================*/
CREATE TABLE t_order
(
   order_id             INT NOT NULL,
   order_user_id        INT NOT NULL,
   order_car_d          INT NOT NULL,
   order_name           VARCHAR(50) NOT NULL,
   order_phone          CHAR(11) NOT NULL,
   order_ag_id          INT NOT NULL,
   order_money          FLOAT NOT NULL,
   order_ispay          CHAR(2) NOT NULL,
   order_color          VARCHAR(50) NOT NULL,
   PRIMARY KEY (order_id)
);

ALTER TABLE t_order ADD CONSTRAINT FK_Reference_8 FOREIGN KEY (order_user_id)
      REFERENCES t_user (user_id) ON DELETE RESTRICT ON UPDATE RESTRICT;
