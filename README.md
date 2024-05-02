# Next Auth, real world cases

## User journey

> Landing page > Signup > Verification email > Verification Route > Dashboard

## Overview
1. `Mailtrap` is use as SMTP server with nodemailer
2. `JWT` is implemented 
   1. Hashing of password with `bcrypt` (TODO)
3. `MongoDB` is used as backend
4. 


## Routes

- /api/user/signup
- /api/user/login
- /api/user/verifyToken
- /
- /signup
- /login
<!-- * /api/user/me -->



## Todo
- [ ] Backend 
  - [ ] /signup route 
  - [ ] /verifyToken route 
  - [ ] /login route 

- [ ] Frontend
  - [ ] /login
  - [ ] /verifyToken 
  - [ ] /dashboard 
  - [ ] /logout  




## Scope for improvement
- [ ] Implement password hashing 
- [ ] Implement data validation, (zod)
- [ ] Implement edge cases
- [ ] Write test cases.
- [ ] Improve email HTML UI
- [ ] Handle URL encoding and decoding in /verifyToken
- [ ] Give Postman collection in repo