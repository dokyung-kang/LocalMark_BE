export const addPostResponseDTO = ({post, images}) => {
    return { post, images };
}

export const modifyPostResponseDTO = ({post, images}) => {
    return { post, images };
}

export const postsResponseDTO = (posts, images) => {
  
    const postsData = [];

    for (let i = 0; i < posts.length; i++) {

        postsData.push({
            "post_id": posts[i].id,
            "user_id": posts[i].user_id,
            "category": posts[i].category,
            "title": posts[i].title,
            "thumbnail_filename": posts[i].thumbnail_filename,
            "content": posts[i].content,
            "created_date": formatDate(posts[i].created_date),
            "modified_date": formatDate(posts[i].modified_date),
            "commentNum":posts[i].commentNum,
            "likeNum": posts[i].likeNum,
        })
    }

    return {"postData": postsData};

}

export const postDetailResponseDTO = (postDetail, commentNum, likeNum) => {

    console.log("post detail:", postDetail[0]);
    console.log("images:", images);
    postDetail[0].created_at = formatDate(postDetail[0].created_at);

    const imagesData = [];

    for (let i = 0; i < images.length; i++) {
        imagesData.push({
            "images_id": images[i].id,
            "filename": images[i].filename,
        }) 
    }

    return {
        "post": postDetail[0],
        "commentNum": commentNum,
        "likeNum": likeNum,
        "imagesData": imagesData
    };
}

const formatDate = (date) => {
    return new Intl.DateTimeFormat('kr').format(new Date(date)).replaceAll(" ", "").slice(0, -1);
}