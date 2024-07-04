import { z } from 'zod';

describe('Date Validation', () => {
    it('should support date validation', () => {
        const dateSchema = z.coerce
            .date()
            .min(new Date(1980, 0, 1)) // tahun 1980, februari, tanggal 1
            .max(new Date(2023, 1, 1)); // Date(tahun, bulan<index array 0-11>, tanggal)

        // karena kita menggunakan "coerce" maka kita dapat mengirim string ke date
        const birthDay = dateSchema.parse('1980-01-10');
        console.log(birthDay);

        const birthDay2 = dateSchema.parse(new Date(2022, 0, 20));
        console.log(birthDay2);
    });
});
