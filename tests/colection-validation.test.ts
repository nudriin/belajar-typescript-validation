import { z, ZodError } from 'zod';

describe('Collection Validation', () => {
    // Selain Object, kita juga bisa melakukan validasi untuk tipe Collection,
    // seperti Array, Set dan Map
    it('should support array validation', () => {
        // schema untuk array
        const arraySchema = z.array(z.string());
        // min dan max disini mengacu ke jumlah data pada array
        // pada schema kedua, array harus memiliki minimal 3 data
        const arraySchema2 = z.array(z.number()).min(3).max(100);

        const array1 = new Array<string>('Nurdin', 'hishasy', 'sunny');
        const result1 = arraySchema.parse(array1);
        console.log(result1);

        const array2: Array<number> = [1, 2, 3];
        const result2 = arraySchema2.parse(array2);
        console.log(result2);

        try {
            arraySchema2.parse([1, 2]); //* jika hanya 2 seperti ini maka akan terjadi error
        } catch (e) {
            if (e instanceof ZodError) {
                console.log(e.errors);
            }
        }
    });

    it('should support set validation', () => {
        const setSchema = z.set(z.string()).min(3).max(100);

        const set: Set<string> = new Set<string>(['a', 'b', 'c', 'd', 'e']);
        const result = setSchema.parse(set);

        console.log(result);
    });

    it('should support map validation', () => {
        const mapSchema = z.map(z.number(), z.string()); // map tidak memiliki min dan max

        const map: Map<number, string> = new Map<number, string>([
            [443, 'https'],
            [80, 'http'],
            [21, 'ftp'],
        ]);

        const result = mapSchema.parse(map);
        console.log(result);
    });
});
