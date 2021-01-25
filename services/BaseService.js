export class BaseService{
    constructor (){

    }
    post =(url,data) =>{
        const promise =axios({
            url:url,
            method:'POST',
            data:data
        });
        return promise;
    };
    get = (url) => {
        const promise = axios({
            url:url,
            method:'GET'
        });
        return promise;
    }
    delete = (url) => {
        const promise = axios ({
            url:url,
            method: 'DELETE'
        })
        return promise;
    }
}