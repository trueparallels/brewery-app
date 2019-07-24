import {
  compose,
  join,
  split,
  toUpper,
  toLower,
  head,
  tail,
  concat,
  converge,
  map,
  replace,
} from 'ramda';

export function toTitleCase(input) {
  const firstCharToUpper = compose(
    toUpper,
    head,
  );
  const restOfStringToLower = compose(
    toLower,
    tail,
  );

  return converge(concat, [firstCharToUpper, restOfStringToLower])(input);
}

export function presentableBreweryName(input) {
  return replace(/[^a-zA-Z0-9,' \-/]*/g, '', input);
}

export function presentableStateName(input) {
  const splitIntoWords = split('_');

  return join(' ', map(toTitleCase, splitIntoWords(input)));
}

export function getRegions() {
  return [
    'alabama',
    'alaska',
    'arizona',
    'arkansas',
    'california',
    'colorado',
    'connecticut',
    'delaware',
    'district_of_columbia',
    'florida',
    'georgia',
    'hawaii',
    'idaho',
    'illinois',
    'indiana',
    'iowa',
    'kansas',
    'kentucky',
    'louisiana',
    'maine',
    'maryland',
    'massachusetts',
    'michigan',
    'minnesota',
    'mississippi',
    'missouri',
    'montana',
    'nebraska',
    'nevada',
    'new_hampshire',
    'new_jersey',
    'new_mexico',
    'new_york',
    'north_carolina',
    'north_dakota',
    'ohio',
    'oklahoma',
    'oregon',
    'pennsylvania',
    'rhode_island',
    'south_carolina',
    'south_dakota',
    'tennessee',
    'texas',
    'utah',
    'vermont',
    'virginia',
    'washington',
    'west_virginia',
    'wisconsin',
    'wyoming',
  ];
}
