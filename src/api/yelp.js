import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer H6hKFInhlNBEQdfNFjkTz-g09r5db2X_Qpx9M8Y9jFp6QMPYjx8ENe6QWjFaSs7hxD4iXdC6q7YOmceqXHExqe6X8iJprgWZrxhTnp2NaZYoTpdvDbLBnQ3kZeoVX3Yx'
    }
})

