import API from "./apiMeteologia";

const getEntrypoints = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const entrypoints = await API.get('/')
      resolve(entrypoints.data)
    } catch (err) {
      reject(err)
    }
  })
}

export default getEntrypoints 