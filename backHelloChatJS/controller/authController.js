const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { secret } = require("../middleware/config");
const connectDatabase = require("../DB/connectDb");

const generateToken = (id) => {
  const payload = { id };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class AuthController {
  async userRegistrations(req, res) {
    const { name, surname, email, password, phone } = req.body;
    const lastName = name
    const firstName = surname
    const telephone = phone
    try {
      const db = await connectDatabase();

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await db.query(`SELECT * FROM users WHERE usr_email = $1`, [
        email,
      ]);

      if (user.rows.length > 0) {
        return res.status(400).json({ error: "Email already exists" });
      }

      await db.query(
        `INSERT INTO users (usr_last_name, usr_first_name, usr_email, usr_password, usr_telephone) VALUES ($1, $2, $3, $4, $5)`,
        [lastName, firstName, email, hashedPassword, telephone]
      );
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Error during registration:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async userSignedIn(req, res) {
    console.log(req.body);
    
    const { userEmail,userPassword } = req.body;

    const email = userEmail;
    const password = userPassword;

    try {
      const db = await connectDatabase();

      const user = await db.query(`SELECT * FROM users WHERE usr_email = $1`, [
        email,
      ]);

      if (user.rows.length === 0) {
        return res.status(400).json({ error: "User not found" });
      }

      const validPassword = await bcrypt.compare(
        password,
        user.rows[0].usr_password
      );

      if (!validPassword) {
        return res.status(400).json({ error: "Invalid password" });
      }

      const token = generateToken(user.rows[0].usr_id);

      res.json({ token });
    } catch (error) {
      console.error("Error during sign in:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = new AuthController();
