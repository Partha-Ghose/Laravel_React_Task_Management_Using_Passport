-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 01, 2023 at 01:34 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.4.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `task_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_01_26_132119_create_tasks_table', 1),
(6, '2023_01_26_132225_create_projects_table', 1),
(7, '2016_06_01_000001_create_oauth_auth_codes_table', 2),
(8, '2016_06_01_000002_create_oauth_access_tokens_table', 2),
(9, '2016_06_01_000003_create_oauth_refresh_tokens_table', 2),
(10, '2016_06_01_000004_create_oauth_clients_table', 2),
(11, '2016_06_01_000005_create_oauth_personal_access_clients_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

DROP TABLE IF EXISTS `oauth_access_tokens`;
CREATE TABLE IF NOT EXISTS `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('ec6a949cbe6de4384192a549ba395e7f39c625d18a4129ca0e19f216b3384ae21666545d55944843', 1, 1, 'AuthToken', '[]', 0, '2023-01-30 09:23:59', '2023-01-30 09:23:59', '2024-01-30 15:23:59'),
('bc6505cf88be4f5149e764391a1b4bc4c73f26b037b62ac156402dbc585a9a3424c20e4c1661a808', 1, 1, 'AuthToken', '[]', 0, '2023-01-30 09:24:09', '2023-01-30 09:24:09', '2024-01-30 15:24:09'),
('79c320691354a5e21034d00de72fb849713b0469673ef7a499d766fe10a06dc37cf5f304b164a0a9', 1, 1, 'authToken', '[]', 0, '2023-01-30 10:33:42', '2023-01-30 10:33:42', '2024-01-30 16:33:42'),
('3be8ec1f72107f40503fadcff2fbcb8d069c30daf125037f24038ea5675ef5a3025acbb4c106592e', 2, 1, 'authToken', '[]', 0, '2023-01-30 10:54:48', '2023-01-30 10:54:48', '2024-01-30 16:54:48'),
('beb61d1125080bee24dbbccb867cdcd5a5c68d2b502334f5547e654389b86cf0c8e73ee17b2cfed4', 1, 1, 'AuthToken', '[]', 0, '2023-01-30 20:48:38', '2023-01-30 20:48:38', '2024-01-31 02:48:38'),
('0b870fca182add3819a219a1e75f8d2dc8258655f7b5dcdf5c440c9527a059fa4cacc6e4ceb63571', 1, 1, 'AuthToken', '[]', 0, '2023-01-30 20:48:44', '2023-01-30 20:48:44', '2024-01-31 02:48:44'),
('7bcdaa38df97deb9f0fcabbd11cbd8064a2e0e54850750853755583319fffcad43258dfada2b83fd', 1, 1, 'AuthToken', '[]', 0, '2023-01-30 20:48:46', '2023-01-30 20:48:46', '2024-01-31 02:48:46'),
('000fd86534c83524e4a9a8a41558fe11e4228da2a44dd79c18f8e1a1ac8d65907c1c3abcd0139e21', 3, 1, 'authToken', '[]', 0, '2023-01-31 06:12:16', '2023-01-31 06:12:16', '2024-01-31 12:12:16'),
('1f035e844129298b45a8f74a7f4c4bc4635bdce7dbf3e598e3c91842aa6db72f10fd6fca59d91599', 4, 1, 'authToken', '[]', 0, '2023-01-31 06:37:04', '2023-01-31 06:37:04', '2024-01-31 12:37:04'),
('065efb3539dc3f40e6bc75cf22d586cc680d9ee96ac532b69545ee80d95e531544ea6e5728353e5a', 5, 1, 'authToken', '[]', 0, '2023-01-31 06:38:17', '2023-01-31 06:38:17', '2024-01-31 12:38:17'),
('b0c227717bd6fc4e634f65a6d79a2e3e57783853449c35d39914187ef52f97d99ba39405d0ee10a3', 6, 1, 'authToken', '[]', 0, '2023-01-31 06:43:21', '2023-01-31 06:43:21', '2024-01-31 12:43:21'),
('ede0a698c0fbea68648982031a53ada2180650a84e7a9d1be747df296205438c8c59d2ba3e93182a', 7, 1, 'authToken', '[]', 0, '2023-01-31 06:47:32', '2023-01-31 06:47:32', '2024-01-31 12:47:32'),
('3c79994531ac50eca1e8f021f56734855fcb9cd945542d5c11705e1009b7ae60694f41f8bc2fc6b9', 3, 1, 'authToken', '[]', 0, '2023-01-31 07:23:35', '2023-01-31 07:23:35', '2024-01-31 13:23:35'),
('7dd5e8f3661d4df43266cbdd0b6cf19e18c5f49423cb50351134c80ee396e8b053be53a4e1389ddd', 3, 1, 'authToken', '[]', 0, '2023-01-31 07:27:11', '2023-01-31 07:27:11', '2024-01-31 13:27:11'),
('85569f9cb17bca67a11649a79a6b23846cd736db0a3530adbc53c551e3b060b4a2e9cb675f26969c', 3, 1, 'authToken', '[]', 0, '2023-01-31 07:58:34', '2023-01-31 07:58:34', '2024-01-31 13:58:34'),
('aac980493a776398ad3d10ac6d83c34cafb9982ecedba9fe26cf2317dc12d86216839775dc5d3a6c', 3, 1, 'authToken', '[]', 0, '2023-02-01 02:28:59', '2023-02-01 02:28:59', '2024-02-01 08:28:59'),
('654efb848dbf7ae2b6291d95ae7e26c1eb7d211bb0ad0ebe18f155fcc1b0a0f549cd3fc5dcd93e44', 3, 1, 'authToken', '[]', 0, '2023-02-01 04:00:52', '2023-02-01 04:00:52', '2024-02-01 10:00:52'),
('b19b91c2670da6070e13b810866775d9008f619fcfc133c7f88a582720a3c4578d09679afae01ab9', 3, 1, 'authToken', '[]', 0, '2023-02-01 04:01:03', '2023-02-01 04:01:03', '2024-02-01 10:01:03'),
('28ad7bc05bd6d0c9761756054d105005a032c88e9a5d5d929b933eda2e5821ee73eb66a52fb692c9', 3, 1, 'authToken', '[]', 0, '2023-02-01 04:19:32', '2023-02-01 04:19:32', '2024-02-01 10:19:32'),
('0f478216d555a71e7cd6a74a56849c2b03a2f194844fba3184ed119f86f18af7503a50c120b0f8af', 3, 1, 'authToken', '[]', 0, '2023-02-01 04:21:26', '2023-02-01 04:21:26', '2024-02-01 10:21:26'),
('5273800e86aa7f73321607c41dff4728d2594e85445876c9a9de33072b12b3cf2a5093e152d4ac8d', 3, 1, 'authToken', '[]', 0, '2023-02-01 04:22:12', '2023-02-01 04:22:12', '2024-02-01 10:22:12'),
('7240986d7eda0d9748ec72f343ce4c4eb46df05dcc42839b2423e20d078a711348247e29ac6d921b', 3, 1, 'authToken', '[]', 0, '2023-02-01 04:22:50', '2023-02-01 04:22:50', '2024-02-01 10:22:50'),
('7ec03b58f2d341525e44d476788372c881f71a95b081c349527d0c7ac568953131ff0c76c207cfd6', 3, 1, 'authToken', '[]', 0, '2023-02-01 04:37:51', '2023-02-01 04:37:51', '2024-02-01 10:37:51'),
('f1206759c63042495a5452327b05ac5a3507d857eccd892a37e697d2c501808afb965ee088992a87', 3, 1, 'authToken', '[]', 0, '2023-02-01 04:39:13', '2023-02-01 04:39:13', '2024-02-01 10:39:13'),
('a5883bd398413297d4834a116f74d7fa10b81952fba826e5fca6accb13014050f170e5939c79a44a', 3, 1, 'authToken', '[]', 0, '2023-02-01 04:39:38', '2023-02-01 04:39:38', '2024-02-01 10:39:38'),
('f3fdd335557827eb2c75d175de92f2954d41d192d30828f6966f493e190037b2803abe3ae6d6742d', 3, 1, 'authToken', '[]', 0, '2023-02-01 07:32:33', '2023-02-01 07:32:33', '2024-02-01 13:32:33');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

