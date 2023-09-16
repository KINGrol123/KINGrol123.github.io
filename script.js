function addComment(postId) {
    const commentText = document.getElementById(`comment-text-${postId}`).value;
    if (commentText.trim() === "") {
        alert("Gelieve een reactie in te voeren.");
        return;
    }

    const reactiesContainer = document.querySelector(`.post[data-post-id="${postId}"] .comments__list`);

    const commentDiv = document.createElement("div");
    commentDiv.className = "comment";
    commentDiv.innerHTML = `
        <img class="user__avatar" src="Images/Facebook profile picture.png" alt="Gebruiker 1" />
        <div class="comment__content">
            <div class="comment__box">
                <p><strong>Jacorieke Mekking</strong> ${commentText}</p>
            </div>
            <div class="comment__actions">
                <p class="action">
                    <span class="like-button" onclick="toggleLike(this)">
                        Leuk
                        <span class="like-button__icon"></span>
                    </span>
                </p>
                <p class="action-space">-</p>
                <p class="action">
                    Beantwoorden
                </p>
            </div>
        </div>
    `;

    reactiesContainer.appendChild(commentDiv);

    // Wis het invoervak
    document.getElementById(`comment-text-${postId}`).value = "";
}

function toggleLike(button) {
    // Plaats hier de code om 'Leuk' te schakelen
}
