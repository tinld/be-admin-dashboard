const authenticationMiddleware = (req, res, next) => {
      const authHeader = req.headers['authorization'];
      if (authHeader === 'Bearer dummy-jwt-token') {
            next();
      } else {
            res.status(403).json({ message: 'Forbidden' });
      }
}

module.exports = authenticationMiddleware;