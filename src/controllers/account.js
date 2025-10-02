exports.login = (req, res) => {
      const { username, password } = req.body;
      console.log(req.body);
      // Dummy authentication logic
      if (username === 'admin' && password === 'password') {
            return res.status(200).json({ message: 'Login successful', token: 'dummy-jwt-token' });
      } else {
            return res.status(401).json({ message: 'Invalid credentials' });
      }
};