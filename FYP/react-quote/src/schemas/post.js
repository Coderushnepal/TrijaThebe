import Joi from 'joi';

const POST_SCHEMA = Joi.object().keys({
  quotePost: Joi.string().max(500).required()
});

const UPDATE_TODO_SCHEMA = Joi.object()
  .keys({
    quotePost: Joi.string().max(500),
    isCompleted: Joi.boolean()
  })
  .min(1);

export function validatePOST(req, res, next) {
  try {
    Joi.assert(req.body, POST_SCHEMA);

    next();
  } catch (err) {
    next(err);
  }
}

export function validateEDITPOST(req, res, next) {
  try {
    Joi.assert(req.body, POST_SCHEMA);

    next();
  } catch (err) {
    next(err);
  }
}