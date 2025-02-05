CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
);


INSERT INTO `cities` (`id`, `country_id`, `name`) VALUES
(1, 1, 'Rajkot');


CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
);


INSERT INTO `countries` (`id`, `name`) VALUES
(1, 'India');

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
);

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `role_name` varchar(255) NOT NULL,
  `role_id` int(11) NOT NULL
);


INSERT INTO `roles` (`id`, `role_name`, `role_id`) VALUES
(1, 'admin', 1),
(2, 'staff', 2);


CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` int(11) NOT NULL,
  `role` int(11) NOT NULL,
  `city` int(11) NOT NULL,
  `country` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
);

INSERT INTO `users` (`id`, `name`, `email`, `password`, `phone`, `role`, `city`, `country`, `created_at`) VALUES
(5, 'john', 'john@test.com', '$2b$10$yR4emBczcEkYfxVV7g/kvuqFcpXhnMO8IslKnnQkPHQo6HxXTnIm6', 2147483647, 2, 3, 1, '2025-02-04 19:33:54'),
(6, 'josh', 'josh@google.com', '$2b$10$osQJiJQSCDfExuiYT8GA0uJjaW2NRqURvFOhC/Z9cHL66JYwRNswu', 2147483647, 2, 3, 1, '2025-02-04 19:34:21'),
(7, 'harsh', 'harshsoni.1029@gmail.com', '$2b$10$ds0Jw42lr67Yhd82EqI4IuBTw5kcM71JMUzYdqM7hFGxV5kbiMi/.', 2147483647, 2, 3, 1, '2025-02-04 19:34:33'),
(8, 'raj', 'raj@gmail.com', '$2b$10$wnJv.bkwcTQmsOlNP5lBI.EsJveLxoSTR0Ya1A3xPHjTVyGg1gPEG', 2147483647, 2, 1, 1, '2025-02-04 21:37:49'),
(9, 'harshraj', 'harshraj@gmail.com', '$2b$10$8jrZqurx2AuVCt0b7zLpie9Ng5DUPdpWIf25i3sKT8RBp6HGVGi/6', 2147483647, 1, 1, 1, '2025-02-04 21:46:25');


ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`);

ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;
