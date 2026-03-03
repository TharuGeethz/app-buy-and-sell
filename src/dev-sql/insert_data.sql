
CREATE TABLE `buy-and-sell`.`listing` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `user_id` VARCHAR(40) NOT NULL,
  `views` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
)

TRUNCATE TABLE `buy-and-sell`.listing;

INSERT INTO `buy-and-sell`.listing 
(name, description, price, user_id, views)
VALUES

-- 10 rows for user_id = 12345
('MacBook Pro 2019', '16GB RAM, 512GB SSD, great condition', 1200.00, 12345, 0),
('GoPro Hero 10', 'Action camera with accessories', 350.00, 12345, 0),
('Electric Guitar', 'Fender style, barely used', 500.00, 12345, 0),
('Gaming Keyboard', 'RGB mechanical keyboard', 120.00, 12345, 0),
('Mountain Tent', '4-person waterproof camping tent', 180.00, 12345, 0),
('iPad Air', '64GB, space grey', 420.00, 12345, 0),
('Fitness Tracker', 'Tracks heart rate and sleep', 75.00, 12345, 0),
('Office Desk Chair', 'Ergonomic mesh chair', 160.00, 12345, 0),
('External Hard Drive', '1TB portable storage', 65.00, 12345, 0),
('Bluetooth Mouse', 'Wireless silent click mouse', 25.00, 12345, 0),

--  40 rows for other users
('PS5 Console', 'Includes controller and cables', 750.00, 20001, 0),
('Air Conditioner', '1.5 ton inverter AC', 900.00, 20002, 0),
('Smart TV 65"', '4K UHD HDR', 1100.00, 20003, 0),
('Books Collection', '20 fiction novels', 60.00, 20004, 0),
('Fridge Double Door', 'Large capacity refrigerator', 850.00, 20005, 0),
('Microwave Oven', '900W digital microwave', 130.00, 20006, 0),
('Study Table', 'Wooden table with drawer', 140.00, 20007, 0),
('Bed Mattress', 'Queen size memory foam', 300.00, 20008, 0),
('Laptop Dell XPS', 'i7, 16GB RAM', 950.00, 20009, 0),
('Sound Bar', 'Dolby Atmos supported', 280.00, 20010, 0),

('Canon Printer', 'Wireless inkjet printer', 150.00, 20011, 0),
('Drone Camera', '4K aerial photography drone', 600.00, 20012, 0),
('Cookware Set', 'Non-stick 10-piece set', 90.00, 20013, 0),
('Air Purifier', 'HEPA filter system', 210.00, 20014, 0),
('Wall Clock', 'Modern silent wall clock', 35.00, 20015, 0),
('Table Fan', 'High speed oscillating fan', 45.00, 20016, 0),
('Water Heater', 'Instant electric heater', 250.00, 20017, 0),
('Tool Kit', 'Complete home repair kit', 85.00, 20018, 0),
('Camera Tripod', 'Adjustable aluminum tripod', 55.00, 20019, 0),
('Car Vacuum Cleaner', 'Portable mini vacuum', 70.00, 20020, 0),

('Yoga Mat', 'Non-slip fitness mat', 30.00, 20021, 0),
('Wardrobe Closet', '3-door wooden wardrobe', 650.00, 20022, 0),
('Bean Bag', 'Comfortable lounge bean bag', 80.00, 20023, 0),
('Projector HD', '1080p home theater projector', 400.00, 20024, 0),
('Mixer Grinder', '750W powerful motor', 110.00, 20025, 0),
('Camping Stove', 'Portable gas stove', 95.00, 20026, 0),
('Electric Scooter', '25km range', 500.00, 20027, 0),
('Hair Dryer', 'Professional salon dryer', 60.00, 20028, 0),
('Desk Lamp', 'LED adjustable lamp', 40.00, 20029, 0),
('Bookshelf Large', '6-tier wooden shelf', 220.00, 20030, 0),

('Smartphone OnePlus', '128GB, dual SIM', 390.00, 20031, 0),
('Guitar Amplifier', '50W combo amp', 210.00, 20032, 0),
('Car Dash Cam', 'Full HD recording', 130.00, 20033, 0),
('Washing Machine', 'Front load 8kg', 750.00, 20034, 0),
('Electric Drill', 'Cordless drill set', 120.00, 20035, 0),
('Dining Set', 'Table with 4 chairs', 550.00, 20036, 0),
('Office Cabinet', 'Metal 4-drawer cabinet', 180.00, 20037, 0),
('Router WiFi 5', 'Dual band router', 95.00, 20038, 0),
('Mini Fridge', 'Compact fridge for room', 300.00, 20039, 0),
('Laptop Stand', 'Adjustable aluminum stand', 45.00, 20040, 0);