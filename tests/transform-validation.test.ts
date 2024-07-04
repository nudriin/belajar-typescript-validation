import { z } from 'zod';

describe('Transform Validation', () => {
    it('should support transform validation', () => {
        // Saat membuat schema, terdapat function bernama transform
        // yang bisa kita gunakan untuk melakukan transformasi data setelah proses parse selesai
        const upercaseSchema = z
            .string()
            .min(3)
            .max(100)
            .transform((data) => {
                return data.toUpperCase();
            }); // menggunakan method tranform kita dapat mengirim data yang sudah di transformasi

        const result = upercaseSchema.parse('Nurdin');
        console.log(result); // return dari schema nya kan mengembalikan teks yang uppercase
        expect(result).toBe('NURDIN');
    });
});
