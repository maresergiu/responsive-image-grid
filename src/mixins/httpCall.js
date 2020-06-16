import axios from 'axios'

export default {
    methods: {
        async axiosGet (url, params){
            let httpData
            
            await axios.get(url, params)
            .then(r => {
                httpData = r.data                
            })
            .catch(error => {
                httpData = {...error}
            })

            return httpData
        }
    }
}
