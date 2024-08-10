export const getImageFilesByPostId = 
"SELECT id, filename FROM post_image" +
"WHERE post_id = ?;";

export const getImageFileById =
"SELECT * FROM post_image" +
"WHERE id = ?;";

export const insertPostImagesyPostId =
"INSERT INTO post_image (post_id, filename)" + 
"VALUES ?;";

export const deleteImgFileById =
"DELETE FROM post_image" +
"WHERE id = ?"

export const deleteImgsFileByPostId =
"DELETE FROM post_image" +
"WHERE post_id = ?"

export const confirmImage = 
"SELECT EXISTS(SELECT 1 FROM post_image WHERE id = ?) as isExistImage;";

export const confirmImageByPostId = 
"SELECT EXISTS(SELECT 1 FROM post_image WHERE post_id = ?) as isExistImageByPostId;";
