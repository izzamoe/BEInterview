import request from 'supertest';
import app from '../app'; // Ubah ini sesuai dengan file Express app Anda

describe('GET /members', () => {
    it('should return a list of members with their borrowings count', async () => {
        const response = await request(app).get('/members');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('members');
        expect(response.body.members).toHaveLength(3); // Ubah sesuai dengan jumlah anggota yang diharapkan
        // Tambahkan asserstion lainnya sesuai kebutuhan
    });


});