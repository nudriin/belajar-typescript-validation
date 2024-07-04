import { z } from 'zod';

describe('Data Type Convertion', () => {
    it('should support data type convertion', () => {
        /**
         * Kadang-kadang, input dari pengguna bisa menggunakan tipe data berbeda dari schema,
         * contoh input number berupa string “1234”, input boolean berupa string “true”
         * Zod memiliki object bernama coerce yang bisa digunakan
         * untuk melakukan konversi tipe data secara otomatis
         */

        const username = z.coerce.string().min(3).max(100);
        const isAdminSchema = z.coerce.boolean();
        const priceSchema = z.coerce.number().min(0).max(100000000);

        // Semua tipe di bawah ini akan di konversi, karena kita menggunakan coerce
        const email = username.parse(12333);
        console.log(email);
        expect(email).toBe('12333');

        const isAdmin = isAdminSchema.parse('true');
        console.log(isAdmin);
        expect(isAdmin).toBe(true);

        const price = priceSchema.parse('123456');
        console.log(price);
        expect(price).toBe(123456);
    });
});
