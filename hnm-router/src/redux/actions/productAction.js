function getProducts({searchQuerry, setQurry, setError}){
    return async(dispatch, getState)=>{
        try{
            let url = `https://my-json-server.typicode.com/hijiyun/hnm-server/products?q=${searchQuerry}`;
            let response = await fetch(url)
            let data = await response.json()
            dispatch({type:"GET_PRODUCTS_SUCCESS", payload:{data}})
            if(data.length < 1){
            if(searchQuerry !== ""){
                setError(`${searchQuerry}와 일치하는 상품이 없습니다. `)
            }else{
                throw new Error("결과가 없습니다.")
              }
            }
          } catch (err) {
            setError(err.message)
          }
    }
}

export const productAction={getProducts}