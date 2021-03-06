import { signup, login, } from '../controllers/userController'
import { location, list_all_location } from '../controllers/locationController'
import { personalInfo } from '../controllers/personalinfoControler'
import { parisInfo, list_all_paris } from '../controllers/parisControler'
import { londonInfo, list_all_london } from '../controllers/londonController'
import { reviewInfo } from '../controllers/reviewControler'

import { singaporeInfo, list_all_singapore } from '../controllers/singaporeController'
const { check, validationResult } = require('express-validator/check')

// import { check ,validationResult} from 'express-validator/check'

const routes = (app) => {
  app.route('/login')
    .post(login)
  app.route('/location')
    .post(location)
    .get(list_all_location)
  app.route('/personinfo')
    .post(personalInfo)
  app.route('/parisinfo')
    .post(parisInfo)
  app.route('/p')
    .get(list_all_paris)
  app.route('/londoninfo')
    .post(londonInfo)
    .get(list_all_london)
  app.route('/singaporeinfo')
    .post(singaporeInfo)
    .get(list_all_singapore)
  app.route('/reviewinfo')
    .post(reviewInfo)

  // .delete(delete_Data)
  app.post('/signup',
    // [
    //     check('Firstname').isEmpty(),
    //     check('Lastname').isEmpty(),
    //     check('Email').isEmail(),
    //     check('Password').isLength({min:5,max:8}),
    //     check('ConfirmPassword').isLength({min:5,max:8}),
    //   ]
    [
      check('Firstname').not().isEmpty().trim(),
      check('Lastname').not().isEmpty().trim().withMessage('Lastname is required'),
      check('Email').not().isEmpty().trim().withMessage('Email is requierd'),
      check('Password').isLength({ max: 8 }).withMessage('Password must have more than 5 characters'),
      check('ConfirmPassword').not().isEmpty().trim().withMessage('Password does not match'),
      check('Mobilenumber').not().isEmpty().trim(),
    ], signup, (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      User.create({
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Email: req.body.Email,
        Password: req.body.Password,
        ConfirmPassword: req.body.ConfirmPassword,
        Mobilenumber: req.body.Mobilenumber

      }
      ).then(user => res.json(user));
    });
  // app.post('/login',login_Data)
  //  app.route('/assessment/:id')
  //  .put(update_Data)           
}

export default routes







