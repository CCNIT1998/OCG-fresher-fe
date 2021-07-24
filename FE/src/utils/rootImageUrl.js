const urlImage=(url)=> {
    if (!url) {
      return "https://cf.shopee.vn/file/f4e3e6dd332e562a176a23a92a3ec6d0"
    }
    return `http://localhost:3000/images/${url}`
  }
  export default urlImage