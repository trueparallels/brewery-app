import { compose, toUpper, toLower, head, tail, concat, converge} from 'ramda';

export function toTitleCase(input) {
  const firstCharToUpper = compose(toUpper, head);
  const restOfStringToLower = compose(toLower, tail);

  return converge(concat, [firstCharToUpper, restOfStringToLower])(input)
};