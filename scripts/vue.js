//*** Vue.js ***/

const app = new Vue({
    el: "#app",
    data: {
        loading: true,
        books: [],
        searchQuery: "",
        apiUrl: "https://api.myjson.com/bins/zyv02",
        message: "No results found. ",
    },

    created() {
        this.fetchData(this.apiUrl)
            .then(() => console.log('called before', this.books))
    },

    methods: {

        async fetchData(apiUrl) {
            this.books = await fetch(apiUrl, {
                    method: "GET",
                    dataType: "jsonp",
                })
                .then(data => data.json())
                .then(data => data.books)
                .catch(error => console.log(error))
                this.loading = false
            // books = await (books)
            // await (executeAfterFetch())
        }

    },

    computed: {
        
        filterSearch() {
            return this.books.filter( book => {
              console.log(book.title, this.searchQuery)
              return !this.searchQuery || book.title.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
            })
}
    }



})



//*** JavaScript ***/
// let apiUrl = "https://api.myjson.com/bins/zyv02";

// let books;

// async function fetchData(url) {

//     books = await fetch(url, {
//             method: "GET",
//             dataType: "jsonp",
//         })
//         .then(data => data.json())
//         .then(data => data.books)
//         .catch(error => console.log(error))
//     books = await (books)
//     // await (executeAfterFetch())
// }


// fetchData(apiUrl)
//     .then(()=> console.log('called before',books))

// // console.log('calles after', books)

