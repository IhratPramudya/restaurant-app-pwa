/* eslint-disable no-unused-vars */
const templateButtonLike = () => `
    <button aria-label="like resto" id="likeButton" class="like_button">
    <span class="material-icons">
    thumb_up_off_alt
    </span>
    </button>
  `;

const templateButtonLiked = () => `
    <button aria-label="unlike resto" id="likeButton" class="like_button">
    
    <span class="material-icons">
thumb_up
</span>
    </button>
`;

export {
  templateButtonLike,
  templateButtonLiked,
};
