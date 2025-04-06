-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               11.5.2-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for s1_calculator
CREATE DATABASE IF NOT EXISTS `s1_calculator` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;
USE `s1_calculator`;

-- Dumping structure for table s1_calculator.items
CREATE TABLE IF NOT EXISTS `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `cost` decimal(10,2) NOT NULL,
  `addictiveness_boost` int(11) DEFAULT 0,
  `danger_increase` int(11) DEFAULT 0,
  `effect_modifiers` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table s1_calculator.items: ~0 rows (approximately)
DELETE FROM `items`;

-- Dumping structure for table s1_calculator.mixes
CREATE TABLE IF NOT EXISTS `mixes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `strain_id` int(11) DEFAULT NULL,
  `item_ids` text DEFAULT NULL,
  `final_cost` decimal(10,2) DEFAULT NULL,
  `final_price` decimal(10,2) DEFAULT NULL,
  `final_addictiveness` int(11) DEFAULT NULL,
  `final_danger` int(11) DEFAULT NULL,
  `final_effects` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table s1_calculator.mixes: ~0 rows (approximately)
DELETE FROM `mixes`;

-- Dumping structure for table s1_calculator.strains
CREATE TABLE IF NOT EXISTS `strains` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `type` enum('weed','meth','cocaine') NOT NULL,
  `addictiveness` int(11) NOT NULL,
  `cost_per_unit` decimal(10,2) NOT NULL,
  `base_price` decimal(10,2) NOT NULL,
  `danger_level` int(11) NOT NULL,
  `effect_profile` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table s1_calculator.strains: ~6 rows (approximately)
DELETE FROM `strains`;
INSERT INTO `strains` (`id`, `name`, `type`, `addictiveness`, `cost_per_unit`, `base_price`, `danger_level`, `effect_profile`) VALUES
	(1, 'OG Kush', 'weed', 0, 50.00, 39.00, 0, 'calming'),
	(2, 'Sour Diesel', 'weed', 35, 45.00, 40.00, 0, 'refreshing'),
	(3, 'Green Crack', 'weed', 40, 48.00, 43.00, 0, 'energizing'),
	(4, 'Granddaddy Purple', 'weed', 25, 55.00, 44.00, 0, 'sedating'),
	(5, 'Meth', 'meth', 70, 55.00, 70.00, 0, ''),
	(6, 'Cocaine', 'cocaine', 25, 55.00, 150.00, 0, '');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
