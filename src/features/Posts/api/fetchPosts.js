export default async function fetchPosts(page){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
    if (!response.ok)
        throw new Error('Ошибка: ', response.status)
    return await response.json();
}