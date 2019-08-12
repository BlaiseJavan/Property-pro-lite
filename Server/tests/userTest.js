import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';

chai.use(chaiHttp);

describe('User', () => {
    describe('Sign up', () => {
      it('should be able to sign up', (done) => {
      const newUser = {
            email: 'agen1@gmail.com',
            firstName: 'agent',
            lastName: 'admin',
            address: 'kigali',
            phoneNumber: '+250788211579',
            password: 'pass123',
            isAdmin: false,  
           }
           chai.request(app)
           .post('/api/auth/signup')
           .send(newUser)
           .end((err, res)=>{
            chai.expect(res.statusCode).to.be.equal(200);
            chai.expect(res.body).to.be.a('object');
            
            done();
           }); 
      });

      it('should not be able to sign up if email exist', (done) => {
        const newUser = {
              email: 'agent@gmail.com',
              firstName: 'agent',
              lastName: 'admin',
              address: 'kigali',
              phoneNumber: '+250788211579',
              password: 'pass123',
              isAdmin: false,  
             }
             chai.request(app)
             .post('/api/auth/signup')
             .send(newUser)
             .end((err, res)=>{
              chai.expect(res.statusCode).to.be.equal(400);
              chai.expect(res.body.error).to.equal('email is taken');
              done();
             }); 
        });
      });


     
  });