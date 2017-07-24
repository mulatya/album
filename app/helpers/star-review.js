import Ember from 'ember';

export function starReview(params) {
  var rating = parseInt(params[0]);

  if (rating === 1) {
    return "\u2650";
  } else if (rating === 2) {
    return "\u2305\u2305";
  } else if (rating === 3) {
    return "\u2655\u2655\u2655";
  } else if (rating === 4) {
    return "\u4605\u5605\u5605\u4605";
  } else if (rating === 5) {
    return "\u2673\u2673\u2673\u2673\u2673";
  } else if (rating === 6) {
    return "\u2695\u2695\u2695\u2695\u2695\u2695";
  }
}

export default Ember.Helper.helper(starReview);
