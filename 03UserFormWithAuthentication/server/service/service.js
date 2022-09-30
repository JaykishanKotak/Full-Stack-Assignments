/*
import Jwt from "jsonwebtoken";

export const signup = (req, res) => {
  const newUser = new UserSchema({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
    number: req.body.number,
  });
  newUser.save((err) => {
    if (err) {
      return res.status(400).json({
        title: "error",
        error: "email alredy exist",
      });
    } else {
      res.status(200).json({
        title: "New User Added",
      });
    }
  });
};

export const login = (req, res) => {
  UserSchema.findOne(
    {
      email: req.body.email,
    },
    (err, user) => {
      if (err)
        return res.status(500).json({
          title: "Internal Server Error",
          error: err,
        });
      if (!user)
        return res.status(401).json({
          title: "User Not Found",
          error: "Invalid User Cerdentails",
        });
      let token = Jwt.sign({ userId: user._id }, "secretkey");
      return res.status(200).json({
        title: "Logged in",
        title: token,
      });
    }
  );
};

export const user = (req, res, next) => {
  let token = req.headers.token;
  Jwt.verify(token, "secretkey", (err, decode) => {
    //If Token is  Not Valid
    if (err)
      return res.status(401).json({
        title: "Unauthorized",
      });
    //If Token is Valid
    UserSchema.findOne({ _id: decode.userId }, (err, user) => {
      if (err) return console.log(err);
      return res.status(200).json({
        title: "User DATA Fetched",
        user: {
          email: user.email,
          name: user.name,
          number: user.number,
        },
      });
    });
  });
};
*/