DROP TABLE IF EXISTS `oauth_auth_codes`;
CREATE TABLE IF NOT EXISTS `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_auth_codes_user_id_index` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

DROP TABLE IF EXISTS `oauth_clients`;
CREATE TABLE IF NOT EXISTS `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'V7dKFCFZH4rXyN0eQyrz9BF0W4gvLTzrU8BD9AEc', NULL, 'http://localhost', 1, 0, 0, '2023-01-30 07:07:53', '2023-01-30 07:07:53'),
(2, NULL, 'Laravel Password Grant Client', 'XY5At456sfbSNgWixSJG9kxihpQGjInjBIf5Z1RD', 'users', 'http://localhost', 0, 1, 0, '2023-01-30 07:07:53', '2023-01-30 07:07:53');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

DROP TABLE IF EXISTS `oauth_personal_access_clients`;
CREATE TABLE IF NOT EXISTS `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2023-01-30 07:07:53', '2023-01-30 07:07:53');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

DROP TABLE IF EXISTS `oauth_refresh_tokens`;
CREATE TABLE IF NOT EXISTS `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
CREATE TABLE IF NOT EXISTS `projects` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0=>incomplete, 1=>complete',
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `projects_user_id_foreign` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `name`, `description`, `status`, `user_id`, `created_at`, `updated_at`) VALUES
(31, 'Dhaka Sports one', 'Dhaka Sports oneDhaka Sports oneDhaka Sports oneDhaka Sports oneDhaka Sports oneDhaka Sports oneDhaka Sports oneDhaka Sports oneDhaka Sports oneDhaka Sports oneDhaka Sports one', 0, 1, '2023-01-29 11:33:48', '2023-01-29 11:33:48'),
(32, 'Dhaka Sports two', 'Dhaka Sports twoDhaka Sports twoDhaka Sports twoDhaka Sports twoDhaka Sports twoDhaka Sports twoDhaka Sports twoDhaka Sports twoDhaka Sports twoDhaka Sports twoDhaka Sports twoDhaka Sports twoDhaka Sports twoDhaka Sports twoDhaka Sports twoDhaka Sports twoDhaka Sports twoDhaka Sports two', 0, 1, '2023-01-29 11:34:03', '2023-01-29 11:34:03'),
(33, 'Dhaka Sports three', 'Dhaka Sports threeDhaka Sports threeDhaka Sports threeDhaka Sports threeDhaka Sports threeDhaka Sports threeDhaka Sports threeDhaka Sports threeDhaka Sports three', 0, 1, '2023-01-29 11:34:18', '2023-01-29 11:34:18'),
(34, 'Media House one', 'Media House oneMedia House oneMedia House oneMedia House oneMedia House oneMedia House oneMedia House oneMedia House oneMedia House oneMedia House oneMedia House one', 0, 1, '2023-01-29 11:34:41', '2023-01-29 11:34:41'),
(35, 'Media House two', 'Media House twoMedia House twoMedia House twoMedia House twoMedia House twoMedia House twoMedia House twoMedia House twoMedia House twoMedia House twoMedia House two', 0, 1, '2023-01-29 11:34:56', '2023-01-29 11:34:56'),
(36, 'Dhaka Sports four', 'Dhaka Sports fourDhaka Sports fourDhaka Sports fourDhaka Sports fourDhaka Sports fourDhaka Sports fourDhaka Sports fourDhaka Sports fourDhaka Sports fourDhaka Sports fourDhaka Sports four', 0, 1, '2023-01-29 11:35:16', '2023-01-29 11:35:16'),
(37, 'Media House five', 'Media House fiveMedia House fiveMedia House fiveMedia House fiveMedia House fiveMedia House fiveMedia House fiveMedia House fiveMedia House fiveMedia House fiveMedia House fiveMedia House fiveMedia House fiveMedia House five', 0, 1, '2023-01-29 11:35:34', '2023-01-29 11:35:34');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
CREATE TABLE IF NOT EXISTS `tasks` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0=>incomplete, 1=>complete',
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tasks_project_id_foreign` (`project_id`)
) ENGINE=MyISAM AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `name`, `description`, `status`, `project_id`, `created_at`, `updated_at`) VALUES
(49, 'New task two', 'New task twoNew task twoNew task twoNew task twoNew task twoNew task twoNew task twoNew task twoNew task twoNew task twoNew task twoNew task twoNew task two', 0, 37, '2023-01-29 22:39:46', '2023-01-29 22:42:44'),
(48, 'new task one', 'new task onenew task onenew task onenew task onenew task onenew task onenew task onenew task one', 0, 37, '2023-01-29 12:14:06', '2023-01-29 12:14:06');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Partha', 'partha@gmail.com', NULL, '$2y$10$OV07ZP60ePdDpSbalZDWKOvNddNpZdI8DlccpeYQfKmuxLEtS.IPe', NULL, '2023-01-26 09:33:38', '2023-01-26 09:33:38'),
(2, 'Partha Ghose', 'protap@gmail.com', NULL, '$2y$10$TWgETHner3W/kDml9uOwIuFfO7EXltvMS/OWYxDSmSYAar/AzzaZC', NULL, '2023-01-30 10:54:48', '2023-01-30 10:54:48'),
(3, 'Partha Ghose', 'ppghose0@gmail.com', NULL, '$2y$10$MSIjcX8PHpE9kH8VfZ72Pu6G9d5LPwdKubECLsdVkPdzw2niG6wxG', NULL, '2023-01-31 06:12:15', '2023-01-31 06:12:15'),
(4, 'sdsd', 'test@gmail.com', NULL, '$2y$10$0yW9r91OWN4BcG7iVJy57O0T2xT1J6Z/Vk50simeZQg31GerMqCrK', NULL, '2023-01-31 06:37:03', '2023-01-31 06:37:03'),
(5, 'fgth', 'dfg@gmail.com', NULL, '$2y$10$zMOwaRGHUHVSy6U/9lw94.6rpTQxXmEFjzA9eBX0374eps.co7I/u', NULL, '2023-01-31 06:38:17', '2023-01-31 06:38:17'),
(6, 'partha', 'ppghose@gmail.com', NULL, '$2y$10$EtB.UR1J2rRYqvV8OsVVAuHVe/CWjLN7E5Ddp/HjmNOl6zcmF.e2C', NULL, '2023-01-31 06:43:21', '2023-01-31 06:43:21'),
(7, 'partha', 'protap12@gmail.com', NULL, '$2y$10$Nl0FKPGzBsT6j9SZv1aWvO1tWYLW32vEPrSC/vUpyUdSXDJ3UWKxy', NULL, '2023-01-31 06:47:32', '2023-01-31 06:47:32');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
