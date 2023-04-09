function getProducts(){
    return async(dispatch, getState)=>{
        try{
            let searchQuerry = qurry.get('q') || "";
            console.log("쿼리값은? ", searchQuerry)
            let url = `https://my-json-server.typicode.com/hijiyun/hnm-server/products?q=${searchQuerry}`;
            let response = await fetch(url)
            let data = await response.json()
            if(data.length < 1){
            if(searchQuerry !== ""){
                setError(`${searchQuerry}와 일치하는 상품이 없습니다. `)
            }else{
                throw new Error("결과가 없습니다.")
              }
            }
            setProductList(data);
          } catch (err) {
            setError(err.message)
          }
    }
}

export productAction={getProducts}