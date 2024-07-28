import axios from "axios"

const dataBlog = axios.request('https://newsapi.org/v2/top-headlines?country=id&apiKey=851bd66278d3495b9de648b3d272a89b').then(
    function (response) {
        return response.data.articles
    }
)

export default dataBlog