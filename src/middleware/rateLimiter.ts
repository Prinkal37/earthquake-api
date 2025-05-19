import rateLimit from 'express-rate-limit';

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute window
  max: 10, // limit each IP to 10 requests per windowMs
  message: {
    message: 'Too many requests, please try again later.'
  }
});

export default rateLimiter;
