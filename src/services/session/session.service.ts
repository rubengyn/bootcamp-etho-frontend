import axiosInstance from "../../modules/axios/axios.module"
import { PostSessionNewPayload, PostSessionNew } from "../user/user.types"

export default function sessionService(){
    const postSessionNew = (user: PostSessionNewPayload): Promise<PostSessionNew> => axiosInstance.post('session/new', user)
    return { postSessionNew }
}