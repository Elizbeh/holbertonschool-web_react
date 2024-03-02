import { schema } from 'normalizr';

const courseSchema = new schema.Entity('courses');

const coursesSchema = new schema.Array(courseSchema);

export const coursesNormalizer = (data) => normalize(data, coursesNormalizer);