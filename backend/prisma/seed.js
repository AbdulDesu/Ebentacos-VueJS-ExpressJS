import prisma from '../config/prisma.js';

async function main() {
    console.log('🔄 Memulai proses import data ke PostgreSQL...');

    // 1. Insert User (User ID 1: Sirius Aldebaran)
    await prisma.$executeRawUnsafe(`
        INSERT INTO "user" (user_id, user_name, user_email, user_phone, user_password, user_birth, user_gender)
        VALUES (1, 'Sirius Aldebaran', 'test@gmail.com', '6282121123456', 'test1234', '2024-08-08', 'male')
        ON CONFLICT (user_id) DO NOTHING;
    `);

    // 2. Insert 42 Menu Makanan
    await prisma.$executeRawUnsafe(`
        INSERT INTO "food" (food_id, food_name, food_star, food_vote, food_price, food_discount, food_desc, food_status, food_type, food_category, food_src) VALUES
        (1, 'carne asada tacos', '4.5', '872', 12000, 0, '3 pcs per hidangan', 'best seller', 'meat', 'taco', 'taco/taco-1.png'),
        (2, 'shrimp tacos', '4.5', '100', 12000, 5000, '3 pcs per hidangan', 'best seller', 'meat', 'taco', 'taco/taco-2.png'),
        (3, 'barbacoa tacos', '4.5', '500', 12000, 0, '3 pcs per hidangan', 'best seller', 'meat', 'taco', 'taco/taco-3.png'),
        (4, 'tacos al pastor', '4.5', '300', 13000, 2000, '3 pcs per hidangan', 'best seller', 'meat', 'taco', 'taco/taco-4.png'),
        (5, 'tinga tacos', '4', '250', 11000, 0, '3 pcs per hidangan', 'normal', 'meat', 'taco', 'taco/taco-5.png'),
        (6, 'campechanos tacos', '4', '500', 11000, 1000, '3 pcs per hidangan', 'new dishes', 'meat', 'taco', 'taco/taco-6.png'),
        (7, 'carnitas tacos', '4.5', '500', 14000, 2000, '3 pcs per hidangan', 'seasonal dishes online only', 'meat', 'taco', 'taco/taco-7.png'),
        (8, 'vegan tacos', '4.5', '100', 90000, 2000, '3 pcs per hidangan', 'new dishes', 'vegan', 'taco', 'taco/taco-8.png'),
        (9, 'wet burrito', '4.5', '600', 140000, 0, '1 roll per hidangan', 'new dishes', 'meat', 'burrito', 'burrito/burrito-1.png'),
        (10, 'poncho burrito', '4.5', '999', 15000, 3000, '1 roll per hidangan', 'best seller', 'meat', 'burrito', 'burrito/burrito-2.png'),
        (11, 'bean & cheese burrito', '4.5', '999', 140000, 0, '1 roll per hidangan', 'best seller', 'vegan', 'burrito', 'burrito/burrito-3.png'),
        (12, 'breakfast burrito', '4.5', '100', 12000, 2000, '1 roll per hidangan', 'new dishes', 'meat', 'burrito', 'burrito/burrito-4.png'),
        (13, 'california burrito', '4.5', '999', 14000, 0, '1 roll per hidangan', 'best seller', 'meat', 'burrito', 'burrito/burrito-5.png'),
        (14, 'chimichanga', '4', '400', 12000, 2000, '1 roll per hidangan', 'seasonal dishes', 'meat', 'burrito', 'burrito/burrito-6.png'),
        (15, 'nacho tots', '4', '699', 12000, 2000, '1 baris per hidangan', 'best seller', 'meat', 'nachos', 'nachos/nachos-1.png'),
        (16, 'root beer pork nachos', '4.5', '999', 12000, 0, '1 baris per hidangan', 'best seller', 'meat', 'nachos', 'nachos/nachos-2.png'),
        (17, 'shrimp nachos', '4.5', '999', 17000, 2000, '1 baris per hidangan', 'best seller', 'meat', 'nachos', 'nachos/nachos-3.png'),
        (18, 'chicken nachos', '4.5', '200', 11000, 0, '1 baris per hidangan', 'best seller', 'meat', 'nachos', 'nachos/nachos-4.png'),
        (19, 'only nachos', '4', '999', 70000, 2000, '1 baris per hidangan', 'normal', 'vegan', 'nachos', 'nachos/nachos-5.png'),
        (20, 'pico de gallo', '4.5', '999', 5000, 2000, '1 mangkuk per hidangan', 'best seller', 'vegan', 'nachos', 'nachos/salsa-1.png'),
        (21, 'salsa guille', '4', '699', 5000, 2000, '1 mangkuk per hidangan', 'best seller', 'vegan', 'nachos', 'nachos/salsa-2.png'),
        (22, 'tomatillo salsa', '4.5', '499', 5000, 2000, '1 mangkuk per hidangan', 'seasonal dishes', 'vegan', 'nachos', 'nachos/salsa-3.png'),
        (23, 'roasted tomato salsa', '4.5', '999', 5000, 2000, '1 mangkuk per hidangan', 'best seller', 'vegan', 'nachos', 'nachos/salsa-4.png'),
        (24, 'guacamole', '4.5', '699', 5000, 2000, '1 mangkuk per hidangan', 'best seller', 'vegan', 'nachos', 'nachos/salsa-5.png'),
        (25, 'corn salad', '3.5', '699', 5000, 1000, '1 mangkuk per hidangan', 'new dishes seasonal dishes', 'vegan', 'sides', 'side/side-1.png'),
        (26, 'keto taquitos', '4.5', '999', 90000, 0, '2 potong per hidangan', 'best seller', 'meat', 'sides', 'side/side-2.png'),
        (27, 'mexican rice', '4', '200', 5000, 0, '1 mangkuk per hidangan', 'normal', 'vegan', 'sides', 'side/side-3.png'),
        (28, 'cilantro lime rice', '4', '100', 5000, 0, '1 mangkuk per hidangan', 'new dishes', 'vegan', 'sides', 'side/side-4.png'),
        (29, 'chicken tortilla soup', '3.5', '299', 112000, 2000, '1 mangkuk per hidangan', 'new dishes', 'meat', 'sides', 'side/side-5.png'),
        (30, 'Churros', '4.5', '999', 70000, 0, '2 potong per hidangan', 'best seller', 'vegan', 'dessert', 'dessert/dessert-1.png'),
        (31, 'Fried Ice Cream', '4.5', '999', 50000, 1000, '1 potong per hidangan', 'best seller', 'vegan', 'dessert', 'dessert/dessert-2.png'),
        (32, 'Dulce de Leche', '4.5', '50', 4000, 0, '1 mangkuk per hidangan', 'new dishes', 'vegan', 'dessert', 'dessert/dessert-3.png'),
        (33, 'Sweet Corn Cake', '3', '599', 4000, 1000, '2 potong per hidangan', 'seasonal dishes online only', 'vegan', 'dessert', 'dessert/dessert-4.png'),
        (34, 'Sopapillas', '4', '199', 4000, 0, '2 potong per hidangan', 'normal', 'vegan', 'dessert', 'dessert/dessert-5.png'),
        (35, 'Conchas', '4', '299', 5000, 0, '2 potong per hidangan', 'normal', 'vegan', 'dessert', 'dessert/dessert-6.png'),
        (36, 'Horchata', '4.5', '999', 4000, 0, '1 gelas per hidangan', 'normal', 'vegan', 'dessert', 'dessert/dessert-7.png'),
        (37, 'Margarita', '4.5', '999', 5000, 0, '1 gelas per hidangan', 'best seller', 'vegan', 'drink', 'drink/drink-1.png'),
        (38, 'Michelada', '4.5', '999', 5000, 0, '1 gelas per hidangan', 'best seller', 'vegan', 'drink', 'drink/drink-2.png'),
        (39, 'paloma', '4.5', '599', 5000, 0, '1 gelas per hidangan', 'new dishes seasonal dishes', 'vegan', 'drink', 'drink/drink-3.png'),
        (40, 'Atole', '4', '999', 5000, 1000, '1 gelas per hidangan', 'best seller', 'vegan', 'drink', 'drink/drink-4.png'),
        (41, 'fruit detox', '3.5', '999', 3000, 0, '1 gelas per hidangan', 'seasonal dishes best seller', 'vegan', 'drink', 'drink/drink-5.png'),
        (42, 'Coca cola', '4.5', '99', 3000, 0, '1 gelas per hidangan', 'best seller', 'vegan', 'drink', 'drink/drink-6.png')
        ON CONFLICT (food_id) DO NOTHING;
    `);

    // 3. Sinkronisasi Auto-Increment (Sangat krusial di Postgres!)
    await prisma.$executeRawUnsafe(`SELECT setval('"user_user_id_seq"', (SELECT MAX(user_id) FROM "user"));`);
    await prisma.$executeRawUnsafe(`SELECT setval('"food_food_id_seq"', (SELECT MAX(food_id) FROM "food"));`);

    console.log('✅ Yeay! 42 Data Makanan & 1 User berhasil masuk.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });