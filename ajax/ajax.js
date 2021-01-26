(function () {
  let baseUrl = "http://jsonplaceholder.typicode.com";
  let usernameElement;
  let displaynameElement;
  let addressElement;
  let companyElement;
  let websiteElement;

  let postsContainerElement;
  let container = document.querySelector(".container");
  let commentsDialog;
  let postComments;

  window.onload = function () {
    container = document.querySelector(".container");
    container.classList.add("hide");

    usernameElement = document.querySelector(".username");
    displaynameElement = document.querySelector(".displayname");
    addressElement = document.querySelector(".address");
    companyElement = document.querySelector(".company");
    websiteElement = document.querySelector(".website");

    searchButton.onclick = search;

    // posts
    postsContainerElement = document.querySelector(".posts");

    //dialog details
    commentsDialog = document.getElementById('commentsDialog');
    postComments = commentsDialog.querySelector(".post-comments");
  }
  function search() {
    let id = inputUserId.value;
    let userInfo = getUserInfo(id);
    userInfo
      .then(displayUserInfo)
      .catch(e => alert(e));
    getPostsByUserId(id).then(displayPosts);
  }


  function displayUserInfo(userInfo) {
    container.classList.remove("hide");

    const { street, suite, city, zipcode } = userInfo.address;
    const { company } = userInfo;
    usernameElement.innerText = userInfo.username;
    displaynameElement.innerText = userInfo.name;
    addressElement.innerText = `${street} ${suite} ${city} ${zipcode}`;
    companyElement.innerText = `${company.name} - ${company.catchPhrase} - ${company.bs} `
    websiteElement.innerText = userInfo.website;
  }

  function displayPosts(userPosts) {
    // clear old posts
    removeAllChildNodes(postsContainerElement);
    for (let post of userPosts) {
      postsContainerElement.insertAdjacentHTML("beforeend",
        `<div class="post">
          <p class="title">${post.title}</p>
          <div class="view-details" data-post-id=${post.id}>View detais</div>
        </div>`);
    }

    // assign events
    viewDetails = postsContainerElement.querySelectorAll(".view-details");
    viewDetails.forEach(view => view.onclick = viewPostDetails)
  }


  function viewPostDetails(evt) {

    if (typeof commentsDialog.showModal === "function") {
      let postId = evt.target.dataset.postId;
      getCommentsByPostId(postId)
        .then(displayComments)
        .catch(e => alert("viewPostDetails API error: ", e));

    } else {
      alert("The <dialog> API is not supported by this browser");
    }
  }

  function displayComments(comments) {
    console.log("Comments array ", comments);
    comments.forEach(comment => {
      // comment
      postComments.insertAdjacentHTML("beforeend",
        `<p class="comment">
          <div class="user-info">
            <img id="user-image" src="../resources/aboutme/user_small.jpg">
            <p class="info"><span class="username">${comment.name}</span> <span>${comment.body}</span></p>
          </div>
        </p>`)
    })
    commentsDialog.showModal();
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  async function getUserInfo(userId) {
    let userResponse = await fetch(`${baseUrl}/users/${userId}`);
    if (userResponse.ok) {
      let userJson = await userResponse.json();
      return userJson;
    }
  }
  async function getPostsByUserId(userId) {
    let postsResponse = await fetch(`${baseUrl}/posts?userId=${userId}`);
    if (postsResponse.ok) {
      let postArray = await postsResponse.json();
      console.log(postArray)
      return postArray;
    }
  }
  //https://jsonplaceholder.typicode.com/posts/1/comments
  async function getCommentsByPostId(postId) {
    let commentsResponse = await fetch(`${baseUrl}/posts/${postId}/comments`);
    if (commentsResponse.ok) {
      let comments = await commentsResponse.json();
      console.log(comments)
      return comments;
    }
  }
})()