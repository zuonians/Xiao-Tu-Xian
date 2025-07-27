import request from '@/utils/http';


export const getCategoryAPI = (id) => {
  return request({
    url:'/category',
    params:{
      id
    }
  })
}
