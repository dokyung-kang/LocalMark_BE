// 유저가 이미 게시글 좋아요를 했는지 확인
export const postLikeWhether = `
select id from Likes where post_id= ? AND user_id = ?;
`

// 게시글 좋아요 추가
export const postAddLike = `
insert into Likes (post_id,user_id) values(?,?);
`

// 게시글 좋아요 취소
export const postDeleteLike= `
DELETE FROM Likes WHERE post_id = ? AND user_id = ?;
`
// 유저가 이미 댓글 좋아요를 했는지 확인
export const commentLikeWhether = `
select id from Likes where comment_id= ? AND user_id = ?;
`
// 댓글 좋아요 추가
export const commentAddLike = `
insert into Likes(comment_id,user_id) values(?,?);
`

// 댓글 좋아요 취소
export const commentDeleteLike= `
DELETE FROM likes WHERE comment_id = ? AND user_id = ?;
`

export const likeNum= `
    select count(*) as likeNum from likes where post_id = ?
`