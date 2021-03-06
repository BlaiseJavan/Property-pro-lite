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
        imageUrl: 'images/img.jpg',
      };
      chai
        .request(app)
        .post('/api/v1/property')
        .send(property)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a('object');
          done();
        });
    });
    });
    describe('update a property with id 1', () => {
      it('should update one property object', (done) => {
        const id = 1;
        chai
          .request(app)
          .put('/api/v1/property/1')
          .end((err, res) => {
            chai.expect(res.statusCode).to.be.equal(200);
            chai.expect(res.body).to.be.a('object');
            done();
          });
      });
    });
    describe('update one property with id 10000', () => {
      it('should return error', (done) => {
        const id = 10000;
        chai
          .request(app)
          .put('/api/v1/property/10000')
          .end((err, res) => {
            chai.expect(res.statusCode).to.be.equal(400);
            chai.expect(res.body.error).to.equal('Property cannot be updated');
            done();
          });
      });
    });
    describe('mark a property as sold with id 1', () => {
      it('should mark one property object', (done) => {
        chai
          .request(app)
          .put('/api/v1/property/1')
          .end((err, res) => {
            chai.expect(res.statusCode).to.be.equal(200);
            chai.expect(res.body).to.be.a('object');
            done();
          });
      });
    });
    describe('Delete a property with id 3', () => {
      it('should return one property object', (done) => {
        const id = 3;
        chai
          .request(app)
          .delete('/api/v1/property/1')
          .end((err, res) => {
            chai.expect(res.statusCode).to.be.equal(200);
            chai.expect(res.body).to.be.a('object');
            done();
          });
      });
    });
  describe('Delete a property with id 1000', () =>{
    it('should return error', (done) => {
      const id = 10000;
      chai
        .request(app)
        .delete('/api/v1/property/1')
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(400);
          done();
        });
    });
  });
  describe('All properties', () => {
    it('should return an object of all properties', (done) => {
      chai
        .request(app)
        .get('/api/v1/property')
        .end((err, res) => {
          
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a('object');
          done();
        });
    });
  });
});