import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';

chai.use(chaiHttp);

describe('Property', () => {

describe('adding a Property', () => {
    it('should add new Property', (done) => {
      const property = {
        owner: 2,
        status: 'available',
        price: 250000,
        city: 'kigali city',
        state: 'pro@gmail.com',
        address: 'kigali',
        type: '3 bedrooms',
        imageUrl: 'images/hose1.jpg',
      };
      chai
        .request(app)
        .post('/api/v1/property')
        .send(property)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a('object');
          // chai.expect(res.body.message).to.equal('created a new Property');

          done();
        });
    });
  });
});