import Icon from '../Icon/Icon';
import css from './Reviews.module.css';

const CamperReviews = ({ reviews = [] }) => {
  if (reviews.length === 0) {
    return <p className={css.noReviews}>No reviews yet for this vehicle.</p>;
  }

  return (
    <ul className={css.reviewList}>
      {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => {
        const initial = reviewer_name
          ? reviewer_name.charAt(0).toUpperCase()
          : '?';

        return (
          <li key={index} className={css.reviewCard}>
            <div className={css.header}>
              <div className={css.avatar}>{initial}</div>

              <div className={css.meta}>
                <p className={css.name}>{reviewer_name}</p>
                <div className={css.starsRow}>
                  {/* generate review stars and color them accordingly */}
                  {[...Array(5)].map((_, starIdx) => {
                    const isActive = starIdx < reviewer_rating;

                    return (
                      <Icon
                        key={starIdx}
                        name="star"
                        className={`${isActive ? css.activeStar : css.inactiveStar}`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <p className={css.comment}>{comment}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CamperReviews;
