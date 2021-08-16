import Joi from "joi";

const bodySchema = Joi.object({
  name: Joi.string().length(4),
  semester: Joi.string().length(1),
  link: Joi.string().pattern(new RegExp(".+.pdf$")),
  subjectId: Joi.number().integer(),
  teacherId: Joi.number().integer(),
  typeId: Joi.number().integer(),
});

export { bodySchema };
