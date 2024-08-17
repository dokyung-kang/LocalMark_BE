import {commentLikeService, postLikeService} from '../services/Like.service.js';
import {status} from "../../config/response.status.js";
import { response } from "../../config/response.js";

export const postLike = async(req,res,next)=>{
  return res.send(response(status.SUCCESS, await postLikeService(req.params.postId,req.currentId)));
}

export const commentLike = async(req,res,next)=>{
  return res.send(response(status.SUCCESS, await commentLikeService(req.params.commentId, req.currentId)));
}