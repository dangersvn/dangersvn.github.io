(function () {
  let baseUrl = "http://jsonplaceholder.typicode.com";
  let usernameElement;
  let displaynameElement;
  let addressElement;
  let companyElement;
  let websiteElement;

  let postsContainerElement;
  let container = document.querySelector(".container");

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
    console.log(postsContainerElement);
    

  }
  function search() {
    let id = inputUserId.value;
    let userInfo = getUserInfo(id);
    userInfo
    .then(displayUserInfo)
    .catch(e => alert(e));
    getPostsByUserId(id).then(displayPosts);
  }

  function viewPostDetails(id) {

    alert("View details clicked. Post id" + id);
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
    let divPost;
    for(let post of userPosts) {
      divPost = createPostComponent(post);
      divPost.innerHTML = `<p class="title">${post.title}</p>
      <div class="view-details" onclick="viewPostDetails(${post.id})">View detais</div>`
      postsContainerElement.append(divPost);
      
    }
 
  }
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
  }

  /**
   * <div class="post" data-user-id="" data-post-id="">
        <p class="title">sunt aut facere repellat provident occaecati excepturi optio reprehenderit</p>
        <div class="view-details">View detais</div>
      </div>
   */
  function createPostComponent(post) {

    var node = document.createElement("div");
    node.className = "post";
    // node.classList.add("post");

    var b = document.createAttribute("data-post-id");
    b.value = post.id;
    node.setAttributeNode(b);
    console.log(node.getAttribute("data-post-id")); 

    return node
    
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
  function getCommentsByPostId(postId) {
    return fetch(`${baseUrl}/comments/postId=${postId}`);
  }
})()