-- phpMyAdmin SQL Dump
-- version 2.11.2.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 04 月 01 日 09:42
-- 服务器版本: 5.0.45
-- PHP 版本: 5.2.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- 数据库: `yfw`
--

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(4) NOT NULL auto_increment,
  `username` varchar(16) collate utf8_bin NOT NULL,
  `pwd` varchar(20) collate utf8_bin NOT NULL,
  `phone` int(11) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=67 ;

--
-- 导出表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `pwd`, `phone`) VALUES
(65, 'wch', '121212', 2147483647),
(66, 'www', '121212', 2147483647);
